import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from './types';

export const useLogin = () => {
  const [user, setUser] = useState<LoginResponse | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, senha: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });

    if (response.ok) {
      const data: LoginResponse = await response.json();
      setUser(data);

      // Redireciona para a página home genérica
      navigate('/home');
    } else {
      alert('Credenciais inválidas');
      // Aqui você pode adicionar tratamento de erro, por exemplo, log para um serviço de monitoramento
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login'); // Redireciona para a página de login
  };

  return { login, logout, user };
};
