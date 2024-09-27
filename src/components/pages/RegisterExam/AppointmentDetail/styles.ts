import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 50%;
  background-color: #f9f9f9;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    min-width: 90%;
    margin: 10px;
  }
`;

export const Header = styled.h2`
  color: #177198;
  text-align: center;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;

  .label {
    font-weight: bold;
    color: #555;
  }

  .value {
    color: #333;
    text-align: right;
  }
`;

export const PatientContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px dashed #177198;
  border-radius: 8px;
`;
