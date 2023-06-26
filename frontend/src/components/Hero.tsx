// Dependencies //
import { LinkContainer } from "react-router-bootstrap";
// Bootstrap //
import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Secure JWT Web App</h1>

          <p className="text-center mb-4">
            This Full Stack Web App uses JSONWebTokens that are stored in an
            HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap
            library.
          </p>

          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Log In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Register</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};
export default Hero;
