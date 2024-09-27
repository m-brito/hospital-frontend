import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f3fafd;
  height: 100vh;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
`;

export const Title = styled.h1``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #177198;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;

  height: 35px;

  &:hover {
    background-color: #155b73;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  color: #177198;
  border: 1px solid #177198;
  border-radius: 4px;

  height: 35px;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    background-color: #177198;
    color: white;
  }
`;

interface FlexProps {
  $direction?: "row" | "column";
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  $alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $gap?: string;
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "stretch"};
  gap: ${(props) => props.$gap || "0"};
  flex-wrap: ${(props) => props.$wrap || "nowrap"};
`;


