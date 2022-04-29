import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Llamaron al componente Small");
  // RETURN
  return (
    <>
      <small> {value} </small>
    </>
  );
});
