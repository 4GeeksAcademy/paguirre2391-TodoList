import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';


// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setTodos([...todos, inputValue]);
        setInputValue("");
      }
    }
  };

  const handleDelete = index => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={inputValue}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDelete(index)}>
              <i className="fa-solid fa-x"></i>
            </button>
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;
