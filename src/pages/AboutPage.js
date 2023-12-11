import MainNav from "../components/layout/MainNav";
import classes from "./AboutPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import img0 from '../images/Gertrude.jpg'

function AboutPage() {
  return (
    <div className={classes.topDiv}>
      <MainNav />
      <Container fluid>
        <Row xs={1} s={1} md={2} lg={2}>
          <Col xs={12} s={12} md={6} lg={6}>
            <Card className={classes.card}>
              <Card.Img  className={classes.imgPreset1} variant="top" src={img0} />
            </Card>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}></Col>
        </Row>
        <Row xs={1} s={1} md={2} lg={2}>
          <Col xs={12} s={12} md={6} lg={6}></Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <Card className={classes.card}>
            <Card.Img className={classes.imgPreset1} variant="top" src={img0} />
            </Card>
          </Col>
        </Row>
        <Row xs={1} s={1} md={2} lg={2}>
          <Col xs={12} s={12} md={6} lg={6}>
            <Card className={classes.card}>
            <Card.Img className={classes.imgPreset1} variant="top" src={img0} />
            </Card>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
