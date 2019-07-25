import React, { useState } from "react";
import styled from "styled-components";
import posed from "react-pose";

const ZoomImage = ({ imgHeight, ...props }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const pose = isZoomed ? "zoomedIn" : "zoomedOut";

  const zoomIn = () => {
    setIsZoomed(true);
  };

  const zoomOut = () => {
    setIsZoomed(false);
  };

  return (
    <ArticleImageWrapper 
    style={{height: imgHeight}}
    onClick={() => (isZoomed ? zoomOut() : zoomIn())}>
      <ToggleBackrop pose={pose} />
      <PosedImg
        pose={pose}
        {...props}
        style={{
          maxWidth: "100%",
          display: "block",
          margin: "auto",
          cursor: "zoom-in"
        }}
      />
    </ArticleImageWrapper>
  );
};

// Styled & animated files
const ArticleImageWrapper = styled.div`
  /* height: 100%; */
  width: "100%";
  max-width: 550px;
  margin: 0 auto;
`;

const transition = {
  duration: 700,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const PosedImg = posed.img({
  zoomedIn: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transition,
    flip: true
  },
  zoomedOut: {
    position: "static",
    width: "auto",
    height: "auto",
    maxHeight: "65vh",
    transition,
    flip: true
  }
});

// backdrop
const Backdrop = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background-color: white;
  transform: translateZ(0);
`;

const ToggleBackrop = posed(Backdrop)({
  zoomedOut: {
    applyAtEnd: { display: "none" },
    opacity: 0
  },
  zoomedIn: {
    applyAtStart: { display: "block" },
    opacity: 0.5
  }
});

export default ZoomImage;
