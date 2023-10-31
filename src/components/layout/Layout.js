import Background from "./Background";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <Background>
      <MainNavigation />
      <main >{props.children}</main>
      </Background>
    </div>
  );
}

export default Layout;
