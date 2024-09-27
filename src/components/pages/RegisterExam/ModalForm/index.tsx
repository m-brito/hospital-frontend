import React from "react";
import Modal from "../../../commons/toolkit/Modal";
import { ModalFooter, ModalTitle } from "../../../commons/toolkit/Modal/styles";
import { Button, CloseButton, Input, Label } from "../../DoctorsList/styles";

interface RegisterExam {
    date: string;
    type: string;
    appointment_id: number;
  }

interface ModalFormProps {
  isOpen: boolean;
  exam: RegisterExam;
  updateExamField: (field: keyof RegisterExam, value: string) => void;
  handleClose: () => void;
  handleRegisterExam: () => Promise<void>;
}

const ModalForm: React.FC<ModalFormProps> = ({
  isOpen,
  handleClose,
  exam,
  updateExamField,
  handleRegisterExam,
}) => {
  return (
    isOpen ? (
      <Modal onClose={handleClose} closeOnClickOutside={true} width="50%">
        <ModalTitle>Marcar exame</ModalTitle>
        <Label>Data:</Label>
        <Input
          type="date"
          value={exam.date}
          onChange={(e) => updateExamField("date", e.target.value)}
          required
        />
        <Label>Tipo:</Label>
        <Input
          type="text"
          value={exam.type}
          onChange={(e) => updateExamField("type", e.target.value)}
          required
        />
        <ModalFooter $justifyContent="flex-end">
          <CloseButton onClick={handleClose}>Fechar</CloseButton>
          <Button onClick={handleRegisterExam}>Agendar</Button>
        </ModalFooter>
      </Modal>
    ) : <></>
  );
};

export default ModalForm;
