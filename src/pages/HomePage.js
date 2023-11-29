import CenterTitle from "../components/content/CenterTitle";
import Story from "../components/content/Story";
import img0 from "../images/SunsetOnFarm.jpg";
import classes from "./HomePage.module.css";
import CardCarousel from "../components/content/CardCarousel";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  var speed1 = -0.2;
  var speed2 = 0.0;
  return (
    <div>
      <Parallax pages={2.5}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${img0})`,
            backgroundSize: "cover",
            position: "absolute",
            top: "0px",
          }}
          speed={speed1}
        >
          <MainNav />
          <CenterTitle />
        </ParallaxLayer>
        <ParallaxLayer offset={1} sticky={{ start: 1, end: 1.2 }}>
          <Story />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          style={{ backgroundImage: `url(${img0})`, backgroundSize: "cover" }}
        >
          <div className={classes.carouselPage}>
            <h1 className={classes.carouselTitle}>Meet the Mammals</h1>
            <CardCarousel />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
