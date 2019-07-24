import React from "react";
import styled from "styled-components";

const HashTags = () => {
  return (
    <WrapperDesktop>
      <HashTagItem>#TechDesign</HashTagItem>
      <HashTagItem>#HealthCare Revolution</HashTagItem>
      <HashTagItem>#FutureWorld Halloween</HashTagItem>
      <HashTagItem>#Lorem Ipsum</HashTagItem>
    </WrapperDesktop>
  );
};

// This dude is not responsive on purpose
const WrapperDesktop = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  /* border: 2px solid steelblue; */
  display: flex;
`;

const HashTagItem = styled.h3`
  font-size: 1.25rem;
  margin-right: 2rem;
  &:last-child {
    margin-right: 0;
  }
`;

export default HashTags;
