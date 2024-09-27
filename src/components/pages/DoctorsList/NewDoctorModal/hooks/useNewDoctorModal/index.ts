// Types
import { useState } from 'react';
import { FormInfos, UseNewDoctorModalParams } from './types'
import axiosInstance from '../../../../../../api';
import { toast } from "sonner";

export function useNewDoctorModal({onClose, refreshDoctors}: UseNewDoctorModalParams) {
  // States
  const [formData, setFormData] = useState<FormInfos>({
    name: "",
    email: "",
    password: "",
    crm: "",
    specialty: ""
  });

  // Functions
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDoctor();
  };

  const addDoctor = async () => {
    try {
     

      toast.promise(
        async () => {
          await axiosInstance.post("/doctors/register", formData);
          await refreshDoctors();
          onClose()
        },
        {
          loading: "Registrando medico...",
          success: "medico adicionado com sucesso.",
          error: "Erro ao adicionar medico",
        }
      );
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
    }
  };


  return {formData, handleChange: setFormData, handleSubmit}
}
