import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { PlusCircleIcon } from "../../../assets/icons";
import { useQuery } from "react-query";
import { getDoingGood } from "../../../shared/apis/doGood";
import { DoGood } from "../../../shared/domains";
// import { baseURL, getApi } from "../../../shared/apis/apiRoot";
const StyledMountainImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;
  @media (min-width: 992px) {
    background-size: cover;

    background-image: url("./images/do-good-bg.png");
    background-repeat: no-repeat;
    background-position: center;
    padding: 0 110px;
  }
`;

const StyledKnowMoreContainer = styled.div`
  height: 295px;
  width: 100%;
  padding: 15px 20px;
  /* background-color: red; */
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledKnowMoreTitle = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
`;
const StyledKnowMoreBtn = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-family: "Prompt", sans-serif !important;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  i {
    margin-left: 10px;
  }
`;
// const StyledMainTitle = styled.div`
//   color: #0a4626;
//   font-size: 32px;
//   line-height: 42px;
//   font-weight: bold;
//   font-family: "Prompt", sans-serif !important;
//   text-align: left;
// `;

interface DoGoodprops {
  good: DoGood;
}
const KnowMore: FC<DoGoodprops> = ({ good }) => {
  return (
    <StyledKnowMoreContainer
      style={{
        backgroundImage: `url(${"http://localhost:8082" + good.image?.url})`,
      }}
    >
      <StyledKnowMoreTitle>{good.Title}</StyledKnowMoreTitle>
      <StyledKnowMoreBtn>
        saber mais
        <i>
          <PlusCircleIcon />
        </i>
      </StyledKnowMoreBtn>
    </StyledKnowMoreContainer>
  );
};

const MountainBlock = () => {
  const { data: doGood } = useQuery("doGood", getDoingGood);
  return (
    <Container fluid>
      <StyledMountainImg>
        <Row className="mt-5">
          <Col sm={12} md={12} lg={4}>
            <h2>Fazer o bem</h2>
            <p className="mt-3 p-text">
              A nossa missão é fazer o bem: fazer o bem para os nossos animais,
              fazer o bem para os nossos produtores, fazer o bem para a nossa
              economia, fazer o bem para o nosso planeta. Quando escolhe um
              produto Terra Nostra, tem a garantia que está a fazer o bem por
              todos nós.
            </p>
          </Col>
          <Col className="offset-lg-1" sm={12} md={12} lg={6}>
            <div>
              <Row className="mb-3 justify-content-end">
                {doGood?.map((good) => (
                  <Col className="mb-3" key={good.id} sm={12} md={12} xl={5}>
                    <KnowMore key={good.id} good={good} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </StyledMountainImg>
    </Container>
  );
};
export default MountainBlock;
