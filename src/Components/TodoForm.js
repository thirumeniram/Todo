// import React from "react";

// const TodoForm = ({ handleSubmit, todo, setTodo, editId }) => {
//     return (
//       <form onSubmit={handleSubmit}>
//         {/* Add a name attribute to your input field */}
//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           name="todoInput" // This is the name attribute for the input field
//           id="todoInput" // It's also a good practice to add an id that matches the name
//           autoComplete="off" // This prevents the browser from trying to autocomplete the field
//         />
//         <button type="submit">{editId ? 'Update Todo' : 'Add Todo'}</button>
//       </form>
//     );
//   };
  
//   export default TodoForm;

import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name="todoInput" // This is the name attribute for the input field
        id="todoInput" // It's also a good practice to add an id that matches the name
        autoComplete="off" // This prevents the browser from trying to autocomplete the field
      />
      <button type="submit"> {editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
  