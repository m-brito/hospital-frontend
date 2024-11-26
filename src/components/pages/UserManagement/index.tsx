// External Libraries
import React from "react";

// Components
import { Input } from "../../commons/toolkit/Input";
import { Button } from "../../commons/toolkit/Button";
import { Text } from "../../commons/toolkit/Text";

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
  ImageInfosContainer,
} from "./styles";
import { ImagePicker } from "./components/ImagePicker";

export const UserManagement: React.FC = () => {
  // Hooks
  const { isLoading, formData, handleInputChange, handleImageSelect, handleSubmit } =
    useUserManagement({});

  return (
    <Container>
      <ImageContent>
        <Image src="/imgs/adressGatinho.png" alt="Gatinho" />
      </ImageContent>

      <Card>
        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input
              label="Cep"
              type="number"
              name="cep"
              placeholder="Digite seu cep"
              value={formData.adress.cep}
              onChange={handleInputChange}
            />

            <Input
              label="Rua:"
              type="text"
              name="street"
              placeholder="Digite sua rua"
              value={formData.adress.street}
              onChange={handleInputChange}
            />

            <Input
              label="Bairo:"
              type="text"
              name="neighborhood"
              placeholder="Digite seu bairo"
              value={formData.adress.neighborhood}
              onChange={handleInputChange}
            />

            <Input
              label="Número:"
              type="number"
              name="number"
              placeholder="Digite seu número"
              value={formData.adress.number}
              onChange={handleInputChange}
            />
            
            <ImagePicker
              image={formData.photo}
              onImageChange={handleImageSelect}
            />

            {formData.photo ? (
              <ImageInfosContainer>
                <Text>Imagem de perfil selecionada:</Text>

                <Image src={formData.photo} width={100} />
              </ImageInfosContainer>
            ) : null}
          </InputsContainer>

          <Button
            label={isLoading ? "Carregando..." : "Salvar"}
            size="100%"
            disabled={isLoading}
          />
        </Form>
      </Card>
    </Container>
  );
};
