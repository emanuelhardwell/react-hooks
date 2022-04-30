import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Comprar cafe",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: "Nuevo todo",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1 className="text-center"> TodoApp </h1>
        <hr />
        <div className="row">
          <div className="col-md-7">
            <h3> Listado de tareas </h3>
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
                />
              </div>

              <div className="mb-3">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary"> Agregar Todo </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
