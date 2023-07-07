import React, { Fragment, useState, useContext } from "react";
import ModalWindow from "../ModalWindow";
import MyInput from "./MyInput";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import { BoardContext } from "../context";
import { Editor, EditorState } from "draft-js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Board.css";

const Board = ({ title, boardType }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toDoItem, setToDoItem] = useState({});

  const handleClose = () => setShowModal(false);

  const { state, dispatch } = useContext(BoardContext);
  const { list } = state || {};
  const handleBtnClick = () => {
    setShowEditor(true);
  };
  const handleCancel = () => {
    setShowEditor(false);
  };
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    handleCancel();
  };

  const updateTodoItem = (dto) => {
    dispatch({ type: "updateCardData", payload: dto });
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="main_todo">
            <div className="d-grid gap-1 text-start">
              <h2>
                {title}
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="float-end"
                  onClick={() => setShowModal(true)}
                />
              </h2>
              <div
                onDrop={handleDrop}
                className="droppable d-grid gap-1"
                onDragOver={handleDragOver}
              >
                {Array.isArray(list) &&
                  list.map((item, index) => {
                    if (item.boardType === boardType) {
                      return (
                        <Button
                          variant="dark"
                          key={index}
                          draggable="true"
                          onDragStart={handleDragStart}
                          id={uuid()}
                          onClick={() => {
                            setToDoItem(item);
                            setShowModal(true);
                          }}
                        >
                          {item.title}
                        </Button>
                      );
                    }
                    return null;
                  })}
              </div>
              {/* <Button
                variant="light"
                size="lg"
                className="text-start filled-btn"
                draggable="true"
                onDragStart={handleDragStart}
                id={uuid()}
              >
                <span>Kickoff meeting</span>
                <FontAwesomeIcon icon={faPencil} />
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button
                variant="light"
                size="lg"
                className="text-start "
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                draggable="true"
                onDragStart={handleDragStart}
                id={uuid()}
              >
                Project planning
                <FontAwesomeIcon icon={faPencil} />
              </Button> */}

              {showEditor ? (
                <MyInput handleCancel={handleCancel} boardType={boardType} />
              ) : (
                <Button
                  variant="outline-light"
                  size="lg"
                  className="text-start"
                  onClick={handleBtnClick}
                >
                  <FontAwesomeIcon icon={faPlus} onClick={handleCancel} /> add a
                  card
                </Button>
              )}
            </div>
          </Col>
          <ModalWindow
            showModal={showModal}
            handleClose={handleClose}
            toDoItem={toDoItem}
            updateTodoItem={updateTodoItem}
          />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Board;
