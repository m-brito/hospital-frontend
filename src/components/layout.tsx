import React from "react";
import { Sidebar } from "./commons/toolkit/Sidebar";
import { Outlet } from "react-router-dom";
import { Container } from "./pages/Login/styles";
import { Content } from "./pages/Home/styles";

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};
