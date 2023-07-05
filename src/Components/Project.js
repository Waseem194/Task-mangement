import React, { Fragment } from "react";
import Todo from "./To do/Todo";
import Doing from "./Doing/Doing";
import Done from "./Done/Done";
import { Col, Container,Row } from "react-bootstrap";

const Project=()=>{
  return(
<Fragment>
  <Container>
    <Row>
      <Col md={4}>
      <Todo/>
      </Col>
      <Col  md={4}>
      <Doing/>
      </Col>
      <Col md={4}>
      <Done/>
      </Col>
    </Row>
  </Container>



</Fragment>
  )

  
}
export default Project;