import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMdSearch, IoMdShare } from "react-icons/io";
import { NavContext } from "../context/NavContext";

const Header = () => {
  const { defaultNav, defaultTrue } = useContext(NavContext);
  return (
    <header>
      <Navbar>
        <HamburgerBox to="/" onClick={defaultTrue}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerBox>
        <PageTitle>The Fortnightly</PageTitle>
        {defaultNav ? <Icon /> : <Icon2 />}
      </Navbar>
    </header>
  );
};

const Navbar = styled.nav`
  /* padding-top: 30px; */
  width: 100%;
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-family: "MedievalSharp", cursive;
  /* flex-grow: 1; */
`;

const HamburgerBox = styled(NavLink)`
  height: 25px;
  width: 27px;
  margin-right: 18px;
  cursor: pointer;
`;

const HamburgerLine = styled.div`
  width: 27px;
  height: 4px;
  background-color: #333;
  margin: 3px 0;
`;

const Icon = styled(IoMdSearch)`
  font-size: 2rem;
  margin-left: auto;
`;

const Icon2 = styled(IoMdShare)`
  font-size: 2rem;
  margin-left: auto;
`;

export default Header;
