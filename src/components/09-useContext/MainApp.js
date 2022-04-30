import React from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

const user = {
  id: "1234",
  name: "Emanuel",
  email: "emanuel@gmail.com",
};

export const MainApp = () => {
  return (
    <>
      <UserContext.Provider value={user}>
        <AppRouter />
      </UserContext.Provider>
    </>
  );
};
