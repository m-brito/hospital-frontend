import styled from "styled-components";

interface Props {
    $justifyContent?: string;
}

export const SidebarContainer = styled.div`
  width: 270px;
  background-color: #177198;
  padding: 20px;
  height: 100%;
  color: #F3FAFD;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TopMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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

export const MenuItem = styled.li<Props>`
  margin: 8px 0;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 10px;

  justify-content: ${({$justifyContent}) => $justifyContent ? $justifyContent : "normal"};
`;

