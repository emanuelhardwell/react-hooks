import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(5);

  const increment = useCallback(() => {
    setCounter((e) => e + 1);
  }, [setCounter]);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> CallbackHook </h1>
        <h3> Counter: {counter} </h3>
        <hr />
        <ShowIncrement increment={increment} />
      </div>
    </div>
  );
};
