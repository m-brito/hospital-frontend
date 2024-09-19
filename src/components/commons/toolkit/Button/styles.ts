import styled from "styled-components";

interface Props {
  $backgroundColor: string;
  $fontColor: string;
  $fontSize: string;
  $size: string;
}

export const Container = styled.button<Props>`
  width: ${({ $size }) => $size};

  cursor: pointer;

  padding: 1rem;

  border-radius: 0.5rem;

  border: unset;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $fontColor }) => $fontColor};
`;
