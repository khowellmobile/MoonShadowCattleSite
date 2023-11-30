import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoImg from "../../images/cowLogo.png";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <Container fluid>
      <Row xs={1} s={5} md={5} lg={5} className="py-4">
        <Col xs={12} s={1} md={1} lg={1} className="text-center">
          <div className={`${classes.logoDiv} ${classes.outline}`}>
            <img
              className={`${classes.logo} ${classes.blackAndWhiteImage}`}
              src={LogoImg}
              alt="hello"
            />
          </div>
        </Col>
        <Col xs={12} s={5} md={5} lg={5} className="text-center">
          <div className={`${classes.outline} ${classes.centered}`}>
            <h1 className="text-white">Moonshadow Cattle</h1>
          </div>
        </Col>
        <Col xs={12} s={2} md={2} lg={2} className="text-center">
          <Link to="/" className="text-decoration-none text-white">
            <h2 className={`${classes.outline} ${classes.centered}`}>Home</h2>
          </Link>
        </Col>
        <Col xs={12} s={2} md={2} lg={2} className="text-center">
          <Link to="/about" className="text-decoration-none text-white">
            <h2 className={`${classes.outline} ${classes.centered}`}>About</h2>
          </Link>
        </Col>
        <Col xs={12} s={2} md={2} lg={2} className="text-center">
          <Link to="/about" className="text-decoration-none text-white">
            <h2 className={`${classes.outline} ${classes.centered}`}>Sister Site</h2>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MainNav;
