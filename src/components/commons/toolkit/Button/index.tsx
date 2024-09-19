// External Libraries
import React from "react";

// Styles
import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  size?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "#85cbe9",
  fontColor = "#ffff",
  fontSize = '1rem',
  size = 'fit-content',
  ...props
}) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $fontColor={fontColor}
      $size={size}
      $fontSize={fontSize}
      {...props}
    >
      {label}
    </Container>
  );
};
