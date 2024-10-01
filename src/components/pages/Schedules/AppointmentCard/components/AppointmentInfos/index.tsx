// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Appointment } from "../../../../../../dtos/appointments";
import { useLogin } from "../../../../Login/hooks/useLogin";

interface Props {
  infos: Appointment;
}

export const AppointmentInfos: React.FC<Props> = ({ infos }) => {
  const { user } = useLogin();

  return (
    <Container>
      <p>
        <strong>Data: </strong>
        {new Date(infos.date).toLocaleDateString("pt-BR")}
      </p>
      <p>
        <strong>Hora: </strong>
        {infos.time}
      </p>
      {user && ["patient", "admin"].includes(user.role) && (
        <p>
          <strong>Médico: </strong>
          {infos.doctor.name}
        </p>
      )}

      {user && ["doctor", "admin"].includes(user.role) && (
        <p>
          <strong>Paciente: </strong>
          {infos.patient.name}
        </p>
      )}
      <p>
        <strong>Especialidade: </strong>
        {infos.doctor.specialty}
      </p>
    </Container>
  );
};
