import React, { Fragment, useState } from "react";
import MyInput from "../To do/MyInput";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./Doing.css";

const Doing = () => {
  const [showEditor, setShowEditor] = useState(false);
  const handleBtnClick = () => {
    setShowEditor(true);
  };
  const handleCancel = () => {
    setShowEditor(false);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="main_todo">
            <div className="d-grid gap-1 text-start">
              <h2>
                Doing
                <FontAwesomeIcon icon={faEllipsis} className="float-end" />
              </h2>
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
export default Doing;
