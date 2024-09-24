import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { toast } from "sonner";
import { makeInitialInfosForm } from '../utils';
import { FormInfos, UserInfo } from '../types';

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [infos, setInfos] = useState<UserInfo | null>(makeInitialInfosForm());

  const navigate = useNavigate(); 

  const signUp = async (formInfos: FormInfos) => {
    setIsLoading(true);

    toast.promise(
      async () => {
        try {
          await axios.post(
            `${process.env.REACT_APP_HOST}/auth/register`,
            formInfos
          );
          navigate('/');
        } catch (err) {
          const axiosError = err as AxiosError;
          if (axiosError.response?.data) {
            const errors = (axiosError.response.data as { errors?: { field: string; message: string }[] }).errors;
            if (errors) {
              throw new Error(errors.map(e => e.message).join(", "));
            } else {
              throw new Error("Falha ao realizar cadastro");
            }
          } else {
            throw new Error("Falha ao realizar cadastro");
          }
        } finally {
          setIsLoading(false);
        }
      },
      {
        loading: "Realizando cadastro...",
        success: "Cadastro realizado com sucesso!",
        error: (error) => `Erro ao realizar cadastro: ${error.message}`,
      }
    );
  };

  return { infos, signUp, isLoading };
};
