import {
  FaCalendarCheck,
  FaSyringe,
  FaUserDoctor,
  FaUserInjured,
} from "react-icons/fa6";
import { IoFingerPrintSharp, IoHomeSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { MenuItemInfos } from "../MenuItem/types/MenuItemInfos";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate = useNavigate();

export type ItemMenuByRole = { [key: string]: MenuItemInfos[] };

function handleHomeClick() {
  navigate("/home");
}

function handleScheduleExamsClick() {
  navigate("/ScheduleExams");
}

function handleScheduledAppointmentsClick() {
  navigate("/ScheduledAppointments");
}

function handleExamsClick() {
  navigate("/Exams");
}

function handleManageDoctorsClick() {
  navigate("/ManageDoctors");
}

function handleManageAccessClick() {
  navigate("/ManageAccess");
}

function handleScheduleAppointmentClick() {
  navigate("/ScheduleAppointment");
}



export const MENU_ITEMS_BY_ROLE: ItemMenuByRole = {
  doctor: [
    { icon: <IoHomeSharp />, label: "Home", onClick: handleHomeClick },
    {
      icon: <FaUserDoctor />,
      label: "Agendar Exames",
      onClick: handleScheduleExamsClick,
    },
    {
      icon: <FaCalendarCheck />,
      label: "Visualizar Consultas",
      onClick: handleScheduledAppointmentsClick,
    },
    { icon: <FaSyringe />, label: "Exams", onClick: handleExamsClick },
  ],
  admin: [
    { icon: <IoHomeSharp />, label: "Home", onClick: handleHomeClick },
    {
      icon: <MdManageAccounts />,
      label: "Gerenciar Medico",
      onClick: handleManageDoctorsClick,
    },
    {
      icon: <IoFingerPrintSharp />,
      label: "Gerenciar Acesso",
      onClick: handleManageAccessClick,
    },
  ],
  patient: [
    { icon: <IoHomeSharp />, label: "Home", onClick: handleHomeClick },
    {
      icon: <FaUserDoctor />,
      label: "Agendar Consulta",
      onClick: handleScheduleAppointmentClick,
    },
    {
      icon: <FaCalendarCheck />,
      label: "Vizualizar Consultas",
      onClick: handleScheduledAppointmentsClick,
    },
    { icon: <FaSyringe />, label: "Exames", onClick: handleExamsClick },
  ],
};
