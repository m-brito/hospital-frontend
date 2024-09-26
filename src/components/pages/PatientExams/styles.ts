import styled from "styled-components";

interface StatusWrapperProps {
  status: string;
}

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: #fff;

  &:hover{
    transform: translateY(-5px);
  }
`;

export const CardHeader  = styled.div`
  background-color: #f7f7f7;
  padding: 16px;
  font-weight: bold;
  font-size: 1.2em;
`;

export const CardBody  = styled.div`
  padding: 16px;

  p {
    margin: 8px 0;
  }
`;

export const CardFooter  = styled.div`
  padding: 16px;
  background-color: #f7f7f7;
  justify-content: space-between; 
  align-items: center; 
  display: flex;
`;

export const StatusBadge  = styled.span<StatusWrapperProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: white;
  background-color: ${({ status }) => {
    switch (status) {
      case "concluded":
        return "#2ecc71";
      case "pending":
        return "#f39c12";
      default:
        return "#95a5a6";
    }
  }};
  
`;

export const StatusFooter = styled.p`
  margin: 0;
  padding: 0;
`;
