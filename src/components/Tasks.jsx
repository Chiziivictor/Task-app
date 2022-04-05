import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import styled from "styled-components";

const Container = styled.div`
  margin: 5%;
  max-width: max-content;
`;

const Tasks = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <Container className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">My Tasks</h5>
        <AddTask />
        <div>
          {todos.map((todo) => (
            <TaskList
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Tasks;
