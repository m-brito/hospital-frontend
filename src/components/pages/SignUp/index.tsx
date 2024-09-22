import React, { useState } from "react";
import { FaTruckMedical } from "react-icons/fa6";
import { Link as RouterLink } from 'react-router-dom';
import { Text } from "../../commons/toolkit/Text";
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";
import { useSignUp } from "./hooks/useSignUp";
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
import { FormInfos } from "./types";

const SignUp: React.FC = () => {
  const { signUp, error } = useSignUp(); 
  const [formData, setFormData] = useState<FormInfos>({
    name: '',
    email: '',
    password: '',
    birthdate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(formData); 
  };

  return (
    <Container>
      <CardLogin>
        <IconContainer>
          <FaTruckMedical color="#84cae8" size="3rem" />
        </IconContainer>

        {error && <p style={{ color: 'red' }}>{error}</p>} 

        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input
              label="Nome:"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              label="Data de nascimento:"
              type="date"
              name="birthdate"
              onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
            />
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
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </InputsContainer>

          <Button label="Cadastrar" size="100%" />
        </Form>

        <TextContainer>
          <Text>Já possui login?</Text>
          <RouterLink to="/">Acesse</RouterLink> 
        </TextContainer>

      </CardLogin>

      <ImageContent>
        <Image src="/imgs/gatinhobochechudo.png" />
      </ImageContent>
    </Container>
  );
};


export default SignUp;
