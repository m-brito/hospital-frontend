// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Appointment } from "../../../../../../dtos/appointments";

interface Props {
  infos: Appointment;
}

export const AppointmentInfos: React.FC<Props> = ({ infos }) => {
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
      <p>
        <strong>Médico: </strong>
        {infos.doctor.name}
      </p>
      <p>
        <strong>Especialidade: </strong>
        {infos.doctor.specialty}
      </p>
    </Container>
  );
};
