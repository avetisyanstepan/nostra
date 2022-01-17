import React from "react";
// import { Container } from "react-bootstrap";
// import styled from "styled-components";
import Animals from "./components/Animals";
import FazerOBemHero from "./components/FazerOBemHero";

// const Styledimg = styled.img`
//   height: 600px;
// `;
// const StyledSpacer = styled.div`
//   margin-top: 80px;
// `;
const FazerOBem = () => {
  return (
    <>
      <FazerOBemHero />
      <Animals />
    </>
  );
};
export default FazerOBem;
