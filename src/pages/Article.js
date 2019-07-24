import React, { useState } from "react";
import posed from "react-pose";
import classroom from "../images/classroom.jpg";
import Container from "../utils/Container";

const ZoomImage = ({ MaxImageWidth, ...props }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const pose = isZoomed ? "zoomedIn" : "zoomedOut";

  const zoomIn = () => {
    setIsZoomed(true);
  };

  const zoomOut = () => {
    setIsZoomed(false);
  };

  return (
    <Container
      onClick={() => (isZoomed ? zoomOut() : zoomIn())}
      style={{ width: "100%", maxWidth: MaxImageWidth, height: "auto" }}
    >
      <PosedImg
        pose={pose}
        {...props}
        style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
      />
    </Container>
  );
};

const Article = () => {
  return <ZoomImage MaxImageWidth={600} src={classroom} />;
};

const transition = {
  duration: 500,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const PosedImg = posed.img({
  zoomedIn: {
    position: "fixed",
    top: "75px",
    left: 0,
    bottom: 0,
    right: 0,
    flip: true,
    transition
  },
  zoomedOut: {
    position: "static",
    width: "auto",
    height: "auto",
    flip: true,
    transition
  }
});



export default Article;
