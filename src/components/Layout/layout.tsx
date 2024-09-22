import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../commons/toolkit/Sidebar";
import { Container, Main } from "./styles";
import { useLogin } from "../pages/Login/hooks/useLogin";

export const Layout = () => {
  const { user, isLoading } = useLogin();
  if(isLoading) return <></>;

  return (
    <Container>
      <Sidebar role={user?.role || ''} />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};