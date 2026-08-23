import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmt,
  increment,
  incrementByAmt,
} from "./redux/slices/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmt(10));
        }}
      >
        IncrementByAmt
      </button>
      <button
        onClick={() => {
          dispatch(decrementByAmt(10));
        }}
      >
        DecrementByAmt
      </button>
    </div>
  );
};

export default App;
