import { useState } from "react";
import { CloseIcon, UnionIcon } from "../../../assets/icons";
import styled from "styled-components";




export const ManteigaInfoModal:React.FC<any> = ({product, close}) => {

    const [activeName, setActiveName] = useState('lipidos')

    return (
        <StyledModalContainer>
        <StyledDivRow>
          <StyledParagraphContainer>
            <StyledSpan>Declaração Nutricional</StyledSpan>
          </StyledParagraphContainer>
          <StyledCloseButton onClick={close}><CloseIcon /></StyledCloseButton>
        </StyledDivRow>
      


        <StyledBox>
          <StyledImg src={product.modalBackImg} />
          <StyledGridContainer>
            <StyledInfoBox mr={'40'} border flex>
              <StyledTitle>Energia   (kJ / kcal)</StyledTitle>
              <StyledTitle 
                active={'lipidos' === activeName} 
                onClick={() => setActiveName('lipidos')}
              >
                {activeName === 'lipidos' && <StyledUnionbox> <UnionIcon /></StyledUnionbox>  }
                Lípidos   (g)
              </StyledTitle>
              <StyledTitle 
                active={'saturados' === activeName} 
                ml
                onClick={() => setActiveName('saturados')}
              >
                {activeName === 'saturados' && <StyledUnionbox ml> <UnionIcon /></StyledUnionbox>  }
                dos quais saturados   (g)
              </StyledTitle>
              <StyledTitle 
                active={'carbono' === activeName }
                onClick={() => setActiveName('carbono')}
              >
                {activeName === 'carbono' && <StyledUnionbox> <UnionIcon /></StyledUnionbox>  }
                Hidratos de Carbono   (g)
              </StyledTitle>
              <StyledTitle 
                active={'acucares' === activeName} 
                ml 
                onClick={() => setActiveName('acucares')}
              >
                {activeName === 'acucares' && <StyledUnionbox ml> <UnionIcon /></StyledUnionbox>  }
                dos quais açúcares   (g)
              </StyledTitle>
            
              <StyledTitle 
                active={'protein' === activeName}
                onClick={() => setActiveName('protein')}
              >
                {activeName === 'protein' && <StyledUnionbox> <UnionIcon /></StyledUnionbox>  }
                Proteína (g)
              </StyledTitle>
              <StyledTitle 
                active={'sal' === activeName}
                onClick={() => setActiveName('sal')}
              >
                {activeName === 'sal' && <StyledUnionbox> <UnionIcon /></StyledUnionbox>  }
                Sal   (g)
              </StyledTitle>
              <StyledTitle 
                active={'vitaminA' === activeName} 
                onClick={() => setActiveName('vitaminA')}
              >
                {activeName === 'vitaminA' && <StyledUnionbox> <UnionIcon /></StyledUnionbox>  }
                Cálcio   (mg)
              </StyledTitle>
            
            
            </StyledInfoBox>
            <StyledInfoBox bg={'green'} mr={'14'} ml center>
              <StyledDivRow abs>
                <StyledSpanPor>por 100ml</StyledSpanPor>
              </StyledDivRow>
               <StyledTitle>273 kJ / 65 kcal</StyledTitle>
               <StyledTitle active={'lipidos' === activeName}>82</StyledTitle>
               <StyledTitle active={'saturados' === activeName}>55</StyledTitle>
               <StyledTitle active={'carbono' === activeName } >0.8</StyledTitle>
               <StyledTitle active={'acucares' === activeName} >0.7</StyledTitle>
               <StyledTitle active={'protein' === activeName}>0.4</StyledTitle>
               <StyledTitle active={'sal' === activeName} >1.3</StyledTitle>
               <StyledTitle active={'vitaminA' === activeName}>895 ( 112% VRN)</StyledTitle>
            </StyledInfoBox>
          </StyledGridContainer>
          
        </StyledBox>
        {product.name === 'snack'
          ? 
            <StyledColDiv>
            <IngredientsText>
              <StyledBoldText>Ingredientes: </StyledBoldText>
              <br/><br />
              <StyledBoldText>Queijo: </StyledBoldText>{" "}Leite de vaca pasteurizado, Anti-aglomerante (fibra de aveia), Fermentos lácteos, Coalho, Sal.
            </IngredientsText> 
            <IngredientsText>
              <StyledBoldText>Mistura de Frutos: </StyledBoldText>{" "}Miolo de Nozes em quartos 67%, Uvas Passas 33%.
            </IngredientsText> 
            <IngredientsText>
              <StyledBoldText>Alergénios: </StyledBoldText>{" "}Pode conter vestígios de outros frutos de casca rija, amendoim, soja, sementes de sésamo, cereais que contêm glúten e ovos e produtos à base de ovos.
            </IngredientsText> 
            </StyledColDiv>
             
          :
            <IngredientsText pt><StyledBoldText>Ingredientes: </StyledBoldText>{" "}{product.modalProductInfo}.</IngredientsText>   
            

        }

        <StyledColDiv>
          <StyledMobileText bold={'bold'}>
            pro 100ml
          </StyledMobileText>
          <StyledMobileNutrionFacts>
            <StyledColDiv width={'104'} firstCol>
                <StyledMobileText>
                  Energia (kJ / kcal)
                </StyledMobileText>
                <StyledMobileText>
                Lípidos (g)
                </StyledMobileText>
                <StyledMobileText>
                dos quais saturados (g)
                </StyledMobileText>
                <StyledMobileText>
                Hidratos de Carbono (g)
                </StyledMobileText>
                <StyledMobileText>
                dos quais açúcares (g)
                </StyledMobileText>
                <StyledMobileText>
                Proteína (g)
                </StyledMobileText>
                <StyledMobileText>
                Sal (g)
                </StyledMobileText>
                <StyledMobileText>
                Riboflavina (mg)
                </StyledMobileText>
                <StyledMobileText>
                Cálcio (mg)
                </StyledMobileText>
                <StyledMobileText>
                Fósforo (mg)
                </StyledMobileText>
                <StyledMobileText>
                Iodo (μg)
                </StyledMobileText>
            </StyledColDiv>
            <StyledColDiv bg={'bg'} center>
                <StyledMobileText>
                  273 kJ / 65 kcal
                </StyledMobileText>
                <StyledMobileText>
                  3.6
                </StyledMobileText>
                <StyledMobileText>
                  2.6
                </StyledMobileText>
                <StyledMobileText>
                  5  
                </StyledMobileText>
                <StyledMobileText>
                  4.7
                </StyledMobileText>
                <StyledMobileText>
                  3.2
                </StyledMobileText>
                <StyledMobileText>
                  0.1
                </StyledMobileText>
                <StyledMobileText>
                  0,13 ( 9% VRN)
                </StyledMobileText>
                <StyledMobileText>
                    115 ( 14% VRN )
                </StyledMobileText>
                <StyledMobileText>
                91 ( 13% VRN )
                </StyledMobileText>
                <StyledMobileText>
                21 ( 14% VRN )
                </StyledMobileText>
            </StyledColDiv>
          </StyledMobileNutrionFacts>
          <StyledMobileBgImg image={product.modalMobileImg} productName={product.name}/>

      </StyledColDiv>
       

    </StyledModalContainer>
    )
}

