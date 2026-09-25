import { ChatGoogle } from "@langchain/google";
import config from "../config/config.js";
import { ChatCohere } from "@langchain/cohere";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGroq } from "@langchain/groq"

export const geminiModel = new ChatGoogle({
  model: "gemini-flash-latest",
  apiKey: config.GOOGLE_API_KEY,
});

export const mistralModel = new ChatMistralAI({
  model: "mistral-medium-latest",
  apiKey: config.MISTRAL_API_KEY,
});

export const gptModel = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: config.GROQ_API_KEY,
});

export const metaModel = new ChatGroq({
  model: "qwen/qwen3.8-27b",
  apiKey: config.GROQ_API_KEY,
});

export const cohereModel = new ChatCohere({
  model: "command-a-03-2025",
  apiKey: config.COHERE_API_KEY,
});

// Cohere and Mistral will compete and Gemini will judge them