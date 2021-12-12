import React, { useState } from "react";
import Todo from "./ToDo";
import TodoForm from "./ToDoForm";
import "./ToDoList.scss"

export default function ToDoList() {
  const [todos, setTodos] = useState([
    {task: "task 1", completed: false },
    {task: "task 2", completed: true }
  ]);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="list">
      <h1 className="list-title">
        To-Do List 
      </h1>
      <ul className="list-list">{todosList}</ul>
      <TodoForm createTodo={create} />
    </div>
  );
}


