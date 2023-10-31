import img0 from '../../images/scenicImage0.jpg'

function Background(props) {
  const backgroundStyle = {
    backgroundImage: 'url(' + img0 + ')',
    backgroundSize: "cover",
    height: "100vh",
    outline: 'solid 5px red'
  };

  return <div style={backgroundStyle}>{props.children}</div>;
}

export default Background;
