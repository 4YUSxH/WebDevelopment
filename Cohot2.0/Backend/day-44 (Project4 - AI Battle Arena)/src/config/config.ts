import { config } from "dotenv";
config();

type CONFIG = {
  readonly GOOGLE_API_KEY: string;
  readonly MISTRAL_API_KEY: string;
  readonly COHERE_API_KEY: string;
  readonly GROQ_API_KEY: string;
};

const appconfig: CONFIG = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
  MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
  COHERE_API_KEY: process.env.COHERE_API_KEY || "",
  GROQ_API_KEY: process.env.GROQ_API_KEY || "",
};

export default appconfig;
