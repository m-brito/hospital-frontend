import { useState, useEffect } from "react";
import axios from "axios";
import { makeInitialInfosForm } from "../../utils/makeInitialFormInfos";
import { FormInfos, UseUserManagementParams } from "./types";
import axiosInstance from "../../../../../api";

export function useUserManagement({}: UseUserManagementParams) {
  // States
  const [formData, setFormData] = useState<FormInfos>(makeInitialInfosForm);
  const [isLoading, setIsLoading] = useState(false);
  console.log(formData)

 
  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/user/profile");

      const { photo, cep, number, neighborhood, street } = response.data;

      setFormData({
        photo: photo || "",
        adress: {
          cep: cep || "",
          number: number || "",
          neighborhood: neighborhood || "",
          street: street || "",
        },
      });
    } catch (error) {
      console.error("Erro ao buscar o perfil do usuário:", error);
    } finally {
      setIsLoading(false);
    }
  };

 
  useEffect(() => {
    fetchUserProfile();
  }, []);

 
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

 
  const updateUser = async () => {
    try {
      setIsLoading(true);

      const data = {
        photo: formData.photo,
        street: formData.adress.street,
        cep: formData.adress.cep,
        neighborhood: formData.adress.neighborhood,
        number: formData.adress.number,
      };

      await axiosInstance.patch("/user", data);
      console.log("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    } finally {
      setIsLoading(false);
    }
  };

 
  const handleImageSelect = (url: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: url,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateUser();
  };

  return {
    handleImageSelect,
    isLoading,
    formData,
    handleInputChange,
    handleSubmit,
  };
}
