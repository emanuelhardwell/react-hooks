import { useState } from "react";

export const useCounterWith = (initialState = 10) => {
  const [state, setState] = useState(initialState); //10 por defecto

  const increment = (value = 1) => {
    setState(state + value);
  };

  const decrement = (value = 1) => {
    setState(state - value);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
