// Types
import { Appointment } from "../../../../../dtos/appointments";


export function useSchedules() {
  // States

  // Constants
  const data: Appointment[] = [
    {
      id: 1,
      date: "2024-09-20T03:00:00.000Z",
      time: "15:00:00",
      status: "scheduled",
      doctor: {
        id: 10,
        name: "user4",
        email: "emai40@gmail.com",
        role: "doctor",
        crm: "123123123",
        specialty: "Medicina do Sono",
      },
    },
    {
      id: 2,
      date: "2024-09-20T03:00:00.000Z",
      time: "15:00:00",
      status: "scheduled",
      doctor: {
        id: 10,
        name: "user4",
        email: "emai40@gmail.com",
        role: "doctor",
        crm: "123123123",
        specialty: "Medicina do Sono",
      },
    },
    {
      id: 3,
      date: "2024-09-20T03:00:00.000Z",
      time: "15:00:00",
      status: "scheduled",
      doctor: {
        id: 10,
        name: "user4",
        email: "emai40@gmail.com",
        role: "doctor",
        crm: "123123123",
        specialty: "Medicina do Sono",
      },
    },
    {
      id: 4,
      date: "2024-09-20T03:00:00.000Z",
      time: "15:00:00",
      status: "scheduled",
      doctor: {
        id: 10,
        name: "user4",
        email: "emai40@gmail.com",
        role: "doctor",
        crm: "123123123",
        specialty: "Medicina do Sono",
      },
    },
    {
      id: 5,
      date: "2024-09-20T03:00:00.000Z",
      time: "15:00:00",
      status: "scheduled",
      doctor: {
        id: 10,
        name: "user4",
        email: "emai40@gmail.com",
        role: "doctor",
        crm: "123123123",
        specialty: "Medicina do Sono",
      },
    },
  ];

  return { data };
}
