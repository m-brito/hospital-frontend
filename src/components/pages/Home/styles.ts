import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background-color: #F3FAFD;
  height: 100vh;
`;

export const Sidebar = styled.nav`
  width: 250px;
  background-color: #177198;
  padding: 20px;
  height: 100%;
  color: #F3FAFD;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem; 
  color: #F3FAFD; 
  margin-bottom: 30px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 8px 0;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 10px;
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Title = styled.h1`
  font-size: 34px;
`;

export const Paragraph = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;
