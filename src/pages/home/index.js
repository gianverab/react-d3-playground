import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHeader>
        <HomeTitle className="App-header-title">
          React and D3 Playground
        </HomeTitle>
        <Link to="../barchart">Bar Chart Example</Link>
      </HomeHeader>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  text-align: center;
`;

const HomeHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  a {
    color: #61dafb;
  }
`;

const HomeTitle = styled.h1`
  color: #61dafb;
  font-family: Rubik;
  font-weight: 400;
`;

export default Home;
