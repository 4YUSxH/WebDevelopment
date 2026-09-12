import {
  HumanMessage,
  SystemMessage,
  AIMessage,
} from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import * as z from "zod";
import { tool, createAgent } from "langchain";
import { serachInternet } from "./internet.service.js";

// We are using two models

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

// const mistralModel = new ChatMistralAI({
//   model: "mistral-small-latest",
//   apiKey: process.env.MISTRAL_API_KEY,
// });

// Creating Tool
const searchInternetTool = tool(serachInternet, {
  name: "searchInternet",
  description: "Use this tool to get the latest information from the internet.",
  schema: z.object({
    query: z.string().describe("The search query to look up on the internet."),
  }),
});

// Creating Agent
const agent = createAgent({
  model: geminiModel,
  tools: [searchInternetTool],
});

export const generateResponse = async (messages) => {
  const response = await agent.invoke({
    messages: [
      new SystemMessage(`
                You are a helpful and precise assistant for answering questions.
                If you don't know the answer, say you don't know. 
                If the question requires up-to-date information, use the "searchInternet" tool to get the latest information from the internet and then answer based on the search results.
            `),
      ...messages.map((msg) => {
        if (msg.role == "user") {
          return new HumanMessage(msg.content);
        } else if (msg.role == "ai") {
          return new AIMessage(msg.content);
        }
      }),
    ],
  });

  return response.messages[response.messages.length - 1].text;
};

export const generateChatTitle = async ({ firstMessage }) => {
  const response = await geminiModel.invoke([
    new SystemMessage(`
      You are a helpful assistant that generates concise and descriptive titles for chat conversations.
      
      User will provide you with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.`),

    new HumanMessage(
      `Generate a title for a chat conversation based on the following first message: ${firstMessage}`,
    ),
  ]);

  return response.text;
};
