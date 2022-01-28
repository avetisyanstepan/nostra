import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';
import ReactPlayer from "react-player";
import { PlayIcon } from "../../../assets/icons";

const StyledBackgroundImage = styled.div`
  // background-image: url("./images/video_placeholder.png");
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  // height: 100vh;
  // width: 100%;
  // display: flex;
  // align-items: center;
  position: relative;
`;
const Styledh1 = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 32px;
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 61%;
    z-index: 0;
    position: absolute;
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
`;

const StyledMobCloud = styled.div`
    display: none;
  @media (max-width: 768px) {
    background-image: url("./images/mobCloud.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 49%;
    z-index: 0;
    position: absolute;
    display: flex;

  }

`
const StyledMobCloudBg = styled.div`
    display: none;
  @media (max-width: 768px) {
    background-image: url("./images/mobNuv.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 53%;
    z-index: 0;
    position: absolute;
    display: flex;

  }

`

const StyledTextContainer = styled.div`
  width: 100%;
  align-text: center;
  color: red;
  position: absolute;
  top: 40%;

  @media (max-width: 768px) {
    top: 100px;
    max-width: 240px;
    margin-left: 26px; 
  }


`;

const StyledPlayConatainer = styled.div`
  z-index: 3;
  display: flex;

  @media (max-width: 768px) {
    display: none

  }
`
const Hero = () => {
  return (
    <StyledBackgroundImage>
       <ReactPlayer
          light={"./images/video_placeholder.png"}
          controls
          playing
          url={'https://www.youtube.com/watch?v=Yu5MdNfCMh4'}
          width={'100%'}
          height={'100vh'}
          playIcon={
            <StyledPlayConatainer>
              <PlayIcon />
            </StyledPlayConatainer>

          }
        />
      <StyledTextContainer>
          <Col className="text-start offset-md-7" md={4}>
            <Styledh1>
              365 dias de Pastagem
            </Styledh1>
            <StyledHeroDescription>
                Entregamos o melhor da pastagem em produtos <br /> naturalmente cheios de sabor.
            </StyledHeroDescription>
          </Col>
      </StyledTextContainer>
      <StyledCloudImage />
      <StyledMobCloud />
      <StyledMobCloudBg />
    </StyledBackgroundImage>
  );
};
export default Hero;
