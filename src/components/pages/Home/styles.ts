import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background-color: #F3FAFD;
  height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;


`;

export const Title = styled.h1`
  font-size: 34px;
`;

export const Paragraph = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;