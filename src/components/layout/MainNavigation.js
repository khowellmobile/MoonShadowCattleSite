import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.navDiv}>
      <div className={classes.logo}>
        <h1>Shadyview Farms</h1>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            <Link to="/" class="text-decoration-none text-white">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/about" class="text-decoration-none text-white">
              <h2>About</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
