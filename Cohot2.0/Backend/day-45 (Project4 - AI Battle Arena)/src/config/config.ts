import {config} from 'dotenv'
config()

interface CONFIG {
    readonly COHERE_API_KEY: string,
    readonly GROQ_API_KEY: string,
}

const appConfig: CONFIG = {
    COHERE_API_KEY: process.env.COHERE_API_KEY || "",
    GROQ_API_KEY: process.env.GROQ_API_KEY || "",
}

export default appConfig