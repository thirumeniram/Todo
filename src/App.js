import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  // Loading todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Todos"));
    if (storedTodos) {
      // Separate active and completed todos
      setActiveTodos(storedTodos.filter((t) => !t.isComplete));
      setCompletedTodos(storedTodos.filter((t) => t.isComplete));
    }
  }, []);

  // Saving todos to localStorage whenever they change
  useEffect(() => {
    // Combine active and completed todos before saving
    const allTodos = [...activeTodos, ...completedTodos];
    localStorage.setItem("Todos", JSON.stringify(allTodos));
  }, [activeTodos, completedTodos]);
  

  //adding the task to the active todos
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // Attempting to edit in activeTodos
      let updatedActiveTodos = activeTodos.map((t) =>
        t.id === editId ? { id: t.id, todo, isComplete: false } : t
      );
      setActiveTodos(updatedActiveTodos);

      // Attempting to edit in completedTodos
      let updatedCompletedTodos = completedTodos.map((t) =>
        t.id === editId ? { id: t.id, todo, isComplete: true } : t
      );
      setCompletedTodos(updatedCompletedTodos);

      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      const newTodo = { id: `${Date.now()}`, todo, isComplete: false };
      setActiveTodos([newTodo, ...activeTodos]);
      setTodo("");
    }
  };
  
  //Edit function to edit the task
  const handleEdit = (id) => {
    //updating the task in active todo
    const editTodo = [...activeTodos, ...completedTodos].find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  //fucntion to handle the completion
  const handleComplete = (id) => {
    //removing the task in activetodo
    const updatedActiveTodos = activeTodos.filter((t) => t.id !== id);
    const completedTodo = activeTodos.find((t) => t.id === id);
  
    if (completedTodo) {
      
      const updatedTodo = { ...completedTodo, isComplete: true };
      setActiveTodos(updatedActiveTodos);
      //updating the task in completedtodo
      setCompletedTodos([updatedTodo, ...completedTodos]);
    }
  };
  
//function to reset all the tasks
  const handleReset = () => {
    setActiveTodos([]);
    setCompletedTodos([]);
    localStorage.removeItem("Todos");
  };

  

return (
  <div className="App">
    <div className="container">
      <h1>Todo List</h1>
      <button onClick={handleReset} className="resetButton">Reset All</button>
      <TodoForm
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
      />
      <TodoList
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
    </div>
  </div>
);


};

export default App;
