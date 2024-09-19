// External Libraries
import React from "react";
import { FaTruckMedical } from "react-icons/fa6";

// Components
import { Link } from "../../commons/toolkit/Link";
import { Text } from "../../commons/toolkit/Text";
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";

// Hooks
import { useSignUp } from "./hooks/useSignUp";

// Styles
import {
  CardLogin,
  Container,
  Form,
  IconContainer,
  ImageContent,
  InputsContainer,
  TextContainer,
  Image,
} from "./styles";

interface Props {
  // Props
}

export const SignUp: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Hooks

  return (
    <Container>
      <CardLogin>
        <IconContainer>
          <FaTruckMedical color="#84cae8" size="3rem" />
        </IconContainer>

        <Form>
          <InputsContainer>
            <Input
              label="Nome:"
              type="text"
              name="nome"
              placeholder="Digite seu nome"
            />

            <Input
              label="Data de nascimento:"
              type="date"
              name="data_nascimento"
              placeholder="Digite seu nome"
            />

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
          <Text>Já possui login?</Text>
          <Link label={"Acesse"} href={""}></Link>
        </TextContainer>
      </CardLogin>

      <ImageContent>
        <Image src="/imgs/gatinhobochechudo.png" />
      </ImageContent>
    </Container>
  );
};
