import React from "react";
import Board from "./Board/Board";
import { BoardProvider } from "./context";

import { Col, Container, Row } from "react-bootstrap";

const Project = () => {
  return (
    <BoardProvider>
      <Container>
        <Row>
          <Col md={4}>
            <Board title="Todo" boardType="todo" />
          </Col>
          <Col md={4}>
            <Board title="Doing" boardType="doing" />
          </Col>
          <Col md={4}>
            <Board title="Done" boardType="done" />
          </Col>
        </Row>
      </Container>
    </BoardProvider>
  );
};
export default Project;
