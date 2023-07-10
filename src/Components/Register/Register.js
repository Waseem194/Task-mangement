import React,{ Fragment,useEffect,useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

import "./Register.css";
const Register = () => {
 
  const [validate, setValidate] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
      console.log(email, password);
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast("You are register success")
      } catch (error) {
        console.log(error);
      }
    } else setValidate(true);
    
  };
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="main_register p-4 m-5  " md={6}>
            <Form  onSubmit={onFormSubmit} noValidate validated={validate}>
              <h1>Register</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                 
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Register;
