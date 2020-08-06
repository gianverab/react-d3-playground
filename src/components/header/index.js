import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>React and D3 Playground</HeaderTitle>
      <Link to="./">Home</Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: black;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 769px) {
    padding: 10px 100px;
  }

  a {
    color: #61dafb;
    font-size: 1.5rem;
  }
`;

const HeaderTitle = styled.h1`
  font-family: Rubik;
  font-weight: 300;
  font-size: 24px;

  @media screen and (min-width: 769px) {
    font-size: 32px;
  }
`;

export default Header;
