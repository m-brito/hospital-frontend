// External Libraries
import React from "react";
import { Sidebar } from "../../commons/toolkit/Sidebar";

// Styles
import { Container, Content, Title, Paragraph } from "./styles";

export const Home: React.FC = () => {

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Bem-vindo ao Sistema Hospitalar</Title>
        <Paragraph>Escolha uma opção no menu para começar.</Paragraph>
      </Content>
    </Container>
  );
};
