// Bootstrap //
import { Container, Row, Col } from "react-bootstrap";

type ChildrenProps = {
  children: string;
};

const FormContainer: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="card p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};
export default FormContainer;
