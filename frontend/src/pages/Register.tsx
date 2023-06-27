// Dependencies //
import { useState } from "react";
import { Link } from "react-router-dom";
// Pages & Components //
import FormContainer from "../components/FormContainer";
// Bootstrap //
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="name">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="email">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="password">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="confirmPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Register
        </Button>
        <Row className="my-2">
          <Col>
            Already have an account? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};
export default Register;
