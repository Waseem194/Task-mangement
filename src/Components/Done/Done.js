import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./Done.css";

const Done = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="main_todo">
            <div className="d-grid gap-1 text-start">
              <h2>
                Done
                <FontAwesomeIcon icon={faEllipsis} className="float-end" />
              </h2>
              <Button variant="outline-light" size="lg" className="text-start">
                <FontAwesomeIcon icon={faPlus} /> add a card
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Done;
