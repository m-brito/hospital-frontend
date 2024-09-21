import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { jwtDecode } from "jwt-decode";
import { makeInitialInfosForm } from '../utils';
import { FormInfos, UserInfo } from '../types';



export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [infos, setInfos] = useState<UserInfo | null>(makeInitialInfosForm());

  const navigate = useNavigate(); 

  const signUp = async (formInfos: FormInfos) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/auth/register`,
        formInfos
      );

      const token = response.data.token;
      const decodedToken = jwtDecode<{ id: number; role: string }>(token);
      setInfos({
        name: formInfos.name,
        email: formInfos.email,
        role: decodedToken.role,
        password: formInfos.password,
        token,
      });
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...decodedToken, email: formInfos.email })
      );

      navigate('/Home');
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.data) {
        const message = (axiosError.response.data as { message?: string }).message;
        setError(message || "Falha ao realizar cadastro");
      } else {
        setError("Falha ao realizar cadastro");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { infos, signUp, error, isLoading };
};