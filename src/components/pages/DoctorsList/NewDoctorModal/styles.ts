import styled from "styled-components";

export const Container = styled.div``;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #177198;
`;

interface ModalFooterProps {
  direction?: "row" | "column";
  alignItems?: "flex-start" | "flex-end" | "center";
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
}

export const ModalFooter = styled.div<ModalFooterProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  gap: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #177198;
  transition: color 0.2s ease;

  &:hover {
    color: #0d5a75;
  }
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

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  width: fit-content;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;

  gap: 0.25rem;
`;

export const IconContainer = styled.div`
  min-width: fit-content;
  max-width: fit-content;

  min-height: fit-content;
  max-height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img``;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;
