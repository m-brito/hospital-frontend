import React from "react";
import { FaHeartbeat } from 'react-icons/fa';
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarAlt, FaCalendarCheck, FaSyringe } from "react-icons/fa";
import { FaUserDoctor, FaUserInjured } from "react-icons/fa6";

import { SidebarContainer, Logo, Menu, MenuItem } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>
        <FaHeartbeat /> 
      </Logo>
      <Menu>
        <MenuItem><IoHomeSharp /><p>Home</p></MenuItem>
        <MenuItem><FaCalendarAlt /><p>Agendar Consulta</p></MenuItem>
        <MenuItem><FaCalendarCheck /><p>Consultas Marcadas</p></MenuItem>
        <MenuItem><FaSyringe /><p>Exames</p></MenuItem>
        <MenuItem><FaUserDoctor /><p>Médicos</p></MenuItem>
        <MenuItem><FaUserInjured /><p>Perfil do Usuário</p></MenuItem>
      </Menu>
    </SidebarContainer>
  );
};