import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;

  min-height: 15rem;

  gap: 1rem;

  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  background-color: #fff;

  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const SideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #85cbe9;
`;

export const Image = styled.img`
width: 100%;
  object-fit: contain; `;
