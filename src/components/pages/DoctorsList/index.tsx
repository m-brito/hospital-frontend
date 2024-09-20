// External Libraries
import React from "react";
import { Sidebar } from "../../commons/toolkit/Sidebar";

// Components
import { Text } from "../../commons/toolkit/Text";

// Styles
import { Container, Card, CardHeader, CardBody, Grid, Title, ContainerCards } from "./styles";

const doctors = [
  {
    name: "Dr. João Silva",
    specialty: "Cardiologia",
    crm: "123456-SP",
    phone: "(11) 99999-9999",
    email: "joao.silva@hospital.com"
  },
  {
    name: "Dra. Maria Oliveira",
    specialty: "Pediatria",
    crm: "654321-SP",
    phone: "(11) 88888-8888",
    email: "maria.oliveira@hospital.com"
  },
  {
    name: "Dr. João Silva",
    specialty: "Cardiologia",
    crm: "123456-SP",
    phone: "(11) 99999-9999",
    email: "joao.silva@hospital.com"
  },
  {
    name: "Dr. João Silva",
    specialty: "Cardiologia",
    crm: "123456-SP",
    phone: "(11) 99999-9999",
    email: "joao.silva@hospital.com"
  },
  {
    name: "Dr. João Silva",
    specialty: "Cardiologia",
    crm: "123456-SP",
    phone: "(11) 99999-9999",
    email: "joao.silva@hospital.com"
  },
  {
    name: "Dr. João Silva",
    specialty: "Cardiologia",
    crm: "123456-SP",
    phone: "(11) 99999-9999",
    email: "joao.silva@hospital.com"
  },

];

export const DoctorsList: React.FC = () => {

  return (
    <Container>
      <Sidebar />
      <ContainerCards>
        <Title>Lista de médicos</Title>
        <Grid>
          {doctors.map((doctor, index) => (
            <Card key={index}>
              <CardHeader>{doctor.name}</CardHeader>
              <CardBody>
                <p><strong>Especialidade:</strong> {doctor.specialty}</p>
                <p><strong>CRM:</strong> {doctor.crm}</p>
                <p><strong>Email:</strong> {doctor.email}</p>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </ContainerCards>
    </Container>
  );
};