import { Link } from 'react-router-dom';
import classes from './Story.module.css'

function Story() {
  return (
    <div className={classes.storyDiv}>
      <h1 className={classes.title}>OurStory</h1>
      <p className={classes.text}>Shadyview is the best</p>
      <Link to="/about" className={classes.link}><u>Read More</u></Link>
    </div>
  );
}

export default Story;
