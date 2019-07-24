import React from "react";

import classroom from "../images/classroom.jpg";
import ZoomImage from "../components/ZoomImage";

// Parent component
const Article = () => {
  return (
    <>
    <h2>Hello</h2>
    <ZoomImage src={classroom} />
    </>
  );
};


export default Article;
