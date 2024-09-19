// External Libraries
import React from "react";

// Styles
import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor?: string;
  fontColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "#85cbe9",
  fontColor = "#ffff",
  ...props
}) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $fontColor={fontColor}
      {...props}
    >
      {label}
    </Container>
  );
};
