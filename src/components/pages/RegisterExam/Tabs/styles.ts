import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? "#177198" : "#f3fafd")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#000")};
  border-radius: 4px;
  margin-right: 10px;
`;
