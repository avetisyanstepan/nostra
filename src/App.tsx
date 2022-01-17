import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import { Routes } from "./routes";
import Header from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";
import { useLocation } from "react-router-dom";


const StyledRoutesContainer = styled.div`
  // margin-top: -173px;
`;



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
        <StyledRoutesContainer>
          <Routes />
        </StyledRoutesContainer>
      <Footer />
    </div>
  );
}

export default App;
