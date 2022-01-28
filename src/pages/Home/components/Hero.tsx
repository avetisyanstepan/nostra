import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
// import { circleSlogan } from "../../../assets/icons";
// import { PrimaryButton } from "../../../shared/components/Buttons";
const StyledBackgroundImage = styled.div`
  background-image: url("./images/homePageBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;
const Styledh1 = styled.h1`
  color: white;
  font-size: 32px;
  text-shadow: 1px 1px 35px rgba(0, 0, 0, 0.24);
  font-weight: bold;
  font-family: "Prompt", sans-serif !important;
`;
const StyledHeroDescription = styled.p`
  color: white;
  font-size: 16px;
  line-height: 24px;
  text-shadow: 1px 1px 35px rgba(0, 0, 0, 0.24);
  font-family: "Prompt", sans-serif !important;
`;

const Hero = () => {
  return (
    <StyledBackgroundImage>
      <Container className="">
        <Row className="align-items-center ">
          <Col className="text-start offset-md-1" md={12}>
            <Styledh1>
              365 dias de Pastagem 
            </Styledh1>
            <StyledHeroDescription>
                Entregamos o melhor da pastagem em produtos <br /> naturalmente cheios de sabor.
            </StyledHeroDescription>
          </Col>
        </Row>
      </Container>
    </StyledBackgroundImage>
  );
};
export default Hero;
