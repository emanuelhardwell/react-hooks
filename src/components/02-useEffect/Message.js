import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    console.log("Componente MONTADO");

    const mouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
      console.log(":D");
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log("Componente Desmontado");
    };
  }, []);

  // RETURN
  return (
    <>
      <h1 className="text-primary">Eres super genial</h1>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </>
  );
};
