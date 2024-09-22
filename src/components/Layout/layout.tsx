import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../commons/toolkit/Sidebar";
import { Container, Main } from "./styles";

export const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
