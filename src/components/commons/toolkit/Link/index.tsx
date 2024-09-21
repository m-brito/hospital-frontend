// External Libraries
import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
    <Container as={RouterLink} to={href} color={color} {...props} $color={color}>
      {label}
    </Container>
  );
};
