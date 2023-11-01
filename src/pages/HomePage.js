import CenterTitle from "../components/content/CenterTitle";
import Story from "../components/content/Story";
import Background from "../components/layout/Background";
import MainNavigation from "../components/layout/MainNavigation";
import img0 from "../images/scenicImage0.jpg";

function HomePage() {
  return (
    <div>
      <Background backgroundImage={img0}>
        <MainNavigation />
        <CenterTitle />
      </Background>
      <Story />
    </div>
  );
}

export default HomePage;
