import {
  HumanMessage,
  SystemMessage,
  AIMessage,
} from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";

// We are using two models

// const geminiModel = new ChatGoogleGenerativeAI({
//   model: "gemini-3.7-flash",
//   apiKey: process.env.GEMINI_API_KEY,
// });

const mistralModel = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

export const generateResponse = async (messages) => {
  const response = await mistralModel.invoke(
    messages.map((msg) => {
      if (msg.role === "user") {
        return new HumanMessage(msg.content);
      } else if (msg.role === "ai") {
        return new AIMessage(msg.content);
      }
    }),
  );

  return response.text;
};

export const generateChatTitle = async ({ firstMessage }) => {
  const response = await mistralModel.invoke([
    new SystemMessage(`
      You are a helpful assistant that generates concise and descriptive titles for chat conversations.
      
      User will provide you with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.`),

    new HumanMessage(
      `Generate a title for a chat conversation based on the following first message: ${firstMessage}`,
    ),
  ]);

  console.log(response.text);
  return response.text;
};
