export interface Doctor {
  id: number;
  name: string;
  email: string;
  crm: string;
  specialty: string;
}

export interface Patient {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  address: string;
}

export interface Exam {
  id: number;
  type: string;
  date: string;
  status: string;
  doctor: Doctor;
}

export interface Appointment {
  id: number;
  date: string;
  time: string;
  status: string;
  doctor: Doctor;
  patient: Patient;
  exams: Exam[];
}

export interface Log {
  id: number;
  date: Date;
  time: string;
  name: string;
  role: string;
  email: string;
}
