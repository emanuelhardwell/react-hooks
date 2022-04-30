import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const usuario = useContext(UserContext);
  const { user } = usuario;
  console.log(usuario);

  return (
    <div>
      <h1>Homescreen</h1>
      <hr />
      <pre> {JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
