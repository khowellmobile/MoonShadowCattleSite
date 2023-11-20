import CenterTitle from "../components/content/CenterTitle";
import Story from "../components/content/Story";

import classes from "./HomePage.module.css";
import CardCarousel from "../components/content/CardCarousel";
import MainNav from "../components/layout/MainNav";

function HomePage() {
  return (
    <div>
      <div className={classes.parallaxContainer1}>
        <MainNav />
        <CenterTitle />
      </div>
      <div className={classes.buffer}>
        <Story />
      </div>
      <div className={classes.parallaxContainer2}>
        <h1 className={classes.carouselTitle}>Meet the Cattle</h1>
        <CardCarousel />
      </div>
    </div>
  );
}

export default HomePage;
