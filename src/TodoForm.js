import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        className="bar"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter new task"
      />
      <button className="btnAdd" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}
export default TodoForm;
