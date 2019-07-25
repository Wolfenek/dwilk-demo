import React from "react";
import styled from "styled-components";
import Container from "../utils/Container";
import classroom from "../images/classroom.jpg";
import ZoomImage from "../components/ZoomImage";

// Parent component
const Article = () => {
  return (
    <>
      <ZoomImage src={classroom} imgHeight={400} />
      <Container>
        <NewsTag>U.S. &nbsp; &nbsp; &nbsp; Poverty</NewsTag>
        <NewsHeadline>Poverty To Empowerment In Chicago</NewsHeadline>
        <Paragraph>How one woman in transforming the lives of underprivileged children in the inner city</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
      </Container>
    </>
  );
};

const NewsTag = styled.h3`
  font-size: 0.95rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const NewsHeadline = styled.h2`
  font-size: 2.5rem;
  font-style: italic;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  color: grey;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export default Article;
