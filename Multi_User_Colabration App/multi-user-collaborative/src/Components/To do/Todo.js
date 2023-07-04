import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye, faEllipsis,faXmark } from "@fortawesome/free-solid-svg-icons";
import { Editor, EditorState } from "draft-js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Todo.css";

const MyEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
};

const MyInput = () => {
  const [value, setValue] = useState("");
  const onChange = (evt) => setValue(evt.target.value);

  return (<Fragment>
<textarea value={value} onChange={onChange} placeholder="Enter your task"/>
<Button variant="primary">Add card</Button>
<FontAwesomeIcon icon={faXmark} />
  </Fragment>)
};

const Todo = () => {
 
  const [showEditor, setShowEditor] = useState(false);
  const handleBtnClick = () => {
    setShowEditor(true);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="main_todo">
            <div className="d-grid gap-1 text-start">
              <h2>
                To do
                <FontAwesomeIcon icon={faEllipsis} className="float-end" />
              </h2>
              <Button
                variant="light"
                size="lg"
                className="text-start filled-btn"
              >
                <span>Kickoff meeting</span>
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button variant="light" size="lg" className="text-start">
                Project planning
              </Button>
              {showEditor ? (
                <MyInput />
              ) : (
                <Button
                  variant="outline-light"
                  size="lg"
                  className="text-start"
                  onClick={handleBtnClick}
                >
                  <FontAwesomeIcon icon={faPlus} /> add a card
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
