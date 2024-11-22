// External Libraries
import React from "react";

// Components
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";

// Hooks
import { useUserManagement } from "./hooks/useUserManagement";

// Styles
import {
  Container,
  Form,
  ImageContent,
  InputsContainer,
  Image,
  Card,
} from "./styles";

export const UserManagement: React.FC = () => {
  // Hooks
  const { isLoading, formData, handleInputChange } = useUserManagement({});

  return (
    <Container>
      <ImageContent>
        <Image src="/imgs/adressGatinho.png" alt="Gatinho" />
      </ImageContent>

      <Card>
        <Form onSubmit={console.log}>
          <InputsContainer>
            <Input
              required
              label="Cep"
              type="number"
              name="cep"
              placeholder="Digite seu cep"
              value={formData.adress.cep}
              onChange={handleInputChange}
            />

            <Input
              required
              label="Rua:"
              type="text"
              name="street"
              placeholder="Digite sua rua"
              value={formData.adress.street}
              onChange={handleInputChange}
            />

            <Input
              required
              label="Bairo:"
              type="text"
              name="neighborhood"
              placeholder="Digite seu bairo"
              value={formData.adress.neighborhood}
              onChange={handleInputChange}
            />

            <Input
              required
              label="Número:"
              type="number"
              name="number"
              placeholder="Digite seu número"
              value={formData.adress.number}
              onChange={handleInputChange}
            />
          </InputsContainer>

          <Button
            label={isLoading ? "Carregando..." : "Acessar"}
            size="100%"
            disabled={isLoading}
          />
        </Form>
      </Card>
    </Container>
  );
};
