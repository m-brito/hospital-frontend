import {
  FaCalendarCheck,
  FaSyringe,
  FaUserDoctor,
} from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoFingerPrintSharp, IoHomeSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { MenuItemInfos } from "../MenuItem/types/MenuItemInfos";

const menuItems: MenuItemInfos[] = [
  { icon: <IoHomeSharp />, label: "Home", path: "/", roles: ["doctor", "admin", "patient"] },
  { icon: <CgProfile />, label: "Perfil", path: "/userManagment", roles: ["doctor", "admin", "patient"] },

  { icon: <FaCalendarCheck />, label: "Consultas", path: "/appointments", roles: ["doctor", "patient", "admin"] },
  { icon: <FaSyringe />, label: "Exames", path: "/exams", roles: ["doctor", "patient", "admin"] },

  { icon: <FaUserDoctor />, label: "Medicos", path: "/doctors", roles: ["patient"] },

  { icon: <MdManageAccounts />, label: "Gerenciar Médicos", path: "/doctors", roles: ["admin"] },
  { icon: <IoFingerPrintSharp />, label: "Gerenciar Acesso", path: "/log", roles: ["admin"] },
];

export const getMenuItemsByRole = (role: string): MenuItemInfos[] => {
  return menuItems.filter(item => item.roles.includes(role));
};