import React from "react";
import styled from "styled-components";
import HappyCow from "./components/HappyCow";

import Hero from "./components/Hero";
import LoveToLand from "./components/LoveToLand";
import MountainBlock from "./components/MountainBlock";
import Products from "./components/Products";
// const Styledimg = styled.img`
//   height: 600px;
// `;
const StyledSpacer = styled.div`
  margin-top: 80px;
`;
const Home = () => {
  return (
    <>
      <Hero />
      <StyledSpacer />
      <HappyCow />
      <MountainBlock />
      <LoveToLand />
      <Products />
    </>
  );
};
export default Home;
