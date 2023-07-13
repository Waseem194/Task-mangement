import React, { Fragment,useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { toast } from 'react-toastify';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [validate, setValidate] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast("You are login success");
      } catch (error) {
        if (error.code === "auth/too-many-requests") {
          toast.error("Too many attemps, try later.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("You have entered a wrong password.");
        } else {
          toast.error("Login failed.");
        }
      }
    } else setValidate(true);
  };
  return (
    <Fragment>
      <Container>
        <Row  className="justify-content-md-center">
          <Col className="main_page p-4 m-5  " md={6}>
            <Form onSubmit={onFormSubmit} noValidate validated={validate}>
              <h1>Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
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
                  required
                  onChange={(event) => setPassword(event.target.value)}
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

export default Login;
