import React from "react";
import styled from "styled-components";
import { DotIcon } from "../../../assets/icons";
import ProductsSlide from "./ProductsSlide";

const StyledContainer = styled.div`
  position: relative;
`;
const StyledBgImage = styled.img`
  position: absolute;
  left: 0;
  width: 50%;
  height: 639px;
  @media (max-width: 768px) {
    display: none
  }
`;
const StyledSection = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin: 20px auto;

  }
`;
const StyledDescription = styled.h2`
  color: #152E1F;
  font-size: 35px;
  line-height: 32px;
  font-weight: 300;
  width: 471px;
  font-family: "Prompt", sans-serif !important;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  
`;
const StyledSpan = styled.span`
  font-weight: bold;
  color: #152E1F;

`;

const StyledInfoContainer = styled.div`
  display:flex;
  justify-content: flex-end;
  flex:1;
  z-index: 3;
  margin: 61px 180px;

  @media (max-width: 768px) {
    margin: 0 25px;
  }
`;

const StyledSectionInfoBox = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 116px;
    flex-direction: column;
    
    @media (max-width: 768px) {
      padding: 0 25px;
      margin-top: 34px;
    }
`;
const StyledInfoBox = styled.div`
  width: 100%;
  position: relative;


`;
const StyledGreenBackground = styled.div`
  background: #EEF1E5;
  position: absolute;
  right: 0;
  width: 50%;
  height: 100vh ;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;


const StyledParagraph = styled.h1`
  font-size: 32px;
  line-height: 44px;
  color: #0A4626;
  font-weight: 400;
  font-family: "Prompt", sans-serif !important;
  text-align: center;
  margin-top: 100px;

  @media (max-width: 768px) {
      font-size: 21px;
      line-height: 28px;
      margin-top: 34px;
  }

`;

const StyledBold = styled.span`
  font-weight: 700;
`;
const StyledTextP = styled.p`
  font-size: 32px;
  line-height: 44px;
  font-weight: 700;
  color:#0A4626;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  
`;
const StyledText = styled.p`
  font-size: 22px;
  line-height: 30px;
  font-weight: 300;
  color:#0A4626;


  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const StyledTextBold = styled.span`
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  color:#0A4626;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledDivCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 106px;
  max-width: 347px;

  @media (max-width: 768px) {
    margin-top: 25px;

  }
`;

const StyledDivColRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  align-content: flex-end;
  margin-right: -350px;
  max-width:417px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 25px;

  }
`

const StyledBackgroundImage = styled.div`
  background-image: url("./images/group2526.png" );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  margin-right: 225px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    background: none;
    margin-right: 0;
  }
`;

const StyledRightBox = styled.div`
  margin-top: 160px;
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-top: 25px;
    margin-left: 0px;
  }
`;

const StyledDotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 62px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
`
const StyledDivRow = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const StyledDotText = styled.span`
  font-size: 38px;
  line-height: 36px;
  color: #0A4626;
  max-width: 974px;
  width: 100%;
  margin-top: 65px;


  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    color: #0A4626;
    margin-top: 18px;
  }

`;
const StyledMobileImg = styled.div`
  display: none;

  @media (max-width: 768px) {
    background-image: url("./images/group2526.png" );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 327px;
    display: flex;
    justify-content: space-around;
  }
  
`;

const StyledDotImg = styled.img`

  width: 68px;
  height: 98px

  @media (max-width: 768px) {
    width: 36px;
    height: 52px
  }

`

const ProductsSection = () => {
  return (
    <StyledContainer>
        <StyledBgImage src={`./images/image17.png`}/>
        <StyledSection>
            <StyledInfoContainer>
              <StyledDescription>
                Trazemos 
                <StyledSpan> os melhores ingredientes, de origem simples e natural</StyledSpan>
                para todos os nossos produtos.
              </StyledDescription>
            </StyledInfoContainer>
          <ProductsSlide />
        </StyledSection>
        
        <StyledGreenBackground />

        <StyledInfoBox>
          <StyledSectionInfoBox>
            <StyledParagraph>
                Cada um dos nossos produtos é produzido com <StyledBold>Ingredientes simples e de origem natural.</StyledBold>
            </StyledParagraph>
            
            <StyledBackgroundImage >
                <StyledDivCol>
                    <StyledText>
                      <StyledTextP>
                        365 dias de pastagem
                      </StyledTextP>
                        Leite de  
                        <StyledTextBold>
                        vacas felizes que vivem 
                        ao ar livre e comem erva fresca 
                        365 dias por ano ,
                        </StyledTextBold>
                        dão origem a 
                        produtos únicos, naturalmente 
                        cheios de sabor
                    </StyledText>
                </StyledDivCol>
                <StyledDivColRight>
                  <StyledText>
                      <StyledTextP>
                         Ingredientes
                      </StyledTextP>
                        Privilegiamos ingrdientes simples e
                        de origem natural, 
                        <StyledTextBold>
                           dispensamos
                          artificios para entregar o melhor que
                          a pastagem tem para oferecer.                       
                        </StyledTextBold>
                    </StyledText>
                    <StyledRightBox>
                      <StyledText>
                          <StyledTextP>
                            Embalagens
                          </StyledTextP>
                            Estamos comprometidos em usar embalagens que tenham um menor impacto ambiental
                      </StyledText>
                    </StyledRightBox>
                    <StyledMobileImg />
                  
                </StyledDivColRight>
            </StyledBackgroundImage>
            <StyledDotsContainer>
                <StyledDivRow>
                  <StyledDotImg src="./images/dot.png"/>
                  <DotIcon />
                </StyledDivRow>
                <StyledDivRow>
                <StyledDotText>
                   Entregamos o <StyledBold>melhor da pastagem,</StyledBold> em produtos naturalmente <StyledBold>cheios de sabor.</StyledBold> 
                </StyledDotText>
                </StyledDivRow>
            </StyledDotsContainer>

          </StyledSectionInfoBox>
        </StyledInfoBox>
      </StyledContainer>
  );
};
export default ProductsSection;
