import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { increment, counter } = useCounter();
  const [show, setShow] = useState(true);
  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> Memorize </h1>
        <hr />
        <h4>
          Counter: <Small value={counter} />
        </h4>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={increment}>
            + 1
          </button>
        </div>

        <div className="mb-3">
          <button
            className="btn btn-success"
            onClick={() => {
              setShow(!show);
            }}
          >
            {JSON.stringify(show)}
          </button>
        </div>
      </div>
    </div>
  );
};
