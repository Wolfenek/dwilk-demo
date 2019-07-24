import React from "react";
import Container from "../utils/Container";
import ImageMainPage from "../components/ImageMainPage";
import HashTags from "../components/HashTags";
import Headline from "../components/Headline";

const Home = () => {
  return (
    <>
      <HashTags />
      <Container>
        <ImageMainPage />
        <Headline />
      </Container>
    </>
  );
};

export default Home;
