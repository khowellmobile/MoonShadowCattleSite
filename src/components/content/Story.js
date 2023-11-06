import { Link } from "react-router-dom";
import classes from "./Story.module.css";

function Story() {
  return (
    <div className={classes.storyDiv}>
      <h1 className={classes.title}>OurStory</h1>
      <p className={classes.text}>
        <center>
          This small cattle farm, a fledgling endeavor, represents a fresh start
          rooted in passion and determination. Founded just a few years ago, it
          is a testament to the owner's dream of raising healthy, happy cattle
          in a sustainable and ethical manner. With each day, this farm's story
          is still unfolding, filled with hard work, learning, and a bright
          future ahead.
        </center>
      </p>
      <Link to="/about" className={classes.link}>
        <u>Read More</u>
      </Link>
    </div>
  );
}

export default Story;
