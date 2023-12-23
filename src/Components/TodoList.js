
// import React from "react";

// const TodoList = ({ activeTodos, completedTodos, handleComplete, handleEdit }) => {
//   return (
//     <>
//       <ul className="allTodos">
//         {activeTodos.map((todo) => (
//           <li className="singleTodo" key={todo.id}>
//             <span className="todoText">{todo.todo}</span>
//             <div className="editButton">
//               <button onClick={() => handleEdit(todo.id)}>Edit</button>
//             </div>
//             <div className="checkboxContainer">
//               <input
//                 type="checkbox"
//                 onChange={() => handleComplete(todo.id)}
//               />
//             </div>
//           </li>
//         ))}
//       </ul>
//       <ul className="allTodos">
//         {completedTodos.map((todo) => (
//           <li className="singleTodo" key={todo.id}>
//             <span className="todoText">{todo.todo}</span>
//             {/* Checkbox removed for completed todos */}
            
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default TodoList;

// ... imports ...

const TodoList = ({ activeTodos, completedTodos, handleComplete, handleEdit }) => {
    return (
      <>
        {/* Active Todos */}
        <ul className="allTodos">
          {activeTodos.map((todo) => (
            <li className="singleTodo" key={todo.id}>
              <span className="todoText">{todo.todo}</span>
              <div className="editButton">
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
              <div className="checkboxContainer">
                <input
                  type="checkbox"
                  onChange={() => handleComplete(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>
        {/* Completed Todos */}
        <ul className="allTodos">
          {completedTodos.map((todo) => (
            <li className="singleTodo completed" key={todo.id}>
              <span className="todoText">{todo.todo}</span>
              
              {/* Checkbox removed for completed todos */}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default TodoList;
  