// External Libraries
import { toast } from "sonner";
import { useEffect, useState } from "react";

// Types
import axiosInstance from "../../../../../api";
import { Exam } from "../../../../../types/types";

export function useExams() {
  // States
  const [exams, setExams] = useState<Exam[]>([]);

  // Constants
  const fetchExams = async () => {
    toast.promise(
      async () => {
        const response = await axiosInstance.get("/exam");
        setExams(response.data);
        return response.data;
      },
      {
        loading: "Carregando exames...",
        success: "Exames carregadas com sucesso!",
        error: (error) => `Erro ao carregar exames: ${error.message}`,
      }
    );
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return { exams, fetchExams };
}
