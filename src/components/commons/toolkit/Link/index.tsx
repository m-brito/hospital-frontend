// External Libraries
import React from "react";

// Styles
import { Container } from "./styles";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  color?: string;
}

export const Link: React.FC<LinkProps> = ({
  label,
  href,
  color = "#84cae8",
  ...props
}) => {
  return (
    <Container href={href} color={color} {...props} $color={color}>
      {label}
    </Container>
  );
};
