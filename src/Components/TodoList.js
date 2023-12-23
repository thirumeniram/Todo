
 import React from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCheck,faPenToSquare} from '@fortawesome/free-solid-svg-icons'

const TodoList = ({ activeTodos, completedTodos, handleComplete, handleEdit }) => {
    return (
      <>
        {/* Active Todos */}
        <ul className="allTodos">
          {activeTodos.map((todo) => (
            <li className="singleTodo" key={todo.id}>
              <span className="todoText">{todo.todo}</span>
              <div className="editButton">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(todo.id)}/>
                {/* <button onClick={() => handleEdit(todo.id)}>Edit</button> */}
              </div>
              <div className="editButton">
              
              <FontAwesomeIcon icon={faCheck} onClick={() => handleComplete(todo.id)}/>
                {/* <button onClick={() => handleComplete(todo.id)}>Completed</button> */}
              </div>
              
            </li>
          ))}
        </ul>
        {/* Completed Todos */}
        <ul className="allTodos">
          {completedTodos.map((todo) => (
            <li className="singleTodo completed" key={todo.id}>
              <span className="todoText">{todo.todo}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default TodoList;
  