// External Libraries
import React from "react";

// Styles
import {
  CardModal,
  CardHeader,
  CardBody,
  ScheduleButton,
  CardFooter,
} from "./styles";
import { useLogin } from "../../Login/hooks/useLogin";

interface CardProps {
  doctor: {
    id: number;
    name: string;
    specialty: string;
    role: string;
    crm: string;
    email: string;
  };
  onSchedule: () => void;
}

const Card: React.FC<CardProps> = ({ doctor, onSchedule }) => {
  const { user } = useLogin();

  return (
    <CardModal>
      <CardHeader>{doctor.name}</CardHeader>
      <CardBody>
        <p>
          <strong>Especialidade:</strong> {doctor.specialty}
        </p>
        <p>
          <strong>CRM:</strong> {doctor.crm}
        </p>
        <p>
          <strong>Email:</strong> {doctor.email}
        </p>
      </CardBody>
      <CardFooter>
        {user?.role === "patient" ? (
          <ScheduleButton onClick={onSchedule}>Agendar Consulta</ScheduleButton>
        ) : (
          <></>
        )}
      </CardFooter>
    </CardModal>
  );
};

export default Card;
