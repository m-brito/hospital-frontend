import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignUpData {
  nome: string;
  data_nascimento: string;
  email: string;
  senha: string;
}

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Hook para navegação

  const signUp = async (formData: SignUpData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar. Verifique os dados e tente novamente.');
      }

      const data = await response.json();
      console.log('Usuário cadastrado com sucesso:', data);

      // Redireciona para a página de login após o cadastro bem-sucedido
      navigate('/login');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, error, isLoading };
};
