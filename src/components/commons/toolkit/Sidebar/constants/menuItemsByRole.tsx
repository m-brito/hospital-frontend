import {
  FaCalendarCheck,
  FaSyringe,
  FaUserDoctor,
} from "react-icons/fa6";
import { IoFingerPrintSharp, IoHomeSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { MenuItemInfos } from "../MenuItem/types/MenuItemInfos";

const menuItems: MenuItemInfos[] = [
  { icon: <IoHomeSharp />, label: "Home", path: "/", roles: ["doctor", "admin", "patient"] },

  { icon: <FaCalendarCheck />, label: "Consultas", path: "/ScheduledAppointments", roles: ["doctor", "patient"] },
  { icon: <FaSyringe />, label: "Exames", path: "/Exams", roles: ["doctor", "patient"] },

  { icon: <FaUserDoctor />, label: "Agendar Consulta", path: "/ScheduleAppointment", roles: ["patient"] },

  { icon: <MdManageAccounts />, label: "Gerenciar Médico", path: "/ManageDoctors", roles: ["admin"] },
  { icon: <IoFingerPrintSharp />, label: "Gerenciar Acesso", path: "/ManageAccess", roles: ["admin"] },
];

export const getMenuItemsByRole = (role: string): MenuItemInfos[] => {
  return menuItems.filter(item => item.roles.includes(role));
};