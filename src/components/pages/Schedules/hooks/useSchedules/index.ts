// External Libraries
import { toast } from "sonner";
import { useEffect, useState } from "react";

// Types
import { Appointment } from "../../../../../dtos/appointments";
import axiosInstance from "../../../../../api";


export function useSchedules() {
  // States
  const [appointments, setAppointments] = useState<Appointment[]>([])


  // Constants
  const fetchAppointment = async () => {
    
    toast.promise(
      async () => {
        const response = await axiosInstance.get("/appointment");
        setAppointments(response.data);
        return response.data;
      },
      {
        loading: "Carregando consultas...",
        success: "Consultas carregadas com sucesso!",
        error: (error) => `Erro ao carregar consultas: ${error.message}`,
      }
    );
  }

  useEffect(() => {
    fetchAppointment();
  }, []);
  

  return { appointments };
}
