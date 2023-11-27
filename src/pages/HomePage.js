import CenterTitle from "../components/content/CenterTitle";
import Story from "../components/content/Story";
import img0 from "../images/SunsetOnFarm.jpg";
import classes from "./HomePage.module.css";
import CardCarousel from "../components/content/CardCarousel";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          //Something is wrong here. img0 reading in as text not variable
          style={{ backgroundImage: 'url(${img0})', backgroundSize: "cover" }}
        >
          <MainNav />
          <CenterTitle />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <h1>Bye</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
