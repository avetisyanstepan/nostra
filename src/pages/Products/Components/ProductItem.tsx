import { useState } from "react";
import ReactPlayer from "react-player";
import { useHistory, useParams } from "react-router-dom";
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
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;

    @media (max-width: 768px) {
        font-szie: 22px;
        line-height: 32px;
    }
`;
const StyledText = styled.p<any>`
    color: #152E1F;
    font-size: 24px;
    line-height: 36px;
    font-family: "Prompt";
    white-space: pre-wrap;


    @media (max-width: 768px) {
        font-szie: 16px;
        line-height: 23px;
        white-space: no-wrap;

    }
    @media (min-width: 768px) {
        padding-right: 50px;
    }
`;

const StyledLogoContainer = styled.div<any>`
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
    margin: 220px auto 70px auto;

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
    border-radius: ${props => props.rounded === 'biologico' && '0'};
    background:  ${props => props.rounded === 'biologico' && '#F1F1F1'};
    padding:  ${props => props.rounded === 'biologico' && '25px 12px 50px 12px'};


    
    

    @media (max-width: 768px) {
        width: ${(props) => props.lastBg ? "100%" : "237px"};
        width: ${(props) => props.lastBg2 && "284px"};
        height: ${(props) => props.lastBg ? "181px" : "237px"};
        height: ${(props) => props.lastBg2 && "179px"};

      }
    
`;
const StyledProductText = styled.span<any>`
    white-space: pre-wrap;
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
const StyledImgLogo = styled.img<any>`
    width: 180px;
    height: 180px;
    position: absolute;
    left:  ${props => props.bottomRight === 'leite' && '-33px'};
    left:  ${props => props.bottomRight === 'manteiga' && '-33px'};
    right:  ${props => props.bottomRight === 'queijo' && '0'};
    bottom:  ${props => props.bottomRight === 'queijo' && '0'};
    bottom:  ${props => props.bottomRight === 'manteiga' && '0'};
    z-index: 15;

    @media (max-width: 768px) {
        width: 117px;
        height: 117px;
        left: -29px;
        top:0;
      }
    
`;
const SyledBox = styled.div`
    margin-top: 50px;
    position: relative;
    height: 633px;
    @media (max-width: 768px) {
        height: 183px;
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
    z-index: 10;
`;

const StyledReadMoreContainer = styled.div`
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 70px;
    flex-direction: row;
    padding: 44px 0;
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
    line-height: 16px;
    margin-bottom: -26px;

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
    const product: any = productInfoData.filter((name1) => name1.name === name );
    const history = useHistory()
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

                        <StyledProductText describe={"describe"} onClick={() => history.push(`/vacas-felizes`)}>
                            {product[0].describeText}
                            <RoundedPlusIcon />
                        </StyledProductText>
                       
                    </StyledDivCol>
                                   
                    <StyledLogoContainer bottomRight={product[0].name}>
                        <StyledImg  src={product[0].imgProd} rounded={product[0].name} /> 
                        {product[0].name !== 'biologico' && <StyledImgLogo  src="/images/prodLogoHappy.png" bottomRight={product[0].name}/>}
                    </StyledLogoContainer>
                </StyledInfoContainer>
                <ProductNutrionFacts  product={product}/> 
                <SyledBox>
                    {product[0].videoThubnailImage && 
                        <ReactPlayer
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
                        <StyledText max>
                            {product[0].readMoreText}
                        </StyledText>
                            <StyledButton onClick={() => history.push('/fazer-o-bem')}>
                                saiba mais
                            </StyledButton>
                      
                    </StyledReadMoreBox>
                    <StyledImg lastBg2={'lastBg2'}  src={product[0].readMoreImgUrl}/>
                </StyledReadMoreContainer>
              
                <StyledTextContainer />
            </StyledDivRow>


        </StyledMain>
    )
}