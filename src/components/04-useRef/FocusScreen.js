import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> Focus Screen -- useRef</h1>
        <hr />

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            ref={inputRef}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={handleClick}>
            {" "}
            Focus input
          </button>
        </div>
      </div>
    </div>
  );
};
