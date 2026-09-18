import "dotenv/config";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("cohort-2-rag");

const loader = new PDFLoader("./story.pdf");

const data = await loader.load();

const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-embed",
});

const spiltter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

const chunks = await spiltter.splitDocuments(data);

const docs = await Promise.all(
  chunks.map(async (chunk) => {
    const embeds = await embeddings.embedQuery(chunk.pageContent);
    return {
      text: chunk.pageContent,
      embeds,
    };
  }),
);

const result = await index.upsert({
  records: docs.map((doc, i) => ({
    id: `doc-${i}`,
    values: doc.embeds,
    metadata: {
      text: doc.text,
    },
  })),
});

const queryEmbedding = await embeddings.embedQuery(
  "how was the arav internship experience",
);

console.log(queryEmbedding);

const finalResult = await index.query({
  vector: queryEmbedding,
  topK: 1,
  includeMetadata: true,
});

console.log(JSON.stringify(finalResult));
