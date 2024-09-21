import React, { useState } from "react";
import { FaTruckMedical } from "react-icons/fa6";
import { Link } from "../../commons/toolkit/Link";
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

const SignUp: React.FC = () => {
  const { signUp } = useSignUp(); // Verifique se o hook está definido corretamente
  const [formData, setFormData] = useState({
    nome: '',
    data_nascimento: '',
    email: '',
    senha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(formData); // Chama a função de signup
  };

  return (
    <Container>
      <CardLogin>
        <IconContainer>
          <FaTruckMedical color="#84cae8" size="3rem" />
        </IconContainer>

        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input
              label="Nome:"
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
            <Input
              label="Data de nascimento:"
              type="date"
              name="data_nascimento"
              onChange={(e) => setFormData({ ...formData, data_nascimento: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            />
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

export default SignUp; // Certifique-se de que está exportando como default
