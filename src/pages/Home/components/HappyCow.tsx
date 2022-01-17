import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { HappyCowProgramIcon } from "../../../assets/icons";
import { SecondaryButton } from "../../../shared/components/Buttons";

const StyledCowWrapper = styled.div`
  margin-top: 100px;
`;
const StyledText = styled.p`
  text-align: left;
`;
const Styledimg = styled.img`
  font-family: "Prompt", sans-serif !important;
  font-weight: bold;
  font-size: 42px;
  line-height: 52px;
  color: #0c6937;
`;
const StyledCircleSlogan = styled(HappyCowProgramIcon)`
  position: absolute;
  left: 0;
  top: -64px;
`;
const StyledWrapper = styled.div`
  position: relative;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
// const StyledMainTitle = styled.div`
//   color: #0a4626;
//   font-size: 40px;
//   line-height: 42px;
//   font-weight: bold;
//   font-family: "Prompt", sans-serif !important;
//   align-self: center;
//   text-align: center;
// `;

const HappyCow = () => {
  return (
    <StyledCowWrapper>
      <Container>
        <Row className="mt-5">
          <StyledCol lg={{ order: "last", span: 6 }}  >
            <h2 className="mt-3 "> Programa leite de vacas felizes</h2>

            <StyledText className="mt-3 p-text">
              O Programa Leite de Vacas Felizes garante a pastagem 365 dias com
              as melhores práticas de sustentabilidade ambiental, social e de
              bem-estar animal. Todos os produtores são certificados e
              recompensados, assegurando o seu desenvolvimento e contribuindo
              para um futuro melhor.
            </StyledText>
            <SecondaryButton className="mt-3">saber mais</SecondaryButton>
          </StyledCol>
          <Col lg={{ order: "first", span: 6}} >
            <StyledWrapper>
              <StyledCircleSlogan />
              <Styledimg
                className="img-fluid"
                src={`./images/happy-cow-1.png`}
                alt="cow"
              />
            </StyledWrapper>
          </Col>
        </Row>
      </Container>
    </StyledCowWrapper>
  );
};
export default HappyCow;
