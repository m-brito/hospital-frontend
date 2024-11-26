import styled from 'styled-components'

export const Container = styled.div`
position: relative;`


export const Modal = styled.div`
  position: absolute;

  max-height: 12rem;

  overflow: auto;

  top: calc(100% + 0.25rem);
  left: 0;

  width: 100%;

  background: #fff;

  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  z-index: 10;

  padding: 1rem;

  gap: 1rem;

  display: flex;
  flex-direction: column;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #007bff;
  }
`;