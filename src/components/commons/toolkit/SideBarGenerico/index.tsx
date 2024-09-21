import React from "react";
import { FaHeartbeat } from 'react-icons/fa';
import { IoHomeSharp, IoExitOutline } from "react-icons/io5";
import { FaCalendarAlt, FaCalendarCheck, FaSyringe } from "react-icons/fa";
import { FaUserDoctor, FaUserInjured } from "react-icons/fa6";
import { useLogin } from '../../../pages/Login/hooks/useLogin'; // Ajuste o caminho conforme necessário
import { SidebarContainer, Logo, Menu, MenuItem, TopMenu } from "./styles";

export const SideBarGenerico: React.FC = () => {
  const { user } = useLogin(); 

  const handleLogout = () => {
    console.log("Usuário deslogado");
  };

  return (
    <SidebarContainer>
      <TopMenu>
        <Logo>
          <FaHeartbeat />
        </Logo>
        <Menu>
          <MenuItem><IoHomeSharp /><p>Home</p></MenuItem>

          {user?.isAdmin && (
            <>
              <MenuItem><FaUserDoctor /><p>Admin Dashboard</p></MenuItem>
              <MenuItem><FaCalendarAlt /><p>Gerenciar Usuários</p></MenuItem>
            </>
          )}

          {user?.isPaciente && (
            <>
              <MenuItem><FaUserInjured /><p>Agendar Consulta</p></MenuItem>
              <MenuItem><FaCalendarCheck /><p>Consultas Marcadas</p></MenuItem>
            </>
          )}

          {user?.isDoctor && (
            <>
              <MenuItem><FaSyringe /><p>Exames</p></MenuItem>
              <MenuItem><FaUserDoctor /><p>Perfil do Médico</p></MenuItem>
            </>
          )}
        </Menu>
      </TopMenu>
      <MenuItem $justifyContent="center" onClick={handleLogout}><IoExitOutline /><p>Sair</p></MenuItem>
    </SidebarContainer>
  );
};
