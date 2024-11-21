import { useState } from "react";
import axios from "axios";
import { makeInitialInfosForm } from "../../utils/makeInitialFormInfos";
import { FormInfos, UseUserManagementParams } from "./types";

export function useUserManagement({}: UseUserManagementParams) {
  // States
  const [formData, setFormData] = useState<FormInfos>(makeInitialInfosForm);
  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      adress: {
        ...prevFormData.adress,
        [name]: value,
      },
    }));

   
    if (name === "cep" && value.length === 8) {
      fetchAddressByCep(value);
    }
  };

  const fetchAddressByCep = async (cep: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      
      if (response.data.erro) {
        console.error("CEP inválido");
        return;
      }

      const { logradouro, bairro } = response.data;

      setFormData((prevFormData) => ({
        ...prevFormData,
        adress: {
          ...prevFormData.adress,
          street: logradouro,
          neighborhood: bairro,
        },
      }));
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    formData,
    handleInputChange,
  };
}
