import React, { useState } from "react";
import styled from "styled-components";
import { BiCheckCircle, BiCircle, BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import Edit from "./Edit";
import { Modal, Box } from "@mui/material";

const Title = styled.h1`
  width: 250px;
  margin-left: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
`;
const TitleEdit = styled.textarea`
  width: 250px;
  height: 150px;
  margin-left: 10px;
  outline: none;
  border-bottom: 1px solid;
  transition: all 200ms ease-in-out;
`;

const Button = styled.button`
  background: none;
  border: none;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const iconStyle = {
  fontSize: "25px",
};
const modalStyle = {
  display: "flex",
};
const modalButtonStyle = {
  display: "flex",
  flexDirection: "column",
};

const TaskList = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [showEdit, setShowEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: "flex",
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "1px 1px 100px #888888",
            p: 4,
          }}
        >
          <div style={modalStyle}>
            <TitleEdit
              type="text"
              value={todo.title === "" ? newTitle : todo.title}
              style={{ color: todo.completed && "green" }}
              onChange={handleChange}
            />
            <div style={modalButtonStyle}>
              <Button
                onClick={(e) => setOpen(false)}
                style={{ marginBottom: "50px" }}
              >
                <MdOutlineCancel id="i" style={iconStyle} />
              </Button>
              <Button onClick={() => handleEdit(todo, newTitle)}>
                <BiEditAlt id="i" style={iconStyle} />
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      <Wrapper>
        {todo.completed ? (
          <Button onClick={() => toggleComplete(todo)}>
            <BiCheckCircle
              id="i"
              style={{ color: "green", fontSize: "25px" }}
            />
          </Button>
        ) : (
          <Button onClick={() => toggleComplete(todo)}>
            <BiCircle id="i" style={iconStyle} />
          </Button>
        )}
        <Title type="text" style={{ color: todo.completed && "green" }}>
          {todo.title === "" ? newTitle : todo.title}
        </Title>

        {!todo.completed && (
          <Button onClick={(e) => setOpen(true)}>
            <BiEditAlt id="i" style={iconStyle} />
          </Button>
        )}
        <Button onClick={() => handleDelete(todo.id)}>
          <MdDeleteOutline style={iconStyle} />
        </Button>
      </Wrapper>
    </>
  );
};

export default TaskList;
