import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> RealExampleRef</h1>
        <hr />
        <hr />
        {show && <MultipleCustomHooks />}
        <div className="mb-3">
          <button
            className="btn btn-success"
            onClick={() => {
              setShow(!show);
            }}
          >
            {" "}
            Show/Hide{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
