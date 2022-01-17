import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
// import { circleSlogan, LeafIcon } from "../../../assets/icons";
import { PrimaryButton } from "../../../shared/components/Buttons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useQuery } from "react-query";
import { getProducts } from "../../../shared/apis/products";
import { Product } from "../../../shared/domains";
const StyledContainer = styled(Container)`
 
  margin-top: 200px;
`;
const StyledProductCard = styled.div`
  background-color: white;
  box-shadow: -1.5px 4px 35px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  height: 324px;
  width: 305px;
`;
const StyledProdctName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #152e1f;
`;
const StyledProductText = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: #232d22;
`;
const StyledTitle = styled.div`
  font-family: "Prompt", sans-serif !important;
  font-weight: bold;
  font-size: 42px;
  line-height: 52px;
  color: #152e1f;
`;
const StyledText = styled.div`
  font-family: "Prompt", sans-serif !important;
  font-weight: 300;
  font-size: 22px;
  line-height: 36px;
  color: #152e1f;
`;
const StyledPrimaryButton = styled(PrimaryButton)`
  background: #8fbfac;
`;
const StyledSliderWrapper = styled(Col)`
 position: relative;
 width: 100%;
 @media (min-width: 992px) {
  position: absolute;
 right: 0;
 width: 60%;
  }
 
`;
const StyledSplide = styled(Splide)`
  .splide__list {
    display: flex;
    list-style-type: none;
    align-items: flex-end;
  }
`;
const StyledSlide = styled(SplideSlide)`
  margin: 0 18px;
  width: auto !important;
  &.is-active {
    .productCard{
      zoom: 1.10;
    }
  }
`;

interface ProudctCardProps {
  product: Product;
}

const ProductsCard: FC<ProudctCardProps> = ({ product }) => {
  return (
    <StyledProductCard className="productCard"> 
      <img src="" alt="" />
      <StyledProdctName>{product.title}</StyledProdctName>
      <StyledProductText>{product.description}</StyledProductText>
    </StyledProductCard>
  );
};
const Products = () => {
  const { data: products } = useQuery("products", getProducts);
  return (
    <StyledContainer>
      <Row>
        <Col lg={3} className="text-start">
          <StyledTitle>Produtos</StyledTitle>
          <StyledText className="mt-3">
            Os nossos produtos vêm de vacas felizes que vivem ao ar livre e
            pastam erva fresca 365 dias por ano.
          </StyledText>
          <StyledPrimaryButton className="mt-4">saber mais</StyledPrimaryButton>
        </Col>
        <StyledSliderWrapper className="overflow-hidden offset-lg-1" lg={8}>
         
  <StyledSplide
            options={{
              autoWidth: true,
              type: "loop",
              perPage: 1,
              perMove: 1,
              gap: "18px",
              pagination: false,
              padding: {
                left: 40,
                right: 40,
              },
            }}
          >
            {products?.map((product) => (
              <StyledSlide>
                <ProductsCard key={product.id} product={product} />
              </StyledSlide>
            ))}
          </StyledSplide>
         
        </StyledSliderWrapper>
      </Row>
    </StyledContainer>
  );
};
export default Products;