const StyledUnionbox = styled.div<any>`
  position: absolute;
  left: ${props => props.ml ? "-83px" : "-34px"};
`

const IngredientsText = styled.span<any>`
    
    color: #0A4626;
    font-size: 13px;
    line-height: 18px;
    padding-top: ${props => props.pt ? '40px' : '3px'};
    margin-left: 19.5%;
    @media (max-width: 768px) {
      display: none;
    }

`;
const StyledSpanPor = styled.span`
    font-size: 11px;
    line-height: 36px;
    font-weight: 700;
    color:#8FBFAC;
`

const StyledMain = styled.div`

`;

const StyledCloseButton = styled.button`
  border: none;
  background: none;
`;

const StyledTitle = styled.span<any>`
  position: relative;
  cursor: pointer;
  font-size: ${props => props.active ? '14px' : '12px'};
  line-height: 36px;
  color: ${props => props.active ? 'black' : '#474B50'} ;
  font-weight:${props => props.active ? '700' : '400'};
  margin-left: ${props => props.ml &&  '50px'};
  align-items: center;
  display: flex;


`

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
`;
const StyledDivRow = styled.div<any>`
  position: ${props => props.abs && 'absolute'};
  top: 40px;
  display: flex ;
  justify-content: space-between;   
  flex-direction: row;
  align-items: center;
`;

const StyledInfoBox = styled.div<any>`
  display: flex;
  flex: ${props => props.flex && '1'};
  max-width: ${props => props.flex ? '250px' : '210px'};
  width: 100%;
  align-items: ${props => props.center && 'center'};
  padding-left: 26px;
  flex-direction: column;
  background: ${props => props.bg && '#E3E8D4'};
  border-radius: ${props => props.border ? '0' : '36px'};
  padding-top: 20px;
  padding: ${props => props.bg && '20px 48px'};
  margin-right: ${props => props.mr === '40' && '90px'};
  margin-right: ${props => props.mr === '14' && '14px'};
  text-align: ${props => props.center && 'center'};
  border-left: ${props => props.border && '0.8px solid #DFE7E9'};

`;
const StyledGridContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 48px;
    flex: 1;
    margin-top: 22px;
`
const StyledParagraphContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content:center

`;
const StyledSpan = styled.span`
  font-szie: 12px;
  line-height: 18px;
  font-weight: 700;
  color: #0A4626;
`;

const StyledImg = styled.img`
  margin-left: -25px;
  object-fit: contain;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMobileNutrionFacts = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledMobileText = styled.span<any>`
    display: none;
    
    
    @media (max-width: 768px) {
      display: flex;
      font-size: 12px;
      line-height: 11px;
      margin-bottom: ${props => props.bold ? '12px' : '24px'};
      margin-top: ${props => props.bold ? '12px' : '0'};
      font-weight: ${props => props.bold && '700'};
      color: ${props => props.bold && '#8FBFAC'};
      text-align: ${props => props.bold && 'right'};
      margin-right: ${props => props.bold && '56px'};
}
`;

const StyledBoldText = styled.span`
  font-weight: 700;
  font-size: 12px;
  margin-right: 3px;

`

const StyledColDiv = styled.div<any>`
  display: flex;
  flex-direction: column;
  background: ${props => props.bg && '#D8DFC3'};
  border-radius: ${props => props.bg && '10px'};
  justify-content: ${props => props.center && 'space-evenly'};
  width: ${props => props.width && '104px'};
  padding: ${props => props.bg ? '12px 41px' : '12px 0'};
  align-items: ${props => props.center && 'center'};
`;

const StyledMobileBgImg = styled.div<any>`
  display: none;
  @media (max-width: 768px) {
    background-image: url(${(props) => props.image });
    background-size: cover;
    width: 194px;
    height: 162px;
    // margin-left: ${props => props.productName === "leite"  && '-25px'};
    // margin-left: ${props => props.productName === 'biologico' && '-25px'};
    margin: ${props => (props.productName !== "leite" && props.productName !== 'biologico') ? '0 auto' : '0 0 0 -25px' };
    display: flex;
}

`