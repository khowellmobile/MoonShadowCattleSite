function Background(props) {
  const backgroundStyle = {
    backgroundImage: "url(" + props.backgroundImage + ")",
    backgroundSize: "cover",
    height: "100vh",
  };

  return <div style={backgroundStyle}>{props.children}</div>;
}

export default Background;
