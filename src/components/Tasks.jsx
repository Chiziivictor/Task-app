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
  min-height: 70vh;
`;

const Wrapper = styled.div`
  margin: 5%;
  max-width: 400px;
  box-shadow: 1px 1px 10px 0px #888888;
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
    <Container>
      <Wrapper className="card">
        <div className="card-body">
          <h4 className="card-title mb-4 mx-4">My Tasks</h4>
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
      </Wrapper>
    </Container>
  );
};

export default Tasks;
