import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <div>
      <h1>LoginScreen</h1>
    </div>
  );
};
