import React, { useState } from 'react';
import { FaTruckMedical } from "react-icons/fa6";
import { Text } from "../../commons/toolkit/Text";
import { Link } from "../../commons/toolkit/Link";
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";
import { useLogin } from './hooks/useLogin';
import {
  CardLogin,
  Container,
  Form,
  IconContainer,
  ImageContent,
  InputsContainer,
  TextContainer,
  Image
} from "./styles";

export const Login: React.FC = () => {
  const { login } = useLogin(); // Use o hook
  const [formData, setFormData] = useState({ email: '', senha: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData.email, formData.senha); // Chamar o login
  };

  return (
    <Container>
      <ImageContent>
        <Image src='/imgs/gatinho.png' />
      </ImageContent>

      <CardLogin>
        <IconContainer>
          <FaTruckMedical color="#84cae8" size='3rem' />
        </IconContainer>

        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input
              label="E-mail:"
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              label="Senha:"
              type="password"
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            />
          </InputsContainer>

          <Button label="Acessar" size="100%" />
        </Form>

        <TextContainer>
          <Text>Ainda não possui login?</Text>
          <Link label={"Cadastre-se"} href="/cadastro"></Link>
        </TextContainer>
      </CardLogin>
    </Container>
  );
};
