import readline from "readline/promises";
import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, tool, createAgent } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod";

const emailTool = tool(
  sendEmail, // This function should return string/number
  {
    name: "emailTool",
    description: "Use this tool to send an email",
    schema: z.object({
      to: z.string().describe("Receiver's email address"),
      html: z.string().describe("The HTML content of the email"),
      subject: z.string().describe("The subject of the email"),
    }),
  },
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

// Creating an agent for using tool
const agent = createAgent({
  model,
  tools: [emailTool],
});

// For mainting chathistotry so that ai can see previous message
const messages = [];

// We can use 'await' directly while using import-export(module)
while (true) {
  const userInput = await rl.question("You: ");

  //   Pushing user input
  messages.push(new HumanMessage(userInput));

  //   Pushing ai output and sending whole messages array i.e. chat history to ai
  // We aren't directly invoking model, we invoke agent so that we can use tools
  const response = await agent.invoke({
    messages // send message as object while using agent
  });

  messages.push(response.messages[response.messages.length - 1]);

  // While using agent you will get full chat historty in response
  console.log(response);

  // Printing last response from chat history
  // console.log(response.messages[response.messages.length - 1].text);
}

rl.close();
