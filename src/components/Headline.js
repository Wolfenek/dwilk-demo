import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import trees from "../images/trees.jpg";
import { NavContext } from "../context/NavContext";

const Headline = () => {
  const { defaultFalse } = useContext(NavContext);
  return (
    <NewsWrapper>
      {/* News 1 */}
      <PieceOfNews style={{ cursor: "pointer" }} onClick={defaultFalse}>
        <StyledLink to="/article">
          <div>
            <NewsTag>US</NewsTag>
            <NewsHeadline bigger>
              Poverty To Empowerment In Chicago
            </NewsHeadline>
          </div>
        </StyledLink>
      </PieceOfNews>
      {/* News 2 */}
      <PieceOfNews>
        <div>
          <NewsTag>Politics</NewsTag>
          <NewsHeadline>Divided American Lives During War</NewsHeadline>
        </div>
        <Img src={trees} />
      </PieceOfNews>
      {/* News 3 */}
      <PieceOfNews>
        <div>
          <NewsTag>World</NewsTag>
          <NewsHeadline bigger>Climate change</NewsHeadline>
        </div>
      </PieceOfNews>
      {/* News 4 */}
      <PieceOfNews>
        <div>
          <NewsTag>US</NewsTag>
          <NewsHeadline>lorem ipsum...</NewsHeadline>
        </div>
        <Img src={trees} />
      </PieceOfNews>
      {/* News 5 */}
      <PieceOfNews>
        <div>
          <NewsTag>Germany</NewsTag>
          <NewsHeadline bigger>World cup...</NewsHeadline>
        </div>
      </PieceOfNews>
      {/* News 6 */}
      <PieceOfNews>
        <div>
          <NewsTag>US</NewsTag>
          <NewsHeadline>lorem ipsum...</NewsHeadline>
        </div>
        <Img src={trees} />
      </PieceOfNews>
    </NewsWrapper>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;

const NewsWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const PieceOfNews = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px dotted rgba(153, 204, 255, 0.4);
  /* cursor: pointer; */
  &:last-child {
    border-bottom: none;
  }
  @media (min-width: 768px) {
    width: 48%;
    border-bottom: none;
  }
`;

const NewsTag = styled.h3`
  font-size: 0.95rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

const NewsHeadline = styled.h2`
  font-size: ${({ bigger }) => (bigger ? "2rem" : "1.5rem")};
  margin-right: 1rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  margin-left: auto;
  display: block;
`;

export default Headline;
