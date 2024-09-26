import styled from "styled-components";


export const Container = styled.div`
  padding: 100px 20px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const THead = styled.thead`
    border-radius: 8px 8px 0 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #E6F4FA;
  }
`;

export const TableHeader= styled.th`
  padding: 12px;
  text-align: center;
  font-weight: bold;
  background-color: #177198;
  color: white;
  &:first-child{
    border-radius: 10px 0 0 0;
  }
  &:last-child{
    border-radius: 0 10px 0 0;
  }
`;

export const TableCell = styled.td`
  padding:12px;
  border-bottom: 1px solid #ddd;
  
`;

export const TableBody = styled.tbody`
  
`;