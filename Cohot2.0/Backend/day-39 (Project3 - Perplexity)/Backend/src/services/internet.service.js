import { tavily } from "@tavily/core";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

export const serachInternet = async ({query}) => {
  const result = await tvly.search(query, {
    maxResults: 5,
    searchDepth: "basic"
  })

  return JSON.stringify(result)
};
