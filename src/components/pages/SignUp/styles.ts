import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  min-height: 100vh;

  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  background-color: #cce8f5;
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardLogin = styled.div`
  border-radius: 1.5rem;

  min-height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffff;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: fit-content;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;

  gap: 0.25rem;
`;

export const IconContainer = styled.div`
  min-width: fit-content;
  max-width: fit-content;

  min-height: fit-content;
  max-height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img``;
