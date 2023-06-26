// Dependencies //
import { Outlet } from "react-router-dom";
// Pages & Components //
import Header from "./components/Header";
//
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
