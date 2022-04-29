import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {
  const { increment, counter } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> MemoHook </h1>
        <hr />
        <h4>
          Counter: <small> {counter} </small>
        </h4>
        <p>{memoProcesoPesado}</p>
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
