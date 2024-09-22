import React, { useEffect, useState } from "react";
import {
  ErrorPageWrapper,
  ErrorMessage,
  SubMessage,
  RestartButton,
  CatImage,
} from "../styles";
import { useNavigate } from "react-router-dom";
import { phrases } from "./phrases";

const Unauthorized: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState<string>(
    phrases[Math.floor(Math.random() * phrases.length)]
  );
  const [timeLeft, setTimeLeft] = useState<number>(4);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ErrorPageWrapper>
      <CatImage src="/imgs/gatinhobravo.png" alt="Cute cat" />
      <ErrorMessage>Não Autorizado</ErrorMessage>
      <SubMessage>
        {currentPhrase} - ({timeLeft}s)
      </SubMessage>
      <RestartButton onClick={() => navigate("/")}>
        Voltar
      </RestartButton>
    </ErrorPageWrapper>
  );
};

export default Unauthorized;
