import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios, { AxiosError } from "axios";
import { LoginCredentials, User } from "./types";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const isExpired = checkTokenExpiration(userData.exp);
      if (!isExpired) {
        setUser(userData);
      } else {
        logout();
      }
    } else {
      logout();
    }
    setIsLoading(false);
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
      const decodedToken = jwtDecode<{ id: number; role: string; exp: number, iat: number }>(
        token
      );

      if (decodedToken.exp * 1000 < Date.now()) {
        throw new Error("Token expirado");
      }

      const userData = {
        id: decodedToken.id,
        email: credentials.email,
        role: decodedToken.role,
        exp: decodedToken.exp,
        iat: decodedToken.iat,
        token,
      };

      setUser(userData);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const checkTokenExpiration = (exp: number) => {
    return exp * 1000 < Date.now();
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within an AuthProvider");
  }
  return context;
};
