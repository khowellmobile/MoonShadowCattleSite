import Background from "./Background";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Story from "../content/Story";

import img0 from '../../images/scenicImage0.jpg'

function Layout(props) {
  return (
    <div>
      <Background backgroundImage={img0}>
        <MainNavigation />
        <div className={classes.contentDiv}>{props.children}</div>
      </Background>
      <Story />
    </div>
  );
}

export default Layout;
