import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CatImage = styled.img`
  width: 300px;
  height: auto;
  animation: ${fadeIn} 2s ease;
  margin-bottom: 2rem;
`;

export const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3fafd;
  color: #333;
  font-family: "Comic Sans MS", cursive, sans-serif;
  animation: ${fadeIn} 1s ease;
`;

export const ErrorMessage = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #177198;
  text-align: center;
`;

export const SubMessage = styled.div`
  font-size: 1.5rem;
  color: #177198;
  text-align: center;
  margin-top: 1rem;
`;

export const RestartButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: #177198;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0d5c8f;
    transform: scale(1.05);
  }
`;
