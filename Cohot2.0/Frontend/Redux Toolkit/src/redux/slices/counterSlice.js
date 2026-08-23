import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", // Optional but you it is good practice
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => { // This callback is Action
            state.value += 1
        },
        decrement: (state) => { // This callback is Actions
            state.value -= 1
        },
        incrementByAmt: (state, actions) => { // This callback is Actions
            state.value += actions.payload
        },
        decrementByAmt: (state, actions) => { // This callback is Actions
            state.value -= actions.payload
        }
    }
})

export const { increment, decrement, incrementByAmt, decrementByAmt } = counterSlice.actions // Exporting actions
export default counterSlice.reducer // Exporting the whole reducer object