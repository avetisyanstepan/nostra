import { useEffect, useState } from "react";
import styled from "styled-components";
import { AkarIcon, PlusIcon } from "../../../assets/icons";
import { ModalC } from "../../../shared/components/Modal";
import { NutrionFacts } from "./NutrionFacts";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const StyledProductContainer = styled.div<any>`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    border-bottom: 2px solid #0A4626;
    width: ${props => props.prod === 'queijo' && '100%'};
    width: ${props => props.prod === 'leite' && '100%'};
    gap: ${props => props.gap === 'biologico' && '60px'};
    margin: 0 auto;
    margin-bottom: 105px;
    justify-content:center;

    @media (max-width: 768px) {
        gap: 0;
      } 

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
    position: relative;

    margin-left: ${props => props.mr && '60px'};
    margin-top: ${props => props.mr && '43px'};
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
const StyledSpan = styled.span<any>`
    font-family: "Prompt", sans-serif !important;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    color: #0C6937;
    margin-right: ${props => props.mr && '10px'};
`


const StyledProductBox = styled.div<any>`  
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: ${props => props.active === 'BARRA' ? "620px" : "1067px"};
    width: ${props => props.active === 'RALADO' && "270px" };
    width: ${props => props.active === 'BOLA' && "270px" };

    align-items: flex-end;
    width: ${props => props.minSlider === 'leite' && '100%'};
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

const StyledMenuSlidersButton = styled.button<any>`
        cursor: pointer;
        border: none;
        otuline: none;
        background: ${ props  => props.active === props.activeButton ? '#0A4626' : 'rgba(10, 70, 38, 0.3)'};
        text-decoration: none;
        border-radius: 100px;
        font-size: 12px;
        line-height: 12px;
        padding: 8px 24px;
        color: white;

`

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
    
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 42px;
        margin-top: 20px;

      } 
`;

const StyledProductText = styled.p`
    font-family: "Prompt", sans-serif !important;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
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
      max-width: 544px;
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

const StyledSliderImg = styled.img<any>`
    transform:  ${props => props.activeColor && "scale(1.15)"};
    object-fit: none;
    display: flex;
    @media (max-width: 768px) {
        height: ${props => props.nutrionFacts && "53px"};
        transform: none;
        padding-top: 0;
        margin:0;
        width: 100%;
        max-height: 171px;
        max-width: 193px;
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
    align-items: center;

    @media (max-width: 768px) {
        // padding: 0 60px;

    } 

`;

const StyledMenuSlider = styled.div`
    display: flex;
    max-width: 462px;
    widht: 100%;
    margin: 0 auto;
    gap: 8px;
    justify-content: space-between;
    margin-bottom: 71px;


    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;

    } 
`

const StyledSliderImgBox = styled.div<any>`
    display: flex;
    justify-content: center;
    height: ${props => props.prodN === 'queijo' ?'132px' : 'auto'};



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
`;

const StyledNutrionFactsEcoponto =  styled.div<any>`

    position: absolute;
    bottom: ${props => props.prod === 'manteiga' && '125px'};
    left: ${props => props.prod === 'manteiga' && '15px'};
    bottom: ${props => props.prod === 'queijo' && '65px'};
    top: ${props => props.prod === 'snack' && '105px'};
    left: ${props => props.prod === 'snack' && '80px'};
    left: ${props => props.prod2 === 'snack' && '-32px'};
    top: ${props => props.prod2 === 'snack' && '80px'};


    // left: 15px;

`





