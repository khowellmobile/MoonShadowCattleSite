import classes from "./Background.module.css";

function Background(props) {
  return <div className={classes.backgroundDiv}>{props.children}</div>;
}

export default Background;
