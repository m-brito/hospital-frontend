import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 16rem;

  position: relative;

  display: flex;
  flex-direction: column;

`;

export const StyledInput = styled.input`
 position: relative;

  padding: 1rem;
  max-width: 15rem;


  border: 1px solid #ccc;
  border-radius: 0.5rem;

  &:active, &:focus {
    border-color: #cce8f5; 
  
  }
`;

export const ToggleIcon = styled.div`
  position: absolute;

  width: 2rem;
  height: 3.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  left: calc(100% - 2rem);
  top: 50%;
  
`;
