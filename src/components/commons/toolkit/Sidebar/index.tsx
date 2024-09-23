import React from "react";

import { FaHeartbeat } from "react-icons/fa";
import { SidebarContainer, Logo, Menu, TopMenu, MenuItemStyle } from "./styles";
import { MenuItem } from "./MenuItem";
import { IoExitOutline } from "react-icons/io5";
import { getMenuItemsByRole } from "./constants";
import { useLogin } from "../../../pages/Login/hooks/useLogin";

interface Props {
  role: string;
}

export const Sidebar: React.FC<Props> = ({ role }) => {
  const menuItems = getMenuItemsByRole(role) || [];

  const { logout } = useLogin();

  // Functions
  function renderMenuItens() {
    return menuItems.map((item, index) => (
      <MenuItem key={index} infosMenu={item}></MenuItem>
    ));
  }

  return (
    <SidebarContainer>
      <TopMenu>
        <Logo>
          <FaHeartbeat />
        </Logo>
        <Menu>{renderMenuItens()}</Menu>
      </TopMenu>
      <MenuItemStyle $justifyContent="center" onClick={logout}>
        <IoExitOutline />
        <p>Sair</p>
      </MenuItemStyle>
    </SidebarContainer>
  );
};
