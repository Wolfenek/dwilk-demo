import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <Navbar>
        <HamburgerBox to="/">
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerBox>
        <PageTitle>The Fortnightly</PageTitle>
        <Icon />
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

export default Header;
