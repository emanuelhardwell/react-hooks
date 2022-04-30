import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { useForm } from "../../hooks/useForm";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Comprar cafe",
//     done: false,
//   },
// ];

//el INIT se ejecuta al iniciar, y va a mandar los datos al INITIALSTATE del useReducer,
const init = () => {
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: "Comprar cafe",
  //       done: false,
  //     },
  //   ];

  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  //   console.log(todos);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  console.log(description);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1 className="text-center"> TodoApp </h1>
        <hr />
        <div className="row">
          <div className="col-md-7">
            <h3> Listado de tareas {todos.length} </h3>
            <ul className="list-group">
              {todos.map((todo, i) => (
                <li className="list-group-item lista" key={todo.id}>
                  <p>
                    {" "}
                    {i + 1}. {todo.desc}{" "}
                  </p>
                  <button className="btn btn-danger"> Eliminar </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <div className="col-md-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};
