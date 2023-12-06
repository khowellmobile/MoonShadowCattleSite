import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './MainNav.module.css'

function MainNav() {
  return (
    <Container fluid className={classes.container}>
      <Row xs={1} s={1} md={3} lg={3} className="py-4">
        <Col xs={12} s={12} md={6} lg={6} className="text-center">
          <div>
            <h1 className="text-white">Shadyview Farms</h1>
          </div>
        </Col>
        <Col xs={12} s={12} md={3} lg={3} className="text-center">
          <Link to="/" className="text-decoration-none text-white">
            <h2>Home</h2>
          </Link>
        </Col>
        <Col xs={12} s={12} md={3} lg={3} className="text-center">
          <Link to="/about" className="text-decoration-none text-white">
            <h2>About</h2>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MainNav;
