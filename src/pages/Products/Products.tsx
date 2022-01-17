import React from "react";
// import styled from "styled-components";
import Hero from "./Components/Hero";
import ProductsSection from "./Components/ProductsSection";

// const StyledBackgroundImage = styled.div`
//   background-image: url("./images/video_placeholder.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   position: relative;
// `;
// const Styledh1 = styled.h1`
//   color: white;
//   font-size: 32px;
//   text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
//   font-weight: bold;
//   font-family: "Prompt", sans-serif !important;
// `;
// const StyledHeroDescription = styled.p`
//   color: white;
//   font-size: 16px;
//   line-height: 26px;
//   text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
//   font-family: "Prompt", sans-serif !important;
// `;
const Products = () => {
  return (
    <>
      <Hero />
      <ProductsSection />
    </>
  );
};
export default Products;
