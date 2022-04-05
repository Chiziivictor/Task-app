import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";
import { MdAddCircle } from "react-icons/md";

const TaskInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddButton = styled.button``;

const AddTask = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TaskInput className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <AddButton type="submit" className="btn">
            <MdAddCircle style={{ fontSize: "35px" }} />
          </AddButton>
        </div>
      </TaskInput>
    </form>
  );
};

export default AddTask;
