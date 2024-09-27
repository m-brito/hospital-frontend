import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api";
import { Container } from "./styles";
import { Appointment } from "../../../types/types";
import AppointmentDetail from "./AppointmentDetail";
import { toast } from "sonner";
import ModalForm from "./ModalForm";
import Tabs from "./Tabs";
import ExamList from "./ExamList";

interface IRegisterExam {
  date: string;
  type: string;
  appointment_id: number;
}

const RegisterExam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [selectedTab, setSelectedTab] = useState<"info" | "exams">("info");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [exam, setExam] = useState<IRegisterExam>({
    date: "",
    type: "",
    appointment_id: Number(id),
  });

  useEffect(() => {
    const fetchData = async () => {
      await updateAppointment();
    };

    fetchData();
  }, [id]);

  const updateExamField = (field: keyof IRegisterExam, value: string) => {
    setExam((prevExam) => ({
      ...prevExam,
      [field]: value,
    }));
  };

  const updateAppointment = async () => {
    try {
      const response = await axiosInstance.get(`/appointment/${id}`);
      setAppointment(response.data);
    } catch (error) {
      console.error("Erro ao buscar consulta", error);
    }
  };
  function handleCloseModal() {
    setIsOpen(false);
  }

  const resetForm = () => {
    setExam({
      date: "",
      type: "",
      appointment_id: Number(id),
    });
  };

  const handleRegisterExam = async () => {
    try {
      if (!exam.date || !exam.type) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      toast.promise(
        async () => {
          await axiosInstance.post("/exam/register", exam);
          await updateAppointment();
          handleCloseModal();
          resetForm();
        },
        {
          loading: "Registrando exame...",
          success: "Exame adicionado com sucesso.",
          error: "Erro ao adicionar exame.",
        }
      );
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
    }
  };

  if (!appointment) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      {isOpen && (
        <ModalForm
          exam={exam}
          handleClose={handleCloseModal}
          handleRegisterExam={handleRegisterExam}
          updateExamField={updateExamField}
          isOpen={isOpen}
        />
      )}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {selectedTab === "info" && (
        <AppointmentDetail appointment={appointment} />
      )}
      {selectedTab === "exams" && (
        <ExamList
          exams={appointment.exams}
          appointmentDoctor={appointment.doctor}
          openModal={() => setIsOpen(true)}
        />
      )}
    </Container>
  );
};

export default RegisterExam;
