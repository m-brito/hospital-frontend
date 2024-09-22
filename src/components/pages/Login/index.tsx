import React, { useEffect, useState } from "react";
import { FaTruckMedical } from "react-icons/fa6";
import { Text } from "../../commons/toolkit/Text";
import { Link as RouterLink } from 'react-router-dom';
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";
import { useLogin } from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";

import {
  CardLogin,
  Container,
  Form,
  IconContainer,
  ImageContent,
  InputsContainer,
  TextContainer,
  Image,
  ErrorMessage,
} from "./styles";

export const Login: React.FC = () => {
  const { login, error, isLoading, user } = useLogin();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", senha: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email: formData.email, password: formData.senha });
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container>
      <ImageContent>
        <Image src="/imgs/gatinho.png" alt="Gatinho" />
      </ImageContent>

      <CardLogin>
        <IconContainer>
          <FaTruckMedical color="#84cae8" size="3rem" />
        </IconContainer>

        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input
              label="E-mail:"
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              label="Senha:"
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={handleInputChange}
            />
          </InputsContainer>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button
            label={isLoading ? "Carregando..." : "Acessar"}
            size="100%"
            disabled={isLoading}
          />
        </Form>

        <TextContainer>
          <Text>Ainda não possui login?</Text>
          <RouterLink to="/signup">Cadastre-se</RouterLink> 
        </TextContainer>
      </CardLogin>
    </Container>
  );
};
