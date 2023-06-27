// Dependencies //
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Mutation & AuthSlice //
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
// Pages & Components //
import FormContainer from "../components/FormContainer";
// Bootstrap //
import { Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userData } = useSelector((state: any) => state.authReducer);

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate("/");
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <h1>Log In</h1>
      <Form onSubmit={submitHandler}>
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
        <Button type="submit" variant="primary" className="my-2">
          Log In
        </Button>
        <Row className="my-2">
          <Col>
            New User? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};
export default Login;
