import styled from "styled-components";

export const CardModal = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  background-color: #d9eef8;
  padding: 16px;
  font-weight: bold;
  font-size: 1.2em;
`;

export const CardBody = styled.div`
  padding: 16px;

  p {
    margin: 8px 0;
  }
`;

export const ScheduleButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #2980b9;
  }
`;

export const CardFooter = styled.div`
  padding: 14px;
  //background-color: #D9EEF8;
  text-align: left;
`;