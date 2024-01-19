import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import classes from "./AboutPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import img0 from "../images/Gertrude.jpg";

function AboutPage() {
  return (
    <div className={classes.topDiv}>
      <MainNav />
      <Container fluid>
        <Row xs={1} s={1} md={2} lg={2} className={classes.aboutRow}>
          <Col xs={12} s={12} md={6} lg={6} className={classes.itemCenter}>
            <Card className={classes.pictureCard}>
              <Card.Img
                className={classes.imgPreset1}
                variant="top"
                src={img0}
              />
            </Card>
          </Col>
          <Col xs={12} s={12} md={6} lg={6} class='text-center'>
            <div className={classes.contentDiv}>
              <h1 className={classes.bodyHeader}> Hello </h1>
              <p className={classes.bodyText}>
                Welcome to our farm, where Farmer John's lifelong dedication to
                sustainable agriculture comes to life. With weathered hands and
                a deep connection to the land, John cultivates more than just
                crops; he nurtures a sense of community. Born into a farming
                legacy, his days are spent working the fields, embracing the
                challenges with a profound understanding of the cycles of
                nature. Beyond the farm gates, John believes in sharing the
                harvest, fostering community bonds, and sowing seeds of
                sustainability for generations to come. Join us in celebrating
                Farmer John's story, where every furrow tells a tale of
                resilience, passion, and a genuine love for the land.
              </p>
            </div>
          </Col>
        </Row>
        <Row xs={1} s={1} md={2} lg={2} className={classes.aboutRow}>
          <Col xs={12} s={12} md={6} lg={6}></Col>
          <Col xs={12} s={12} md={6} lg={6} className={classes.itemCenter}>
            <Card className={classes.pictureCard}>
              <Card.Img
                className={classes.imgPreset1}
                variant="top"
                src={img0}
              />
            </Card>
          </Col>
        </Row>
        <Row xs={1} s={1} md={2} lg={2} className={classes.aboutRow}>
          <Col xs={12} s={12} md={6} lg={6} className={classes.itemCenter}>
            <Card className={classes.pictureCard}>
              <Card.Img
                className={classes.imgPreset1}
                variant="top"
                src={img0}
              />
            </Card>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutPage;
