import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  min-height: 100vh;

  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  background-color: #cce8f5;
`;

export const ImageContent = styled.div``;

export const CardLogin = styled.div`
  border-radius: 1.5rem;

  min-height: calc(100vh - 2rem);
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
