import { Link } from "react-router-dom";
import classes from "./Story.module.css";

function Story() {
  return (
    <div className={classes.storyDiv}>
      <h1 className={classes.title}>OurStory</h1>
      <p className={classes.text}>
        <center>
          A young cattle farm, born from passion and dedication, raises healthy
          cattle sustainably, a promising journey of hard work and growth.
        </center>
      </p>
      <Link to="/about" className={classes.link}>
        <u>Read More</u>
      </Link>
    </div>
  );
}

export default Story;
