import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    // console.log(target);

    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("Se ejecuta la primera vez");
  }, []);

  //   useEffect(() => {
  //     console.log("Esperando cambios en el INPUT name");
  //   }, [name]);

  //   useEffect(() => {
  //     console.log("Esperando cambios en el INPUT email");
  //   }, [email]);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> SimpleForm using useEffect </h1>
        <hr />
        <form>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
        </form>

        {name === "123" && <Message />}
      </div>
    </div>
  );
};
