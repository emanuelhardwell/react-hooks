import React from "react";

//Cuando se usan USECALLBACK en el componente padre, el componente hijo debe de usar a fuerza el REACT.MEMO

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me ejecute bebe");

  // RETURN
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        Incrementar
      </button>
    </div>
  );
});
