import styled from "styled-components";

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
