import MainNav from "../components/layout/MainNav";
import classes from "./AboutPage.module.css";

import Card from "react-bootstrap/Card";

function AboutPage() {
  return (
    <div className={classes.topDiv} style={{ backgroundColor: "black" }}>
      <MainNav />
      <div>hi</div>
      <div>bye</div>
    </div>
  );
}

export default AboutPage;
