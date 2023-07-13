import React, { useState, useContext, useEffect, Fragment } from "react";

import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import MyInput from "./Board/MyInput";
import Editor from "./Editor";
import SelectUser from "./SelectUser";

const ModalWindow = ({ showModal, handleClose, toDoItem, updateTodoItem }) => {
  const [editing, setEditing] = useState(false);
  const [validated, setValidated] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const dataToSend = {
        id: toDoItem.id,
        description: editorValue,
        user: selectedUser,
      };
      updateTodoItem(dataToSend);
      setEditing(false);
    }
    setValidated(true);
  };

  const onHide = () => {
    handleClose();
    setEditing(false);
  };
  const toggleEditing = () => {
    setEditing((state) => !state);
  };

  const readOnlyData = (
    <Fragment>
      <Col md={6}>{toDoItem.description}</Col>
      <Col md={6}>{toDoItem.user}</Col>
      <Col md={12}>
        <Button variant="primary" onClick={toggleEditing}>
          Edit Data
        </Button>
      </Col>
    </Fragment>
  );
  const editOnlyData = (
    <Fragment>
      <Col md={4}>
        <Editor editor={editorValue} setEditor={setEditorValue} />
      </Col>
      <Col md={6}>
        <SelectUser selectUser={selectedUser} setSelectUser={setSelectedUser} />
      </Col>
      <Col md={2}>
        {toDoItem.status || "Todo" }
      </Col>
    </Fragment>
  );
  return (
    <Modal show={showModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{toDoItem.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              {!toDoItem.description && !toDoItem.user
                ? editOnlyData
                : editing
                ? editOnlyData
                : readOnlyData}

              {/* {(editing
                ? !toDoItem.description && !toDoItem.user
                ? editOnlyData
                : readOnlyData
              : readOnlyData)} */}

              {/* <Col md={6}>
                {toDoItem.description ? (
                  editing ? (
                    <MyInput />
                    ) : (
                      <Fragment>
                      {toDoItem.description}
                      <Button
                      variant="secondary"
                      onClick={() => toggleEditing()}
                      >
                      Edit
                      </Button>
                      </Fragment>
                      )
                      ) : (
                        <Fragment>
                        <textarea
                        value={value}
                        onChange={(event) => {
                          setValidated(true);
                          setValue(event.target.value);
                        }}
                        placeholder="Enter your task..."
                        style={{ width: "100%" }}
                        />
                        
                        <Button variant="primary" type="submit">
                        Save Changes
                        </Button>
                        </Fragment>
                        )}
                        </Col>
                        <Col md={6}>
                        {editing ? (
                          <Form.Select
                          aria-label="Default select example"
                          onChange={(event) => setUser(event.target.value)}
                    value={user}
                  >
                    <option>Users</option>
                    {users.map((user, index) => {
                      return (
                        <option key={index} value="1">
                          {user.name}: {user.email}
                        </option>
                      );
                    })}
                  </Form.Select>
                ) : (
                  <Fragment>{toDoItem.user}</Fragment>
                  )}
              </Col> */}
            </Row>
          </Form>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"  type="submit">
        Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
  // return (
  //   <div
  //     className="modal show"
  //     style={{ display: "block", position: "initial" }}
  //     show={showModal}
  //     onHide={handleClose}
  //   >
  //     <Modal.Dialog>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Modal title</Modal.Title>
  //       </Modal.Header>

  //       <Modal.Body>
  //         <p>Modal body text goes here.</p>
  //       </Modal.Body>

  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleSuccess}>
  //           Save changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal.Dialog>
  //   </div>
  // );
};

export default ModalWindow;
