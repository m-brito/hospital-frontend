// External Libraries
import React, { useEffect } from "react";

// Styles
import { ModalOverlay, ModalContent, CloseButton } from "./styles";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  closeOnClickOutside?: boolean;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  closeOnClickOutside = true,
  width,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (closeOnClickOutside && event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOutsideClick}>
      <ModalContent $width={width}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
