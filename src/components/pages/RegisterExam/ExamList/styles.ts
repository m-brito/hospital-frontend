import styled from "styled-components";

export const ExamContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #f3fafd;
  padding: 20px;
  border-radius: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;