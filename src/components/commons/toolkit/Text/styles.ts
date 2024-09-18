import styled from "styled-components";

interface Props {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}


export const Container = styled.p<Props>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: ${({ color }) => (color ? color : "#000")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
`;
