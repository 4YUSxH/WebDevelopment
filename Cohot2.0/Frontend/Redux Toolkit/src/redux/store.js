// Creating centralized storage where all the data exists

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

export const store = configureStore({
    reducer: { // Creating reducers
        counter: counterReducer
    }
})