import React, { useState } from 'react';
import { FaTruckMedical } from "react-icons/fa6";
import { Text } from "../../commons/toolkit/Text";
import { Link } from "../../commons/toolkit/Link";
import { Link as RouterLink } from 'react-router-dom';
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
  const { login } = useLogin(); // Usa o hook de login
  const [formData, setFormData] = useState({ email: '', senha: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData.email, formData.senha); // Chama a função login
  };

  return (
    <Container>
      <ImageContent>
        <Image src='/imgs/gatinho.png' alt="Gatinho" />
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
          <RouterLink to="/signup">Cadastre-se</RouterLink> 
        </TextContainer>
      </CardLogin>
    </Container>
  );
};
