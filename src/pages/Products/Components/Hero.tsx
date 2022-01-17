import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';

const StyledBackgroundImage = styled.div`
  background-image: url("./images/video_placeholder.png");
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
  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
  font-weight: bold;
  font-family: "Prompt", sans-serif !important;
`;
const StyledHeroDescription = styled.p`
  color: white;
  font-size: 16px;
  line-height: 26px;
  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
  font-family: "Prompt", sans-serif !important;
`;

const StyledCloudImage = styled.div`
    background-image: url("./images/cloud.png");
    background-size: cover;
    height: 200px;
    width: 100%;
    position: absolute;
`
const Hero = () => {
  return (
    <StyledBackgroundImage>
    <Container>
        <Row>
          <Col className="text-start offset-md-7" md={4}>
            <Styledh1>
              365 dias de pastagem
              <p data-tip="hello world">Tooltip</p>
              <ReactTooltip />

            </Styledh1>
            <StyledHeroDescription>
                Entregamos o melhor da pastagem em produtos naturalmente cheios de sabor.
            </StyledHeroDescription>
          </Col>
        </Row>
      </Container>
      <StyledCloudImage />
    </StyledBackgroundImage>
  );
};
export default Hero;
