import React from "react";
import { FaHeartbeat } from 'react-icons/fa';
import { SidebarContainer, Logo, Menu,  TopMenu, MenuItemStyle} from "./styles";
import { MENU_ITEMS_BY_ROLE } from "./constants/menuItemsByRole";
import { MenuItem } from "./MenuItem";
import { IoExitOutline } from "react-icons/io5";
interface Props {
  role: string
}

export const Sidebar: React.FC<Props> = ({role}) => {

  const menuItems = MENU_ITEMS_BY_ROLE[role] || [];

  // Functions
  function renderMenuItens(){
    return menuItems.map((item, index) => <MenuItem key={index} infosMenu={item}></MenuItem>)
  }

  return (
    <SidebarContainer>
      <TopMenu>
        <Logo>
          <FaHeartbeat />
        </Logo>
        <Menu>
        {renderMenuItens()}
        </Menu>
      </TopMenu>
      <MenuItemStyle $justifyContent="center"><IoExitOutline /><p>Sair</p></MenuItemStyle>

    </SidebarContainer>
  );
};