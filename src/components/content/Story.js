import { Link } from "react-router-dom";
import classes from "./Story.module.css";

function Story() {
  return (
    <div className={classes.storyDiv}>
      <h1 className={classes.title}>OurStory</h1>
      <center>
        <p className={classes.text}>
          A young cattle farm, born from passion and dedication, raises healthy
          cattle sustainably, a promising journey of hard work and growth.
        </p>
      </center>
      <Link to="/about" className={classes.link}>
        <u>Read More</u>
      </Link>
    </div>
  );
}

export default Story;
