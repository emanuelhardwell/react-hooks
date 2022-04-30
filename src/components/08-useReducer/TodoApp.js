import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

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

  // const [{ description }, handleInputChange, reset] = useForm({
  //   description: "",
  // });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    console.log("delete: ", id);

    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    console.log("toggle: ", id);

    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (description.trim().length <= 1) {
  //     console.log("No puedes guardar vacio");
  //     return;
  //   }

  //   const newTodo = {
  //     id: new Date().getTime(),
  //     desc: description,
  //     done: false,
  //   };

  //   // const action = {
  //   //   type: "add",
  //   //   payload: newTodo,
  //   // };

  //   // dispatch(action);
  //   handleAddTodo(newTodo);
  //   reset();
  // };

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1 className="text-center"> TodoApp </h1>
        <hr />
        <div className="row">
          <div className="col-md-7">
            <h3> Listado de tareas {todos.length} </h3>
            <TodoList
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>

          {/* Formulario */}
          <div className="col-md-5">
            <TodoAdd handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};
