import React from "react";
import {
  ErrorPageWrapper,
  ErrorMessage,
  SubMessage,
  RestartButton,
  CatImage,
} from "../styles";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ErrorPageWrapper>
      <CatImage src="/imgs/gatinho404.png" alt="Cute cat" />
      <ErrorMessage>404 - Página Não Encontrada</ErrorMessage>
      <SubMessage>Oh não! Parece que você se perdeu...</SubMessage>
      <SubMessage>O gatinho está tentando achar o caminho de volta!</SubMessage>
      <SubMessage>
        Tente verificar a URL ou volte para a página inicial.
      </SubMessage>
      <RestartButton onClick={() => navigate("/")}>
        Voltar para o Início
      </RestartButton>
      <SubMessage style={{ marginTop: "1.5rem", fontStyle: "italic" }}>
        Dica: Mantenha a calma e siga o gatinho!
      </SubMessage>
    </ErrorPageWrapper>
  );
};

export default NotFound;
