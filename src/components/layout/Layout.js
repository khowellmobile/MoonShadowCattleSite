import Background from "./Background";
import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <Background>
        <MainNavigation />
        <main className={classes.contentDiv}>{props.children}</main>
      </Background>
    </div>
  );
}

export default Layout;
