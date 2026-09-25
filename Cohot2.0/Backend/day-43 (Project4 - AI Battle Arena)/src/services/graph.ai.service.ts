import { StateSchema, MessagesValue, StateGraph, START, END } from "@langchain/langgraph";

// Defining JUDGEMENT type
type JUDGEMENT = {
    winner: "solution_1" | "solution_2";
    solution_1_score: number;
    solution_2_score: number
}

// Defining AIBATTLESTATE type
type AIBATTLESTATE = {
    messages: typeof MessagesValue;
    solution_1: string;
    solution_2: string;
    judgement: JUDGEMENT  
}

// Creating state, intially it is empty
const state: AIBATTLESTATE = { // state will look like AIBATTLESTATE type 
    messages: MessagesValue,
    solution_1: "",
    solution_2: "",
    judgement: {
        winner: "solution_1",
        solution_1_score: 0,
        solution_2_score: 0
    }
}