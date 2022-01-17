import { useState } from "react";
import styled from "styled-components";
import { AkarIcon, PlusIcon } from "../../../assets/icons";
import { ModalC } from "../../../shared/components/Modal";
// import { Tooltip } from "../../../shared/components/ToolTip";
// import { ControlledTooltip } from "../../../shared/components/ControlledTooltip";
import { NutrionFacts } from "./NutrionFacts";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

const StyledProductContainer = styled.div<any>`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    border-bottom: 2px solid #0A4626;
    width: 100%;
`;

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    @media (max-width: 768px) {
        margin-top: 27px;
      } 


`;

const StyledDivRow = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column-reverse;

      } 


`;
const StyledDivCol = styled.div<any>`
    display: flex;
    flex-direction: column;
    margin-left: ${props => props.mr && '40px'};
    @media (max-width: 768px) {
        margin-left: 0;
  } 
`;
const StyledContainerNutrionFacts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    cursor: pointer;
    max-width: 300px;
    margin: 0 auto;
    @media (max-width: 768px) {
        margin-top: 38px;
  } 
   
`;
const StyledSpan = styled.span`
    font-family: "Prompt", sans-serif !important;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    color: #0C6937;
`


const StyledProductBox = styled.div<any>`  
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1067px;
    align-items: flex-end;
    margin: ${props => (props.minSlider !== 'leite' && props.minSlider !== 'queijo') && '0 auto'};
    @media (max-width: 768px) {
        width: 100%;
  } 
`;


const StyledLink = styled.button<any>`
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: none;
    width: 100%;
    color: ${props => props.activeColor ? "#0A4626" : "#0A4626"};
    font-weight:  ${props => props.activeColor ? "700" : "400"};
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 42px;
    width: 100%;
    margin: 8px 0;
    padding-bottom: ${props => props.activeColor ? "0" : "6px"};
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16px;
        align-text: center;
        padding-bottom: ${props => props.activeColor ? "16px " : "22px"};
    } 


`;

const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`;
const StyledButton = styled.button`
    background: none;
    border: none;
    
    
`

const StyledProductParagraph = styled.h1`
    font-family: "Prompt", sans-serif !important;
    font-size: 40px;
    line-height: 42px;
    font-weight: 700;
    color: #0A4626;
    margin-top: 84px;
    
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 42px;
        margin-top: 20px;

      } 
`;

const StyledProductText = styled.p`
    font-family: "Prompt", sans-serif !important;
    font-size: 24px;
    line-height: 26px;
    font-weight: 700;
    color: #000000;
    margin-top: 21px;
    margin-bottom: 26px;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
      } 
`;
const StyledImgContainer = styled.div`
      display: flex;
      position: relative;
`

const StyledImg = styled.img<any>`
    transform:  ${props => props.activeColor && "scale(1.15)"};
    display: flex;
    @media (max-width: 768px) {
        height: ${props => props.nutrionFacts && "53px"};
        transform: none;
        padding-top: 0;
        margin:0;
        width: 100%;
    } 

`;
const StyledSlider = styled(Slider)`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;


    @media (max-width: 768px) {
        justify-content: start;
        } 
`;

const SyledSliderContainer = styled.div<any>`
    border-bottom:  ${props => props.activeColor && "6px solid #0A4626"};
    display: flex;
    flex-direction: column;
    margin-bottom: -4px;


    @media (max-width: 768px) {
        // padding: 0 60px;
    } 

`;

const StyledSliderImgBox = styled.div`
    display: flex;
    justify-content: center;

`;

const StyledBuyButton = styled.button`
    position: absolute;
    bottom: 75px;
    right: 110px;
    border: none;
    color: white;
    font-size: 15px;
    line-height: 15px;
    background: #B6C8BE;
    padding: 11px 21px;
    border-radius:80px;
    @media (max-width: 768px) {
        bottom: -20px;
        max-width: 126px;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;

    } 
`





export const ProductNutrionFacts:React.FC<any> = ({product}) => {
    const [active, setActive] = useState<any>(product[0].product[0].name);
    const [showModal, setShowModal] = useState(false);
    
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: product[0].product.length > 4 ? 4 : 3.99,
    slidesToScroll: 1,
    initialSlide:3,
    autoplay: product[0].product.length <= 4 ? false : true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,

        }
      },
    ]
  };
    return (
        <StyledMainContainer>
            <StyledProductBox minSlider={product[0].name}>
                    {
                        product[0].product.length >= 4
                        ?   
                            <StyledProductContainer>
                                <StyledSlider {...settings} >
                                    {
                                            product[0].product.map((prod : any, i: string) => (
                                            <SyledSliderContainer activeColor={active === prod.name} key={`${i}+${prod.name}`}>
                                                <StyledSliderImgBox>
                                                    <StyledImg   src={prod.imgUrl} activeColor={active === prod.name}/>
                                                </StyledSliderImgBox>
                                                <StyledDivCol>
                                                    <StyledLink onClick={() => setActive(prod.name)} activeColor={active === prod.name} >{prod.name}</StyledLink>
                                                </StyledDivCol>
                                            </SyledSliderContainer>
                                        ))
                                    }
                                </StyledSlider>
                            </StyledProductContainer>
                        :
                            <StyledProductContainer>
                                    {
                                          product[0].product.map((prod : any, i: string) => (
                                            <SyledSliderContainer activeColor={active === prod.name} key={`${i}+${prod.name}`}>
                                                <StyledSliderImgBox>
                                                    <StyledImg   src={prod.imgUrl} activeColor={active === prod.name}/>
                                                </StyledSliderImgBox>
                                                <StyledDivCol>
                                                    <StyledLink onClick={() => setActive(prod.name)} activeColor={active === prod.name} >{prod.name}</StyledLink>
                                                </StyledDivCol>
                                            </SyledSliderContainer>
                                            ))
                                    }
                            </StyledProductContainer>
                    }
            </StyledProductBox>
            <StyledDivRow>
                <StyledDivCol>
                    <StyledImgContainer>
                        <StyledImg src={product[0].productBuyImgUrl}  />

                        <StyledBuyButton>Comprar <AkarIcon /></StyledBuyButton>
                    </StyledImgContainer>
                    <StyledContainerNutrionFacts>
                            {
                                product[0].nutrionFacts.map((prod: any, i: string) => (
                                    <NutrionFacts key={`${i}+${prod.name}`} prod={prod}/>
                                ))
                            }
                    </StyledContainerNutrionFacts>
                </StyledDivCol> 
                <StyledDivCol mr>
                    <StyledProductParagraph>
                        {product[0].nutrionFactsP}
                    </StyledProductParagraph>
                    <StyledProductText>
                        {product[0].nutrionFactsT}
                    </StyledProductText>
                    <StyledImg  src={product[0].nutrionImgUrl}/>
                    <StyledBox>
                        <ModalC openModal={showModal} close={() => setShowModal(false)} product={product[0]}>
                            <StyledSpan>Ver declaração nutricional / Lista de ingredientes</StyledSpan>
                            <StyledButton onClick={() => setShowModal(true)}><PlusIcon /></StyledButton>
                        </ModalC >
                    </StyledBox>
                </StyledDivCol>
            </StyledDivRow>
        </StyledMainContainer>
        
    )
}