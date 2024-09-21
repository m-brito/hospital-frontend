// External Libraries
import React from "react";

// Components
import { MenuItemInfos } from "./types/MenuItemInfos";

// Styles
import { Container } from "./styles";


interface Props {
  infosMenu: MenuItemInfos;
}

export const MenuItem: React.FC<Props> = ({ infosMenu }) => {
  return (
    <Container onClick={infosMenu.onClick}>
      {infosMenu.icon}
      {infosMenu.label}
    </Container>
  );
};
