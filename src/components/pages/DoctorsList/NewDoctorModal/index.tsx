// External Libraries
import React from "react";

// Hooks
import { useNewDoctorModal } from "./hooks/useNewDoctorModal";

// Styles
import {
  Button,
  CloseButton,
  Container,
  Form,
  InputsContainer,
  ModalFooter,
  ModalTitle,
} from "./styles";
import Modal from "../../../commons/toolkit/Modal";
import { Input } from "../../../commons/toolkit/Input";

interface Props {
  open: boolean;
  onCloseModal: () => void;
  refreshDoctors: () => void;
}

export const NewDoctorModal: React.FC<Props> = ({
  open,
  onCloseModal,
  refreshDoctors,
}) => {
  // Hooks
  const { handleSubmit, handleChange, formData } = useNewDoctorModal({
    onClose: onCloseModal,
    refreshDoctors,
  });

  return (
    <Modal onClose={onCloseModal} closeOnClickOutside={true} width="fit-content">
      <ModalTitle>Adicionar Médico</ModalTitle>

      <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input
              required
              value={formData.name}
              label="Nome:"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) =>
                handleChange({ ...formData, name: e.target.value })
              }
            />
            <Input
              required
              value={formData.email}
              label="E-mail:"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) =>
                handleChange({ ...formData, email: e.target.value })
              }
            />

            <Input
              required
              value={formData.crm}
              label="CRM:"
              type="text"
              onChange={(e) =>
                handleChange({ ...formData, crm: e.target.value })
              }
            />
            <Input
              required
              value={formData.specialty}
              label="Especialidade:"
              type="text"
              onChange={(e) =>
                handleChange({ ...formData, specialty: e.target.value })
              }
            />

            <Input
              required
              value={formData.password}
              label="Senha:"
              type="password"
              onChange={(e) =>
                handleChange({ ...formData, password: e.target.value })
              }
            />
          </InputsContainer>
          <Button type="submit">Adicionar</Button>
        </Form>

      <ModalFooter $justifyContent="flex-end">
        <CloseButton onClick={onCloseModal} />
     
      </ModalFooter>
    </Modal>
  );
};
