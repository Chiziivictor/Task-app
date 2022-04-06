import React from "react";
import { MdCheck, MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Container = styled.div`
  margin-left: 25px;
  max-width: 300px;
  height: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const Top = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
const Modify = styled.div`
  width: 250px;
`;
const Button = styled.button`
  background: none;
  border: none;
`;

const Edit = ({ todo, handleEdit }) => {
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <Container>
      <Top>
        <Button onClick={() => db.collection("todos").doc(todo.id).delete}>
          <MdDeleteOutline style={{ fontSize: "20px" }} />
        </Button>
        <Button onClick={() => handleEdit(todo)}>
          <MdCheck style={{ fontSize: "20px" }} />
        </Button>
      </Top>
      <Modify>
        <TextField
          label="details"
          fullWidth
          multiline
          rows={4}
          size="small"
          InputProps={{
            style: { fontSize: "14px" },
          }}
        />
      </Modify>
    </Container>
  );
};

export default Edit;
