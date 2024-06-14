import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleChnage = (e) => {
    setTask(e.target.value);
  };

  const handleTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  const handleEnter = (e) => {
    if (e.key == "Enter") {
    handleTodo();
    }
  };
  const handleRemove = (index)=>{
    const newTodo = todos.filter((_,i)=> i !== index);
    setTodos(newTodo);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <div className="todo-input">
          <input
            type="text"
            value={task}
            placeholder="Add a new task"
            onKeyDown={handleEnter}
            onChange={handleChnage}
          />
          <button onClick={handleTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
