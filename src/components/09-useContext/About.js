import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const About = () => {
  const userContext = useContext(UserContext);
  const { setUser, user } = userContext;

  const logout = () => {
    setUser({});
  };

  // RETURN
  return (
    <div>
      <h1>About</h1>
      <hr />
      <pre> {JSON.stringify(user, null, 3)}</pre>
      <hr />
      <button className="btn btn-danger" onClick={logout}>
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};
