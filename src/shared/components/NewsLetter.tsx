import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import styled from "styled-components";
import { PrimaryButton } from "./Buttons";

const StyledBackGroundImg = styled.div`
  width: 100%;
  height: 440px;
  background-image: url("./images/Newsletter.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const StyledTitle = styled.h3`
  font-family: "Prompt", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 52px;
  color: #ffffff;
  text-align: left;
`;
const StyledText = styled.p`
  font-family: "Prompt", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  text-align: left;
`;
const StyledPrimaryButton = styled(PrimaryButton)`
  background: #8fbfac;
`;
const StyledFormControl = styled(FormControl)`
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  border: 0;
  border-radius: 53px;
`;
const NewsLetter = () => {
  return (
    <>
      <StyledBackGroundImg>
        <Container>
          <Row>
            <Col lg={4}>
              <StyledTitle>Subscreva a nossa newsletter</StyledTitle>
              <StyledText>
                Receba as últimas novidades dos laticínios que dão mais Açores à
                sua vida
              </StyledText>
            </Col>
            <Col className="offset-4" lg={4}>
              <InputGroup className="mb-3">
                <StyledFormControl
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="basic-addon2"
                />
                <StyledPrimaryButton id="button-addon2">
                  subscrever
                </StyledPrimaryButton>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </StyledBackGroundImg>
    </>
  );
};
export default NewsLetter;
