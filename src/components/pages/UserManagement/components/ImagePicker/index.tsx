// External Libraries
import React, { useState } from "react";

// Components
import { Button } from "../../../../commons/toolkit/Button";
import { Input } from "../../../../commons/toolkit/Input";

// Hooks
import { useImagePicker } from "./hooks/useImagePicker";

// Styles
import { Container, ImagesContainer, Image, Modal } from "./styles";

interface Props {
  image: string
  onImageChange: (image: string) => void;
}

export const ImagePicker: React.FC<Props> = ({  onImageChange, image }) => {
  // Constants
  const displayedLabel = image ? 'Trocar imagem de perfil': 'Selecionar imagem de perfil'

  // States
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Hooks
  const { images, isLoading, fetchImages } = useImagePicker();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) fetchImages(query);
  };

  const handleImageSelect = (url: string) => {
    onImageChange(url);
    setOpen(false);
  };

  return (
    <Container>
      <Button
        type="button"
        size="100%"
        label={displayedLabel}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <Modal>
          <Input
            label="Digite algo para buscar a imagem"
            type="text"
            placeholder="Buscar imagens..."
            value={searchQuery}
            onChange={handleInputChange}
          />

          {isLoading && <p>Carregando imagens...</p>}

          <ImagesContainer>
            {images.map((url) => (
              <Image
                key={url}
                src={url}
                alt="Imagem"
                onClick={() => handleImageSelect(url)}
              />
            ))}
          </ImagesContainer>
        </Modal>
      )}
    </Container>
  );
};
