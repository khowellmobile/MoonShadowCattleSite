import { Link } from "react-router-dom";

function MainNavigation() {
  return (
      <div>
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
