// External Libraries
import React from "react";

// Components
import { Appointment } from "../../../../dtos/appointments";
import { AppointmentInfos } from "./components/AppointmentInfos";

// Styles
import { Container, SideBar, Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Login/hooks/useLogin";

interface Props {
  appointment: Appointment;
  imgSrc: string;
}

export const AppointmentCard: React.FC<Props> = ({ appointment, imgSrc }) => {
  const navigate = useNavigate();
  const { user } = useLogin();

  const handleClickCard = () => {
    if (["admin", "doctor"].includes(user!.role)) {
      navigate(`${appointment.id}`);
    }
  }

  return (
    <Container onClick={handleClickCard}>
      <SideBar>
        <Image src={imgSrc} alt="Gatinho" />
      </SideBar>

      <AppointmentInfos infos={appointment}/>
    </Container>
  );
};
