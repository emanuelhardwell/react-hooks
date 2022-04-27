import React, { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;
  // RETURN
  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2> {counter1} </h2>
      <h2> {counter2} </h2>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </div>
  );
};
