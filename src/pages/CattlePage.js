import classes from "./CattlePage.module.css";

import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import CattleCard from "../components/content/CattleCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CattlePage() {
  return (
    <div>
      <MainNav />
      <Container fluid>
        <Row xs={2} s={2} md={4} lg={4} className={classes.aboutRow}>
          <Col xs={6} s={6} md={3} lg={3}>
            <CattleCard />
          </Col>
          <Col xs={6} s={6} md={3} lg={3}>
            <CattleCard />
          </Col>
          <Col xs={6} s={6} md={3} lg={3}>
            <CattleCard />
          </Col>
          <Col xs={6} s={6} md={3} lg={3}>
            <CattleCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default CattlePage;
