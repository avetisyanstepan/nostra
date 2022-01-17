import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import styled from "styled-components";
// import { LoveToLandIcon } from "../../../assets/icons";
// import { PrimaryButton } from "../../../shared/components/Buttons";

const LoveToLand = () => {
  return (
    <Container className="mt-5">
      {/* <LoveToLandIcon width="100%" className="mt-5" /> */}
      <Row className="mt-5">
        <Col className="col-7">
          <img
            className="img-fluid"
            src="/images/love-to-land-1.png"
            alt="land dirt"
          />
        </Col>
        <Col className="col-5">
          <img
            className="img-fluid"
            src="/images/love-to-land-2.png"
            alt="land products"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default LoveToLand;
