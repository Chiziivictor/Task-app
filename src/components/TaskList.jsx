import React, { useState } from "react";

const TaskList = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
        onChange={{}}
      /> */}
      <h5
        style={{
          textDecoration: todo.completed && "line-through",
          marginTop: "30px",
        }}
      >
        {todo.title === "" ? newTitle : todo.title}
      </h5>
      <div>
        <button onClick={() => toggleComplete(todo)} className="btn">
          Complete
        </button>
        <button onClick={() => handleEdit(todo, newTitle)} className="btn">
          Edit
        </button>
        <button onClick={() => handleDelete(todo.id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskList;
