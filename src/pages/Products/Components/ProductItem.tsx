import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PlayIcon, RoundedPlusIcon } from "../../../assets/icons";
import { productInfoData } from "../../../MOCK";
import { ProductNutrionFacts } from "./ProductNutrionFacts";



const StyledDivRow = styled.div`

    display: flex;
    flex-direction: row;
    position: relative;
    // @media (max-width: 768px) {
    //     flex-direction: column;
    // }
`;
const StyledMain = styled.div`
    position: relatvie;

    @media (max-width: 768px) {
        padding-bottom: 32px;

    }
`;

const StyledDivCol = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    font-family: "Prompt";
    color: #0A4626;
    font-szie: 32px;ccccc
    font-weight: 700;
    line-height: 42px;

    @media (max-width: 768px) {
        font-szie: 22px;
        line-height: 32px;
    }
`;
const StyledText = styled.p`
    color: #152E1F;
    font-size: 24px;
    line-height: 36px;
    font-family: "Prompt";


    @media (max-width: 768px) {
        font-szie: 16px;
        line-height: 23px;
    }
`;

const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 33px;
    border-radius: 100%;

    @media (max-width: 768px) {
        margin: 16px auto;

      }
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1160px;
    margin: 220px auto 53px auto;

    @media (max-width: 768px) {
        margin-top: 60px;
        padding: 0 25px;

      }
    
`;
const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`


const StyledProductParagraph = styled.p`
    font-size: 64px;
    color: #0A4626;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    line-height: 64px;
    max-wdith: 605px;
    margin-top: 33px;
    width: 100%;
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 23px;
      }
`;

const StyledImg = styled.img<any>`
    z-index: 1;
    width: 100%;
    display: flex;
    border-radius: ${props => props.rounded && '100%'};
    

    @media (max-width: 768px) {
        width: ${(props) => props.lastBg ? "100%" : "237px"};
        width: ${(props) => props.lastBg2 && "284px"};
        height: ${(props) => props.lastBg ? "181px" : "237px"};
        height: ${(props) => props.lastBg2 && "179px"};

      }
    
`;
const StyledProductText = styled.span<any>`
    font-family: "Poppins", sans-serif !important;
    color: ${props => props.describe ? '#0C6937' : '#152E1F '};
    font-size: ${props => props.describe ? '14px' : '24px'};
    cursor: ${props => props.describe && 'pointer'};
    font-weight: ${props => props.describe ? '700' : '400'};
    margin-top: ${props => props.describe ? '26px' : '0'};
    max-width: 605px;
    line-height: 37px;
    gap: 12px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;

      }

`;
const StyledImgLogo = styled.img`
    width: 180px;
    height: 180px;
    position: absolute;
    left: -29px;
    z-index: 15;

    @media (max-width: 768px) {
        width: 117px;
        height: 117px;
      }
    
`;
const SyledBox = styled.div`
    margin-top: 50px;
    position: relative;
    height: 633px;
    @media (max-width: 768px) {
        height: 633px;
    }
`;

const StyledTextContainer = styled.div`
    background: #EEF1E5;
    width: 65%;
    height: 435px;
    position: absolute;
    left: 0;

    @media (max-width: 768px) {
        width: 100%;
      }
`;

const StyledReadMoreBox = styled.div`
    width: 100%;
    z-index: 10;
`;

const StyledReadMoreContainer = styled.div`
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 36px 0;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 25px;
        align-items: center;
      }
`;

const StyledButton = styled.button`
    background: #0A4626;
    padding: 18px 42px;
    border-radius: 60px;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: 768px) {
        padding: 13px 33px;
        font-size: 12px;
        margin-bottom: 32px;

      }
`;





interface ParamTypes {
    name?: string,
  };


export const ProductItem= () => {
    const {name} = useParams<ParamTypes>();
    const product: any = productInfoData.filter((name1) => name1.name === name )
    const [total, setTotal] = useState(256)
    return (
        <StyledMain>
            <StyledContainer>
                <StyledInfoContainer>
                    <StyledDivCol>
                        <StyledProductParagraph>
                            {product[0].paragraph}
                        </StyledProductParagraph>
                        <StyledProductText>
                            {product[0].textInfo}
                        </StyledProductText>

                        <StyledProductText describe={"describe"}>
                            {product[0].describeText}
                            <RoundedPlusIcon />
                        </StyledProductText>
                       
                    </StyledDivCol>
                    <StyledLogoContainer>
                        <StyledImg  src={product[0].imgProd} rounded={'rounded'}/> 
                        <StyledImgLogo  src="/images/prodLogoHappy.png" />
                    </StyledLogoContainer>
                </StyledInfoContainer>
                <ProductNutrionFacts  product={product}/> 
                <SyledBox>
                    {product[0].videoThubnailImage && 
                        <ReactPlayer
                        // className={'hidden'}
                        light={product[0].videoThubnailImage}
                        controls
                        playing
                        url={product[0].videoUrl}
                        width={'100%'}
                        height={'100%'}
                        playIcon={
                            <PlayIcon />

                        }
                      />
                    }
                    {
                        product[0].backgroundImage && <StyledImg lastBg={'lastBg'} src={product[0].backgroundImage}/>
                    }
                    
                </SyledBox>
    
                
            </StyledContainer>
            <StyledDivRow>
                <StyledReadMoreContainer>
                    <StyledReadMoreBox>
                        <StyledTitle>
                            {product[0].readMoreTitle}
                        </StyledTitle>
                        <StyledText>
                            {product[0].readMoreText.slice(0, total)}
                        </StyledText>
                        {product[0].readMoreText.length !== total &&
                            <StyledButton onClick={() => setTotal(product[0].readMoreText.length)}>
                                saiba mais
                            </StyledButton>
                        }
                      
                    </StyledReadMoreBox>
                    <StyledImg lastBg2={'lastBg2'}  src={product[0].readMoreImgUrl}/>
                </StyledReadMoreContainer>
              
                <StyledTextContainer />
            </StyledDivRow>


        </StyledMain>
    )
}