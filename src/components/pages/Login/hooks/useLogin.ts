import { useNavigate } from 'react-router-dom';
import { LoginResponse } from './types';

export const useLogin = () => {
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
   
      if (data.isAdmin) {
        navigate('/admin'); 
      } else if (data.isPaciente) {
        navigate('/paciente-home'); 
      } else {
        // Lógica para outros tipos de usuários
      }
    } else {
      alert('Credenciais inválidas');
    }
  };

  return { login };
};
