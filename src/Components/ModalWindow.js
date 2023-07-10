import React, { useState, useContext, useEffect, Fragment } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import MyInput from "./Board/MyInput";

const ModalWindow = ({ showModal, handleClose, toDoItem, updateTodoItem }) => {
  const [editing, setEditing] = useState(false);
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(toDoItem.description);
  }, [toDoItem.description]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const dataToSend = { id: toDoItem.id, description: value };
      updateTodoItem(dataToSend);
    }
  };

  const onHide = () => {
    handleClose();
    setValue("");
  };
  const toggleEditing = () => {
    setEditing((state) => !state);
  };

  console.log(editing);

  return (
    <Modal show={showModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{toDoItem.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              </Form>
            </Col>
            <Col md={6}>
              <select></select>
            </Col>
          </Row>
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
