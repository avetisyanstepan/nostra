import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
// import { circleSlogan, LeafIcon, PlusCircleIcon } from "../../../assets/icons";
import { SecondaryButton } from "../../../shared/components/Buttons";

const StyledCowWrapper = styled.div`
  margin-top: 100px;
`;
const StyledText = styled.p`
  font-family: "Prompt", sans-serif !important;
  font-weight: 300;
  font-size: 22px;
  line-height: 32px;
  color: #152e1f;
  text-align: left;
`;
const StyledTitle = styled.p`
  font-family: "Prompt", sans-serif !important;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  color: #0a4626;
  text-align: left;
`;
// const Styledimg = styled.img`
//   font-family: "Prompt", sans-serif !important;
//   font-weight: bold;
//   font-size: 42px;
//   line-height: 52px;
//   color: #0c6937;
// `;
// const StyledCircleSlogan = styled(circleSlogan)`
//   position: absolute;
//   right: 22px;
//   top: -64px;
//   path {
//     fill: #ffc700;
//   }
// `;
// const StyledWrapper = styled.div`
//   position: relative;
// `;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledMainTitle = styled.div`
  color: #0a4626;
  font-size: 52px;
  line-height: 26px;
  font-weight: bold;
  font-family: "Prompt", sans-serif !important;
  margin-bottom: 11rem;
`;

const Animals = () => {
  return (
    <StyledCowWrapper>
      <Container>
        <StyledMainTitle>Fazer o bem aos animais</StyledMainTitle>
        <p>
          Acreditamos que o melhor leite do mundo vem de vacas felizes. O que
          faz uma vaca feliz?
        </p>
        <Row className="mt-5">
          <Col
            className="text-left"
            sm={{ order: "last", span: 12 }}
            md={12}
            lg={6}
          >
            <div>
              <ul>
                <div>
                  <li>
                    <h3>Liberdade</h3>
                  </li>
                  <p>
                    As nossas vacas vivem ao ar livre e em comunidade 365 dias
                    por ano. Não vivem em estábulos como na maioria das
                    explorações com regimes intensivos.
                  </p>
                </div>
                <div>
                  <li>
                    <h3> Erva Fresca</h3>
                  </li>
                  <p>
                    Têm uma alimentação natural à base de erva fresca 365 dias
                    por ano, não são alimentadas à base de ração. A pastagem é
                    um método de alimentação natural e sustentável.
                  </p>
                </div>

                <div>
                  <li>
                    <h3>Produtores Certificados </h3>
                  </li>
                  <p>
                    Todos os Produtores do Programa Leite de Vacas Felizes são
                    certificados, sendo o Bem-estar animal um dos principais
                    pilares da certificação.
                  </p>
                </div>
              </ul>
            </div>
          </Col>
          <StyledCol sm={{ order: "last", span: 12 }} md={12} lg={6}>
            <StyledTitle>
              Vacas felizes pastam erva fresca todo o ano
            </StyledTitle>
            <StyledText className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.
            </StyledText>
            <SecondaryButton className="mt-3">saber mais</SecondaryButton>
          </StyledCol>
        </Row>
      </Container>
    </StyledCowWrapper>
  );
};
export default Animals;
