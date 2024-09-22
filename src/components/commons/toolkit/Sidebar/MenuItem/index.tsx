// External Libraries
import React from "react";

// Components
import { MenuItemInfos } from "./types/MenuItemInfos";

// Styles
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";


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
