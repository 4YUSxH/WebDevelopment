import {
  StateSchema,
  MessagesValue,
  type GraphNode,
  StateGraph,
  START,
  END,
  ReducedValue,
} from "@langchain/langgraph";
import { HumanMessage } from "langchain";
import {
  geminiModel,
  mistralModel,
  cohereModel,
  gptModel,
  metaModel,
} from "./aimodel.service.js";
import { z } from "zod";
import { createAgent, providerStrategy } from "langchain";

const State = new StateSchema({
  messages: MessagesValue,
  solution_1: new ReducedValue(z.string().default(""), {
    reducer: (current, next) => {
      return next;
    },
  }),
  solution_2: new ReducedValue(z.string().default(""), {
    reducer: (current, next) => {
      return next;
    },
  }),
  judge_recommendation: new ReducedValue(
    z
    .object({
      solution_1_score: z.number().min(0).max(10),
      solution_2_score: z.number().min(0).max(10),
    })
    .default({
      solution_1_score: 0,
      solution_2_score: 0,
    }),
    {
      reducer: (current, next) => {
        return next;
      },
    },
  ),
});

const solutionNode: GraphNode<typeof State> = async (state: typeof State) => {
  const [gpt_solution, cohere_solution] = await Promise.all([
    gptModel.invoke(state.messages[0].text),
    cohereModel.invoke(state.messages[0].text),
  ]);

  return {
    solution_1: gpt_solution.text,
    solution_2: cohere_solution.text,
  };
};

const judgeNode: GraphNode<typeof State> = async (state: typeof State) => {
  const { solution_1, solution_2 } = state;

  const judge = createAgent({
    model: metaModel,
    tools: [],
    responseFormat: providerStrategy(
      z.object({
        solution_1_score: z.number().min(0).max(10),
        solution_2_score: z.number().min(0).max(10),
      }),
    ),
  });

  const judgeResonse = await judge.invoke({
    messages: [
      new HumanMessage(
        `You are a judge for two solutions. Please evaluate the following solutions and provide a score between 0 and 10 for each solution.0 means completely wrong and 10 means perfect. Here are the solutions:\n\nSolution 1: ${solution_1}\n\nSolution 2: ${solution_2}`,
      ),
    ],
  });

  const result = judgeResonse.structuredResponse

  return {
    judge_recommendation: result,
  }
};

const graph = new StateGraph(State)
  .addNode("solution", solutionNode)
  .addNode("judge", judgeNode)
  .addEdge(START, "solution")
  .addEdge("solution", "judge")
  .addEdge("judge", END)
  .compile();

export default async function (userMessage: string) {
  const result = await graph.invoke({
    messages: [new HumanMessage(userMessage)],
  });

  console.log(result);
  return result.messages;
}
