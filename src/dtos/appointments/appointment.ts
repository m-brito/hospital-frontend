export interface Appointment {
  id: number;
  date: string;
  time: string;
  status: string;
  doctor: Doctor;
}

interface Doctor {
  id: number;
  name: string;
  email: string;
  role: string;
  crm: string;
  specialty: string;
}
