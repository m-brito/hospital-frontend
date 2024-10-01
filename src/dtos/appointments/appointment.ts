import { Patient } from "../../types/types";

export interface Appointment {
  id: number;
  date: string;
  time: string;
  status: string;
  doctor: Doctor;
  patient: Patient;
}

interface Doctor {
  id: number;
  name: string;
  email: string;
  role: string;
  crm: string;
  specialty: string;
}
