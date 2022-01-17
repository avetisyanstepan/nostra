import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
// import { circleSlogan, ImageCutIcon } from "../../../assets/icons";
import { SecondaryButton } from "../../../shared/components/Buttons";


const StyledBackgroundImage = styled.div`
  background-image: url("./images/fazer-o-bem-hero.png");
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
  color: #0a4626;
  font-size: 64px;
  font-weight: bold;
  font-family: "Prompt", sans-serif !important;
`;
const StyledHeroDescription = styled.p`
  color: #102318;
  font-size: 24px;
  line-height: 36px;
  font-family: "Prompt", sans-serif !important;
`;
const StyledImageCutIcon = styled.div`
  background-image: url("./images/nuvens.png");
    height: 300px;
    width: 100%;
    position: absolute;
    background-position: top center;
    background-size: cover;
    bottom: 0;
    background-repeat: no-repeat;
`;
const FazerOBemHero = () => {
  return (
    
    <StyledBackgroundImage>
      <Container>
        <Row className="align-items-center">
          <Col className="text-start" md={5}>
            <Styledh1>
            Fazer o bem.
            </Styledh1>
            <StyledHeroDescription>
            Fazer o bem a todos é a nossa missão. Fazer o bem aos animais, aos produtores, ao planeta e a quem escolhe Terra Nostra, através da entrega de produtos responsáveis e naturalmente cheios de sabor. 
            </StyledHeroDescription>
            <SecondaryButton>saber mais</SecondaryButton>
          </Col>
        </Row>
      </Container>
      <StyledImageCutIcon />
    </StyledBackgroundImage>
  );
};
export default FazerOBemHero;
