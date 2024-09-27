// External Libraries
import { toast } from "sonner";
import { useEffect, useState } from "react";

// Types
import axiosInstance from "../../../../../api";
import { Log } from "../../../../../types/types";

export function useLogs() {
  // States
  const [logs, setLogs] = useState<Log[]>([]);

  // Constants
  const fetchAppointment = async () => {
    toast.promise(
      async () => {
        const response = await axiosInstance.get("/auth/log");
        setLogs(response.data);
        return response.data;
      },
      {
        loading: "Carregando logs...",
        success: "Logs carregadas com sucesso!",
        error: (error) => `Erro ao carregar logs: ${error.message}`,
      }
    );
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  return { logs };
}
