// External Libraries
import React from "react";
import { Sidebar } from "../../commons/toolkit/Sidebar";

// Styles
import { Container, Content, Title, Paragraph } from "./styles";

export const Home = () => {

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Bem-vindo ao Sistema Hospitalar</Title>
        <Paragraph>Escolha uma opção no menu lateral para começar.</Paragraph>
      </Content>
    </Container>
  );
};
