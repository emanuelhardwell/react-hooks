import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(200);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> Counter App con CustomHook </h1>
        <h2> Valor: {state} </h2>
        <hr />
        <button className="btn btn-primary me-2" onClick={() => increment(2)}>
          {" "}
          +1{" "}
        </button>
        <button className="btn btn-danger me-2" onClick={() => decrement(2)}>
          {" "}
          -1{" "}
        </button>
        <button className="btn btn-success me-2" onClick={() => reset()}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
};
