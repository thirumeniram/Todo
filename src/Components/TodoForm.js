

import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name="todoInput" 
        id="todoInput" 
        autoComplete="off" 
      />
      <button type="submit"> {editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
  