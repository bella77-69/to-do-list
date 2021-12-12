import React, { useReducer } from "react";
import "./ToDoForm.scss";

export default function TodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-task">New To-do</label>
      <input className='form-input'
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button className="form-button">Add Todo</button>
    </form>
  );
}

