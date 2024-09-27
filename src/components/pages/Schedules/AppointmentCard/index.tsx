// External Libraries
import React from "react";

// Components
import { Appointment } from "../../../../dtos/appointments";
import { AppointmentInfos } from "./components/AppointmentInfos";

// Styles
import { Container, SideBar, Image } from "./styles";

interface Props {
  appointment: Appointment;
  imgSrc: string
}

export const AppointmentCard: React.FC<Props> = ({ appointment, imgSrc }) => {
  return (
    <Container>
      <SideBar>
        <Image src={imgSrc} alt="Gatinho" />
      </SideBar>

      <AppointmentInfos infos={appointment}/>
    </Container>
  );
};
