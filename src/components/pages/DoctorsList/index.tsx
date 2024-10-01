// External Libraries
import React, { useEffect, useRef, useState } from "react";

// Styles
import {
  Grid,
  Title,
  ContainerCards,
  Label,
  Input,
  Button,
  CloseButton,
  Flex,
} from "./styles";
import Modal from "../../commons/toolkit/Modal";
import axiosInstance from "../../../api";
import { ModalFooter, ModalTitle } from "../../commons/toolkit/Modal/styles";
import { toast } from "sonner";
import Card from "./Card";
import { NewDoctorModal } from "./NewDoctorModal";
import { useLogin } from "../Login/hooks/useLogin";

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
  // Hooks
  const { user } = useLogin();

  // States
  const [openModalNewDoctor, setOpenModalNewDoctor] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [doctor, setDoctor] = useState<Doctor | undefined>(undefined);
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [appointmentTime, setAppointmentTime] = useState<string>("");
  const hasFetchedRef = useRef(false);

  const fetchDoctors = async () => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    toast.promise(
      async () => {
        const response = await axiosInstance.get("/doctor");
        setDoctors(response.data);
        return response.data;
      },
      {
        loading: "Carregando médicos...",
        success: "Médicos carregados com sucesso!",
        error: (error) => `Erro ao buscar médicos: ${error.message}`,
      }
    );
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
        <Modal
          onClose={handleCloseModal}
          closeOnClickOutside={true}
          width="50%"
        >
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

      <Flex $justifyContent="space-between" $alignItems="center">
        <Title>Lista de médicos</Title>
        {user && user.role === "admin" && (
          <Button onClick={() => setOpenModalNewDoctor(true)}>+ Medico</Button>
        )}
      </Flex>
      <Grid>
        {doctors.map((doctor, index) => (
          <Card
            doctor={{
              id: doctor.id,
              name: doctor.name,
              specialty: doctor.specialty,
              crm: doctor.crm,
              role: doctor.role,
              email: doctor.email,
            }}
            onSchedule={() => handleOpenModal(doctor)}
            key={index}
          />
        ))}
      </Grid>

      {openModalNewDoctor && (
        <NewDoctorModal
          refreshDoctors={fetchDoctors}
          open={isOpen}
          onCloseModal={() => setOpenModalNewDoctor(false)}
        />
      )}
    </ContainerCards>
  );
};
