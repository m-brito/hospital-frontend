// External Libraries
import React, { useEffect, useState } from "react";

// Styles
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Title,
  ContainerCards,
  ScheduleButton,
  Label,
  Input,
  Button,
  CloseButton,
} from "./styles";
import Modal from "../../commons/toolkit/Modal";
import axiosInstance from "../../../api";
import { ModalFooter, ModalTitle } from "../../commons/toolkit/Modal/styles";
import { toast } from "sonner";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  crm: string;
  phone: string;
  role: string;
  email: string;
};

export const DoctorsList: React.FC = () => {
  // States
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [doctor, setDoctor] = useState<Doctor | undefined>(undefined);
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [appointmentTime, setAppointmentTime] = useState<string>("");

  // Functions

  const fetchDoctors = async () => {
    try {
      const response = await axiosInstance.get("/doctor");
      setDoctors(response.data);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleRegisterAppointment = async () => {
    try {
      if (!doctor || !appointmentDate || !appointmentTime) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const appointmentData = {
        date: appointmentDate,
        time: appointmentTime,
        doctorId: doctor.id,
      };

      toast.promise(
        axiosInstance.post("/appointment/register", appointmentData),
        {
          loading: "Agendando consulta...",
          success: "Consulta agendada com sucesso.",
          error: "Erro ao agendar consulta.",
        }
      );
      handleCloseModal();
      resetForm();
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
    }
  };

  const resetForm = () => {
    setAppointmentDate("");
    setAppointmentTime("");
  };

  const handleCloseModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpenModal = (doctor: Doctor) => {
    setDoctor(doctor);
    setIsOpen(true);
  };

  return (
    <ContainerCards>
      {isOpen && (
        <Modal onClose={handleCloseModal} closeOnClickOutside={true} width="50%">
          <ModalTitle>Agendar Consulta com {doctor?.name}</ModalTitle>
          <p>
            <strong>Especialidade:</strong> {doctor?.specialty}
          </p>
          <p>
            <strong>CRM:</strong> {doctor?.crm}
          </p>
          <p>
            <strong>Email:</strong> {doctor?.email}
          </p>
          <Label>Data:</Label>
          <Input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
          <Label>Hora:</Label>
          <Input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
          <ModalFooter $justifyContent="flex-end">
            <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
            <Button onClick={handleRegisterAppointment}>Agendar</Button>
          </ModalFooter>
        </Modal>
      )}
      <Title>Lista de médicos</Title>
      <Grid>
        {doctors.map((doctor, index) => (
          <Card key={index}>
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
              <ScheduleButton onClick={() => handleOpenModal(doctor)}>
                Agendar Consulta
              </ScheduleButton>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </ContainerCards>
  );
};
