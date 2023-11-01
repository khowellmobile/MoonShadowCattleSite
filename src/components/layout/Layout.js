import classes from "./Layout.module.css";


function Layout(props) {
  return (
    <div>
        <div className={classes.contentDiv}>{props.children}</div>
    </div>
  );
}

export default Layout;
