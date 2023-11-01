function Background(props) {
  const backgroundStyle = {
    backgroundImage: "url(" + props.backgroundImage + ")",
    backgroundSize: "cover",
    height: "100vh",
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  };

  return <div style={backgroundStyle}>{props.children}</div>;
}

export default Background;
