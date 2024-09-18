// External Libraries
import React from "react";
import { FaHeartbeat } from 'react-icons/fa';
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa6";









// Components
import { Text } from "../../commons/toolkit/Text";

// Styles
import { Container, Sidebar, Logo, Menu, MenuItem, Content, Title, Paragraph } from "./styles";
import { Input } from "../../commons/toolkit/Input";

export const Home: React.FC = () => {

  return (
    <Container>
      <Sidebar>
        <Logo>
          <FaHeartbeat /> {/* Ícone do hospital */}
        </Logo>
        <Menu>
          <MenuItem><IoHomeSharp /><p>Home</p></MenuItem>
          <MenuItem><FaCalendarAlt /><p>Agendar Consulta</p></MenuItem>
          <MenuItem><FaCalendarCheck /><p>Consultas Marcadas</p></MenuItem>
          <MenuItem><FaSyringe /><p>Exames</p></MenuItem>
          <MenuItem><FaBell /><p>Notificações</p></MenuItem>
          <MenuItem><FaUserInjured /><p>Perfil do Usuário</p></MenuItem>

          
        </Menu>
      </Sidebar>

      <Content>
        <Title>Bem-vindo ao Sistema Hospitalar</Title>
        <Paragraph>Escolha uma opção no menu para começar.</Paragraph>
      </Content>
    </Container>
  );
};
