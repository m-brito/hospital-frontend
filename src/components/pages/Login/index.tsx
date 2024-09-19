// External Libraries
import React from "react";
import { FaTruckMedical } from "react-icons/fa6";

// Components
import { Text } from "../../commons/toolkit/Text";
import { Link } from "../../commons/toolkit/Link";
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";

// Hooks
import { useLogin } from "./hooks/useLogin";

// Styles
import {
  CardLogin,
  Container,
  Form,
  IconContainer,
  ImageContent,
  InputsContainer,
  TextContainer,
} from "./styles";

export const Login: React.FC = () => {
  // Hooks
  const {} = useLogin({});

  return (
    <Container>
      <ImageContent></ImageContent>

      <CardLogin>
        <IconContainer>
          <FaTruckMedical color="#84cae8" size='3rem' />
        </IconContainer>

       
        <Form>
          <InputsContainer>
            <Input
              label="E-mail:"
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
            />
            <Input label="Senha:" type="password" />
          </InputsContainer>

          <Button label="Acessar" size="100%" />
        </Form>

        <TextContainer>
          <Text>Ainda não possui login?</Text>
          <Link label={"Cadastre-se"} href={""}></Link>
        </TextContainer>
      </CardLogin>
    </Container>
  );
};
