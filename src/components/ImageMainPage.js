import React from "react";
import styled from "styled-components";
import doctors from "../images/doctors.jpg";

const ImageMainPage = () => {
  return <Img src={doctors} alt="doctors during operation" />;
};

const Img = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export default ImageMainPage;
