import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Componente Montado");

    return () => {
      console.log("Componente Desmontado");
    };
  }, []);

  // RETURN
  return (
    <>
      <h1 className="text-primary">Eres super genial</h1>
    </>
  );
};
