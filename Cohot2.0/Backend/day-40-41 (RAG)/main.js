import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const loader = new PDFLoader("./story.pdf")

const docs = await loader.load()

// console.log(docs);

const spiltter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0
})

const chunks = await spiltter.splitDocuments(docs)

console.log("Number of chunks:", chunks.length);

console.log(chunks);