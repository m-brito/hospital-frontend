import styled from "styled-components";

interface Props {
  $color: string;
}

export const Container = styled.a<Props>`
  color: ${({ $color }) => $color};

  text-decoration: none;
  font-weight: bold;
  
  cursor: pointer;
`;
