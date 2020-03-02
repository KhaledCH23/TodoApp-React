import React, { useState } from "react";
import "./styles.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === true) {
      newTodos[index].isCompleted = false;
      setTodos(newTodos);
    } else {
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    }
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="searchBar">
        <h1>To-Do App!</h1>
        <h4>Add New To-Do</h4>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="secTitle">
        <h1>Let's get some work done!</h1>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
