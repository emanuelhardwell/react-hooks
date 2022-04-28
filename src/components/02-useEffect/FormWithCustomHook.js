import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
  });

  const { name, email } = formValues;

  //   const handleInputChange = ({ target }) => {
  //     setFormState({
  //       ...formValues,
  //       [target.name]: target.value,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log("Se ejecuta la primera vez");
  }, []);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1> SimpleForm using useEffect </h1>
            <hr />

            <form onSubmit={handleSubmit}>
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

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
