import React, { FC } from "react";
import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

const StyledPrimaryButton = styled(Button)`
  border-radius: 53px;
  background: rgba(255, 255, 255, 0.15);
  padding: 15px 36px;
  backdrop-filter: blur(12px);
  /* filter: blur(12px); */
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: "Prompt", sans-serif !important;
  border: none;
`;

const StyledSecondaryButton = styled(Button)`
  border-radius: 53px;
  background: #ffc700;
  padding: 15px 36px;
  backdrop-filter: blur(12px);
  /* filter: blur(12px); */
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: "Prompt", sans-serif !important;
  border: none;
`;

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
};

export const SecondaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledSecondaryButton {...props}>{children}</StyledSecondaryButton>;
};
