import {ChatCohere} from '@langchain/cohere'
import {ChatGroq} from '@langchain/groq'
import appConfig from "../config/config.js"

export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: appConfig.COHERE_API_KEY
}) 

export const metaModel = new ChatGroq({
    model: "qwen/qwen3.8-27b",
    apiKey: appConfig.GROQ_API_KEY
}) 

export const gptModel = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: appConfig.GROQ_API_KEY
}) 