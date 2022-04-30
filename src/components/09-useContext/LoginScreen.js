import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const userContext = useContext(UserContext);
  const { setUser } = userContext;

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ id: "123", name: "emanuel", email: "123@gmail.com" });
        }}
      >
        {" "}
        Agregar usuario
      </button>
    </div>
  );
};
