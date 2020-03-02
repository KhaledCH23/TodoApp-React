import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <button className="completeBtn" onClick={() => completeTodo(index)}>
        {todo.isCompleted ? "Undo" : "Complete"}
      </button>
      <button class="delBtn" onClick={() => removeTodo(index)}>
        Delete
      </button>
      <strong>
        <span>{todo.text}</span>
      </strong>
    </div>
  );
}
export default Todo;
