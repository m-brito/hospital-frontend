import styled from "styled-components";

interface Props {
  $backgroundColor: string;
  $fontColor: string;
}

export const Container = styled.button<Props>`
  cursor: pointer;
  
  padding: 1rem;

  border-radius: 1rem;

  border: unset;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $fontColor }) => $fontColor};
`;
