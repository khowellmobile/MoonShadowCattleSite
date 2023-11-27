import Carousel from "react-bootstrap/Carousel";
import catImg1 from "../../images/Cats.jpg";
import catImg2 from "../../images/Gertrude.jpg";
import catImg3 from "../../images/Bambi.jpg";
import classes from "./CardCarousel.module.css";

function CardCarousel() {
  return (
    <div className={classes.carousel}>
      <Carousel fade>
        <Carousel.Item>
          <img className={classes.imgPreset2} src={catImg1} alt={"hello"} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.imgPreset1} src={catImg2} alt={"hello"} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.imgPreset1} src={catImg3} alt={"hello"} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardCarousel;
