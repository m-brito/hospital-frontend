// External Libraries
import React from "react";

// Components
import { Text } from "../../commons/toolkit/Text";

// Hooks
import { useLogin } from "./hooks/useLogin";

// Styles
import { CardLogin, Container, ImageContent } from "./styles";
import { Input } from "../../commons/toolkit/Input";

export const Login: React.FC = () => {
  // Hooks
  const {} = useLogin({});

  return (
    <Container>
      <ImageContent>

      </ImageContent>
      
      <CardLogin>
        <Text fontSize="2rem">Bem vindo</Text>
        <Input label="E-mail:" type="text"></Input>
        <Input label="Senha:" type="password" />
      </CardLogin>
    </Container>
  );
};
