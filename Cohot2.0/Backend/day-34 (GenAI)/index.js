import readline from "readline/promises";
import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "langchain";

// Overview of genai and chat history

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

// For mainting chathistotry so that ai can see previous message
const messages = [];

// We can use 'await' directly while using import-export(module)
while (true) {
  const userInput = await rl.question("You: ");

  //   Pushing user input
  messages.push(new HumanMessage(userInput));

  //   Pushing ai output and sending whole messages array i.e. chat history to ai
  const response = await model.invoke(messages);

  messages.push(response);

  console.log("Ai: " + response.text);
}

rl.close();
