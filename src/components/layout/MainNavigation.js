import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
      <div className={classes.navDiv}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
      </div>
  );
}

export default MainNavigation;
