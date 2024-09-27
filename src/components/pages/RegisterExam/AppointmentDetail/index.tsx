import { Appointment } from "../../../../types/types";
import { CardContainer, DetailItem, Header, PatientContainer } from "./styles";

const AppointmentDetail: React.FC<{appointment: Appointment}> = ({appointment}) => {
  return (
    <CardContainer>
      <Header>Detalhes da Consulta</Header>
      <DetailItem>
        <span className="label">Data:</span>
        <span className="value">
          {new Date(appointment.date).toLocaleDateString()}
        </span>
      </DetailItem>
      <DetailItem>
        <span className="label">Hora:</span>
        <span className="value">{appointment.time}</span>
      </DetailItem>
      <DetailItem>
        <span className="label">Status:</span>
        <span className="value">{appointment.status}</span>
      </DetailItem>

      <PatientContainer>
        <h3>Paciente</h3>
        <DetailItem>
          <span className="label">Nome:</span>
          <span className="value">{appointment.patient.name}</span>
        </DetailItem>
        <DetailItem>
          <span className="label">Email:</span>
          <span className="value">{appointment.patient.email}</span>
        </DetailItem>
        <DetailItem>
          <span className="label">Data de Nascimento:</span>
          <span className="value">
            {new Date(appointment.patient.birthdate).toLocaleDateString()}
          </span>
        </DetailItem>
        <DetailItem>
          <span className="label">Endereço:</span>
          <span className="value">{appointment.patient.address}</span>
        </DetailItem>
      </PatientContainer>
    </CardContainer>
  );
};

export default AppointmentDetail;
