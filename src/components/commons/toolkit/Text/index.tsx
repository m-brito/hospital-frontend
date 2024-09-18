// External Libraries
import React from "react";

// Styles
import { Container } from "./styles";

interface Props {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  children: React.ReactNode;
}

export const Text: React.FC<Props> = ({
  fontSize,
  color,
  fontWeight,
  children
}) => {

  return (
    <Container fontSize={fontSize} color={color} fontWeight={fontWeight}>{children}</Container>
  );
};
