import Slider from "react-slick";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Arrow, LeftIcon, RightIcon } from "../../../assets/icons";
import { productsData } from "../../../MOCK";
import { useRef } from "react";



const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  padding:18px 14px;
  background-color: white;
  box-shadow: 0px 4px 13px rgba(11, 102, 31, 0.07);
  border-radius: 18px;
  box-sizing: border-box;
  max-width: 231px;
  width: 100%;
  cursor: pointer;

  
  &:hover img{
    transform: scale(1.5);
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    transform: scale(1.5);
    margin-bottom: 110px;
    margin-top: 50px;
  }
  


// `;
const StyledProdctName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #232D22;
`;


const StyledImageContainer = styled.div`
  width:100%;
  height:200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImage = styled.img`


`

const SliderContainer = styled.div`
  // margin-top: 770px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`

const StyledSlider = styled(Slider)`
  display: flex;
  display: block;
  overflow-x: clip;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  width: 100%;

`
const StyledLinkTo = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color:#0C6937;
  text-decoration: none;
  border:none;
  background:none;

  &:hover{
    color: #0A4626;
    font-weight: 700;
  }
`;

const StyledMobileArrowsContainer= styled.div`
    display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    margin-right: 25px;
    margin-top: 44px;
  }

`;

const StyledArrowButton = styled.button`
  border: none;
  background: none;
` 

const StyledDiv = styled.div`
  width: 100%;
`

const ProductsSlide = () => {

  const history = useHistory()
  const slider:React.MutableRefObject<any> = useRef();
  
  const next = () => {
      slider.current.slickNext();
  };
  const previous = () => {
      slider.current.slickPrev();
  }; 

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    initialSlide: 4,
    


    responsive: [
      {
        breakpoint: 1024,
        
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,

        }
      },
    ]
  };
  return (
    <SliderContainer>
      <StyledSlider ref={(c) => (slider.current = c)} {...settings} className="productSlider">
        {
          productsData?.map((product, i) => (
              <StyledProductCard key={`${i}+${product.name}`} onClick={() => history.push(`produtos/${product.linkto}`)}>
                <StyledImageContainer>
                  <StyledImage src={product.imgUrl} />
                </StyledImageContainer>
                <StyledProdctName>
                  {product.name}
                </StyledProdctName>
                <StyledLinkTo >
                    Descobrir {" "}{" "}
                  <Arrow />
                </StyledLinkTo>
              </StyledProductCard>
          ))
        }
      </StyledSlider>
     
      <StyledMobileArrowsContainer>
          <StyledArrowButton>
            <LeftIcon  onClick={previous}/>
          </StyledArrowButton>
          <StyledArrowButton>
            <RightIcon onClick={next}/>
          </StyledArrowButton>
      </StyledMobileArrowsContainer>

    </SliderContainer>
  );
};
export default ProductsSlide;
