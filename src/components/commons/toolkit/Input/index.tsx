// External Libraries
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Styles
import { Container, StyledInput, ToggleIcon } from "./styles";
import { Text } from "../Text";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // Constants
  const inputType =
    props.type === "password" && showPassword ? "text" : props.type;

  // Functions
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container>
      <Text>{label}</Text>

      <StyledInput {...props} type={inputType} />
      
      {props.type === "password" && (
        <ToggleIcon onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </ToggleIcon>
      )}
    </Container>
  );
};
