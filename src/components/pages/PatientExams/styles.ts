import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;