// External Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { MenuItemInfos } from "./types/MenuItemInfos";

// Styles
import { Container } from "./styles";

interface Props {
  infosMenu: MenuItemInfos;
}

export const MenuItem: React.FC<Props> = ({ infosMenu }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(infosMenu.path)}>
      {infosMenu.icon}
      {infosMenu.label}
    </Container>
  );
};
