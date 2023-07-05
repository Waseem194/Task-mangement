import React, { Fragment, useState } from "react";
import MyInput from "./MyInput";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEye,
  faEllipsis,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Editor, EditorState } from "draft-js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Todo.css";

const Todo = () => {
  const [showEditor, setShowEditor] = useState(false);
  const handleBtnClick = () => {
    setShowEditor(true);
  };
  const handleCancel = () => {
    setShowEditor(false);
  };
  const handleDragStart = (event) => {
    if(event.target.classList) {
      const className = event.target.classList.find(cl => cl === "draggable-btn");
      console.log(className);
    }
    event.dataTransfer.setData("text", event.target.id);
  };
  const handleDrop = (event) => {
    event.preventDefault();
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };


  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="main_todo">
            <div className=" d-grid gap-1 text-start">
              <h2>
                To do
                <FontAwesomeIcon icon={faEllipsis} className="float-end " />
              </h2>
              <Button
                variant="light"
                size="lg"
                className="text-start filled-btn draggable-btn"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                draggable="true"
                onDragStart={handleDragStart}
              >
                <span>Kickoff meeting</span>
                <FontAwesomeIcon icon={faPencil} />
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button variant="light" size="lg" className="text-start ">
                Project planning
                <FontAwesomeIcon icon={faPencil} />
              </Button>
              {showEditor ? (
                <MyInput handleCancel={handleCancel} />
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
        </Row>
      </Container>
    </Fragment>
  );
};
export default Todo;