export const ProductNutrionFacts:React.FC<any> = ({product}) => {
    const [active, setActive] = useState<any>(product[0].product[0].name);
    const [showModal, setShowModal] = useState(false);
    const [produc, setProduc] = useState(product[0].product)
    const [activeMenu, setActiveMenu] = useState('TODOS');
    const [menuSliderData] = useState(['TODOS', 'FATIAS', 'BOLA', 'BARRA', 'RALADO']);
    const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: activeMenu ==='TODOS' || activeMenu ==='FATIAS' ? 4 : produc.length,
    slidesToScroll: 1,
    initialSlide:0,
    autoplay: product[0].product.length <= 4 ? false : false,
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

        }
      },
    ]
  };

  useEffect(() => {
    setProduc(product[0].product.filter((item:any) => item.type === activeMenu))
  }, [activeMenu]);

  
    return (
        <StyledMainContainer>
            {
                product[0].name === 'queijo' && 
                <StyledMenuSlider>
                    {
                    menuSliderData.map((item => (
                        <StyledMenuSlidersButton active={item} activeButton ={activeMenu} onClick={() => setActiveMenu(item)}>
                            {item}
                        </StyledMenuSlidersButton>
                    
                    )))
                    }
                </StyledMenuSlider>
            }
            
            <StyledProductBox minSlider={product[0].name} active={activeMenu}>
                    {
                        product[0].product.length >= 4
                        ?   
                            <StyledProductContainer prod={product[0].name}>
                                <StyledSlider {...settings} >
                                    {
                                           produc.map((prod : any, i: string) => (
                                            <SyledSliderContainer activeColor={active === prod.name} key={`${i}+${prod.name}`}>
                                                <StyledSliderImgBox prodN={product[0].name} >
                                                    <StyledSliderImg  src={prod.imgUrl} activeColor={active === prod.name}/>
                                                </StyledSliderImgBox>
                                                <StyledDivCol>
                                                    <StyledLink onClick={() => setActive(prod.name)} activeColor={active === prod.name} >{prod.name}</StyledLink>
                                                </StyledDivCol>
                                            </SyledSliderContainer>
                                        ))
                                    }
                                    {
                                        activeMenu === "TODOS" && 

                                        product[0].product.map((prod : any, i: string) => (
                                            <SyledSliderContainer activeColor={active === prod.name} key={`${i}+${prod.name}`}>
                                                <StyledSliderImgBox prodN={product[0].name}>
                                                    <StyledSliderImg   src={prod.imgUrl} activeColor={active === prod.name}/>
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
                            <StyledProductContainer gap={product[0].name} >
                                    {
                                          product[0].product.map((prod : any, i: string) => (
                                            <SyledSliderContainer activeColor={active === prod.name} key={`${i}+${prod.name}`}>
                                                <StyledSliderImgBox>
                                                    <StyledSliderImg   mob src={prod.imgUrl} activeColor={active === prod.name}/>
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
                        {active === 'Inteiro' && <StyledImg  src={product[0].productBuyImgUrl}/>}
                        {active === 'Magro' && <StyledImg  src='/images/MeioGrande.png'/>}
                        {active === 'Meio-Gordo' && <StyledImg  src='/images/Magro.png'/>}
                        {active === 'Biológico' && <StyledImg  src='/images/bioligico1.png'/>}
                        {active === 'Bola' && <StyledImg  src='/images/Bola.png'/>}
                        {active === 'Barra' && <StyledImg  src='/images/barra1.png'/>}
                        {active === 'Barra light' && <StyledImg  src='/images/barra2.png'/>}
                        {active === 'Ralado' && <StyledImg  src='/images/ralada1.png'/>}
                        {active === 'Fatias Biológico' && <StyledImg  src='/images/bioligico3.png'/>}
                        {active === 'Fatias Light' && <StyledImg  src='/images/light.png'/>}
                        {active === 'Fatias Original' && <StyledImg  src={product[0].productBuyImgUrl} />}
                        {active === 'Fatias Curado' && <StyledImg  src='/images/curado.png'/>}
                        {active === 'Fatias Proteína' && <StyledImg  src='/images/proteina.png'/>}
                        {active === 'Manteiga com Sal' && <StyledImg  src={product[0].productBuyImgUrl} />}
                        {active === 'Manteiga sem Sal' && <StyledImg  src='/images/manteiga2.png'/>}
                        {active === 'Snack Queijo, Nozes e Uvas Passas' && <StyledImg  src={product[0].productBuyImgUrl} />}
                        {active === 'Leite de Pastagem Biológico' && <StyledImg  src='/images/bioligico1.png'/>}
                        {active === 'Fatias de Queijo de Pastagem Biológico' && <StyledImg mob src='/images/bioligico3.png'/>}


                        



                        <StyledBuyButton>Comprar <AkarIcon /></StyledBuyButton>
                    </StyledImgContainer>
                    <StyledContainerNutrionFacts>
                            {
                                product[0].nutrionFacts.length > 1 
                                ?
                                product[0].nutrionFacts.map((prod: any, i: string) => (
                                    <NutrionFacts key={`${i}+${prod.desc}`} prod={prod}/>
                                ))
                                : 
                                <StyledNutrionFactsEcoponto prod={ product[0].name}>
                                    {
                                        product[0].nutrionFacts.map((prod: any, i: string) => (
                                            <NutrionFacts key={`${i}+${prod.desc}`} prod={prod}/>
                                        ))
                                    }
                                    {
                                        product[0]?.tooltip2 && 

                                        <StyledNutrionFactsEcoponto prod2={ product[0].name}>
                                            {
                                                product[0]?.tooltip2.map((prod: any, i: string) => (
                                                    <NutrionFacts key={`${i}+${prod.desc}`} prod={prod}/>
                                                ))
                                            }
                                        </StyledNutrionFactsEcoponto>
                                    
                                    }
                                   
                                   
                                </StyledNutrionFactsEcoponto>
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
                            <StyledButton onClick={() => setShowModal(true)}>
                                <StyledSpan mr>Ver declaração nutricional / Lista de ingredientes</StyledSpan>
                                <PlusIcon />
                            </StyledButton>
                        </ModalC >
                    </StyledBox>
                </StyledDivCol>
            </StyledDivRow>
        </StyledMainContainer>
        
    )
}