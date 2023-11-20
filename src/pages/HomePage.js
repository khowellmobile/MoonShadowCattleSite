import CenterTitle from "../components/content/CenterTitle";
import Story from "../components/content/Story";
import MainNavigation from "../components/layout/MainNavigation";

import classes from "./HomePage.module.css";
import CardCarousel from "../components/content/CardCarousel";

function HomePage() {
  return (
    <div>
      <div className={classes.parallaxContainer1}>
        <MainNavigation />
        <CenterTitle />
      </div>
      <div className={classes.buffer}>
        <Story />
      </div>
      <div className={classes.parallaxContainer2}>
        <CardCarousel />
      </div>
    </div>
  );
}

export default HomePage;
