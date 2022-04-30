import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      console.log("No puedes guardar vacio");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // const action = {
    //   type: "add",
    //   payload: newTodo,
    // };

    // dispatch(action);
    handleAddTodo(newTodo);
    reset();
  };

  // RETURN
  return (
    <>
      <h3> Formulario </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              {" "}
              Agregar Todo{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
