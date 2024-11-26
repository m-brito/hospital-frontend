import axios from "axios";
import { useState } from "react";

export function useImagePicker() {
  // States
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const fetchImages = async (query: string) => {
    if (!query) return;
    try {
      setIsLoading(true);
      const response = await axios.get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization: "1K3rUhY7YJQBE36X9vxaRGpNs8VsiCTHTv3LRD13TcnJGyqh0ifobr46",
        },
        params: {
          query,
          per_page: 10,
        },
      });

      const imageUrls = response.data.photos.map((photo: any) => photo.src.medium);
      setImages(imageUrls);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { images, isLoading, fetchImages };
}
