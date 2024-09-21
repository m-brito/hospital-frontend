import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f8f9fa;
  height: 100vh;
  padding: 20px;
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Menu = styled.div`
  width: 100%;
`;

export const MenuItem = styled.div<{ $justifyContent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #e9ecef;
  }

  p {
    margin-left: 10px;
  }
`;
