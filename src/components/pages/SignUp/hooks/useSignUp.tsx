import { useState } from 'react';

interface SignUpData {
  nome: string;
  data_nascimento: string;
  email: string;
  senha: string;
}

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, error, isLoading };
};
