import React from "react";

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <>
      <li className="list-group-item lista" key={todo.id}>
        <p
          onClick={() => handleToggle(todo.id)}
          className={`${todo.done && "complete"}`}
        >
          {" "}
          {i + 1}. {todo.desc}{" "}
        </p>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          {" "}
          Eliminar{" "}
        </button>
      </li>
    </>
  );
};
