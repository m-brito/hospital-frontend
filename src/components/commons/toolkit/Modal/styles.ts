import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

interface ModalContentProps {
  $width?: string;
}

export const ModalContent = styled.div<ModalContentProps>`
  background-color: #f3fafd;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  animation: ${fadeIn} 0.3s ease-in-out;
  box-sizing: border-box;

  width: ${({ $width }) => $width || "80%"};
  max-width: 90%;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
  }
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

export const ModalTitle = styled.h2`
  margin: 0;
  color: #177198;
  `;

interface ModalFooterProps {
  $direction?: "row" | "column";
  $alignItems?: "flex-start" | "flex-end" | "center";
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
}

export const ModalFooter = styled.div<ModalFooterProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  gap: 10px;
`;
