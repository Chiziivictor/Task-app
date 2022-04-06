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
const Title = styled.input`
  margin-left: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  transition: all 200ms ease-in-out;
`;
const AddButton = styled.button`
  background: none;
  border: none;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <TaskInput className="mb-5">
        <Title
          type="text"
          id="exampleInputPassword1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Task"
        />
        <div>
          <AddButton type="submit">
            <MdAddCircle style={{ fontSize: "35px" }} />
          </AddButton>
        </div>
      </TaskInput>
    </form>
  );
};

export default AddTask;
