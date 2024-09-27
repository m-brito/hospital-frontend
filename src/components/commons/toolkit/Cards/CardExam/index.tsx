import { Exam } from "../../../../../types/types";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  StatusBadge,
  StatusFooter,
} from "./styles";

const CardExam: React.FC<Exam> = ({ id, date, status, type, doctor }) => {
  return (
    <Card>
      <CardHeader>{type}</CardHeader>
      <CardBody>
        <p>
          <strong>Data: </strong>
          {new Date(date).toLocaleDateString("pt-BR")}
        </p>
        <p>
          <strong>Médico: </strong>
          {doctor.name}
        </p>
        <p>
          <strong>CRM: </strong>
          {doctor.crm}
        </p>
      </CardBody>
      <CardFooter>
        <StatusFooter>
          <strong>Status:</strong> {status}
        </StatusFooter>
        <StatusBadge $status={status}></StatusBadge>
      </CardFooter>
    </Card>
  );
};

export default CardExam;
