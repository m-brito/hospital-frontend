import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { LoginCredentials, User } from "./types";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/auth/login`,
        credentials
      );

      const token = response.data.token;
      const decodedToken = jwtDecode<{ id: number; role: string }>(token);

      setUser({
        id: decodedToken.id,
        email: credentials.email,
        role: decodedToken.role,
        token,
      });
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...decodedToken, email: credentials.email })
      );
    } catch (err) {
      const axiosError = err as AxiosError;
      if (
        axiosError.response?.data &&
        typeof axiosError.response.data === "object"
      ) {
        const message = (axiosError.response.data as { message: string })
          .message;
        setError(message || "Falha ao realizar login");
      } else {
        setError("Falha ao realizar login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, user };
};
