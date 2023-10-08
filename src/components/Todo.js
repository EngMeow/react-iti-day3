import React from "react";

function Todo(props) {
  return (
    <div className="card bg-dark text-light mt-4">
      <div className="card-body">
        <h5 className="card-title">User ID: {props.todo.userId}</h5>
        <p className="card-text">ID: {props.todo.id}</p>
        <p className="card-text">Title: {props.todo.title}</p>
        <p className="card-text">
          Completed: {props.todo.completed ? "true" : "false"}
        </p>
      </div>
    </div>
  );
}

export default Todo;
