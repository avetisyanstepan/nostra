// import { Children, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { CloseIcon } from '../../../assets/icons';


const customStyles = {
  
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#EEF1E5',
     
    },
    overlay: {
      background: "rgba(49, 60, 53, 0.5)"
    }
  };
  Modal.setAppElement('#root');

export const ModalC:React.FC<any> = ({
    product,
    openModal,
    afterOpenModal,
    children,

    close =() => {},
}) => {
    return(
        <StyledMain>
            {children}
            <Modal
            isOpen={openModal}
            onAfterOpen={afterOpenModal}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Example Modal"
            >
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
                      <StyledInfoBox mr={'40'}>
                         <StyledTitle>Energia   (kJ / kcal)</StyledTitle>
                         <StyledTitle>Lípidos   (g)</StyledTitle>
                         <StyledTitle ml={'ml'}>dos quais saturados   (g)</StyledTitle>
                         <StyledTitle>Hidratos de Carbono   (g)</StyledTitle>
                         <StyledTitle  ml={'ml'}>dos quais açúcares   (g)</StyledTitle>
                         <StyledTitle>Proteína   (g)</StyledTitle>
                         <StyledTitle>Sal   (g)</StyledTitle>
                         <StyledTitle>Riboflavina   (mg)</StyledTitle>
                         <StyledTitle>Cálcio   (mg)</StyledTitle>
                         <StyledTitle>Fósforo   (mg)</StyledTitle>
                         <StyledTitle>Iodo   (μg)</StyledTitle>
                      

                      </StyledInfoBox>
                      <StyledInfoBox bg={'green'} mr={'14'} center>
                         <StyledTitle>273 kJ / 65 kcal</StyledTitle>
                         <StyledTitle>3.6</StyledTitle>
                         <StyledTitle>2.6</StyledTitle>
                         <StyledTitle>5</StyledTitle>
                         <StyledTitle>4.7</StyledTitle>
                         <StyledTitle>3.2</StyledTitle>
                         <StyledTitle>0.1</StyledTitle>
                         <StyledTitle>0,13 ( 9% VRN)</StyledTitle>
                         <StyledTitle>115 ( 14% VRN )</StyledTitle>
                         <StyledTitle>91 ( 13% VRN )</StyledTitle>
                         <StyledTitle>21 ( 14% VRN )</StyledTitle>
                      </StyledInfoBox>
                      <StyledInfoBox bg={'green'} center>
                         <StyledTitle>682 kJ / 163 kcal</StyledTitle>
                         <StyledTitle>9</StyledTitle>
                         <StyledTitle>6.5</StyledTitle>
                         <StyledTitle>12.5</StyledTitle>
                         <StyledTitle>11.8</StyledTitle>
                         <StyledTitle>8</StyledTitle>
                         <StyledTitle>0.25</StyledTitle>
                         <StyledTitle>0,33 ( 24% VRN)</StyledTitle>
                         <StyledTitle>288 ( 36% VRN )</StyledTitle>
                         <StyledTitle>228 ( 33% VRN )</StyledTitle>
                         <StyledTitle>53 ( 25% VRN )</StyledTitle>
                      </StyledInfoBox>
                      
                    </StyledGridContainer>
                    
                  </StyledBox>
                  <IngredientsText><StyledBoldText>Ingredientes: </StyledBoldText>{" "}Natas pasteurizadas e sal.</IngredientsText>   

                  <StyledColDiv>
                    <StyledMobileText bold={'bold'}>
                      pro 100ml
                    </StyledMobileText>
                    <StyledMobileNutrionFacts>
                      <StyledColDiv width={'104'}>
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
                      <StyledColDiv bg={'bg'}>
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
            
            </Modal>
      
      </StyledMain>
    )
}

const IngredientsText = styled.span`
    
    color: #0A4626;
    font-size: 13px;
    line-height: 18px;
    padding-top: 40px;
    margin-left: 19.5%;
    @media (max-width: 768px) {
      display: none;
    }

`

const StyledMain = styled.div`

`;

const StyledCloseButton = styled.button`
  border: none;
  background: none;
`;

const StyledTitle = styled.span<any>`
  font-size: 12px;
  line-height: 36px;
  color: #474B50;
  margin-left: ${props => props.ml && '50px'}

`

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
`;
const StyledDivRow = styled.div`
  display: flex ;
  justify-content: space-between;   
  flex-direction: row;
  align-items: center;
`;

const StyledInfoBox = styled.div<any>`
  display: flex;
  flex-direction: column;
  background: ${props => props.bg && '#E3E8D4'};
  border-radius: 36px;
  padding-top: 20px;
  padding: ${props => props.bg && '20px 48px'};
  margin-right: ${props => props.mr === '40' && '90px'};
  margin-right: ${props => props.mr === '14' && '14px'};
  text-align: ${props => props.center && 'center'};;

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
    justify-content: space-between
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
  width: ${props => props.width && '104px'};
  padding: ${props => props.bg && '12px 41px'};
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