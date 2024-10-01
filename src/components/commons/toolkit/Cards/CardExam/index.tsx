import { toast } from "sonner";
import { Exam } from "../../../../../types/types";
import { Button } from "../../../../pages/DoctorsList/styles";
import { useLogin } from "../../../../pages/Login/hooks/useLogin";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  StatusBadge,
  StatusFooter,
} from "./styles";
import axiosInstance from "../../../../../api";

interface CardExamProps extends Exam {
  fetchExams?: () => Promise<void>;
}

const CardExam: React.FC<CardExamProps> = ({
  date,
  doctor,
  id,
  status,
  type,
  fetchExams,
}) => {
  const { user } = useLogin();

  const handleConcludeExam = async (id: number) => {
    try {
      toast.promise(
        async () => {
          await axiosInstance.patch(`/exam/${id}`, { status: "concluded" });
          if (fetchExams) {
            fetchExams();
          }
        },
        {
          loading: "Atualizando exame...",
          success: "Exame atualizado com sucesso.",
          error: "Erro ao atualizar exame.",
        }
      );
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
    }
  };

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
        {status == "pending" && user && user.role == "patient" && (
          <Button onClick={() => handleConcludeExam(id)}>Concluido</Button>
        )}
        <StatusBadge $status={status}></StatusBadge>
      </CardFooter>
    </Card>
  );
};

export default CardExam;
