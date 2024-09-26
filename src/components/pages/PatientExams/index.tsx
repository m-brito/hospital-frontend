// External Libraries
import React, { useEffect, useRef, useState } from "react";

// Styles
import {
  Title,
  ContainerCards,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StatusBadge,
  StatusFooter
  
} from "./styles";
import { Grid } from "../DoctorsList/styles";

const exams =[
  {
    type: "Hemograma",
    date: "2024-10-15",
    time: "15:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "pending"
  },
  {
    type: "Raio-x",
    date: "2024-10-10",
    time: "11:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "concluded"
  },
  {
    type: "Hemograma",
    date: "2024-10-15",
    time: "15:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "pending"
  },
  {
    type: "Raio-x",
    date: "2024-10-10",
    time: "11:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "concluded"
  },
  {
    type: "Hemograma",
    date: "2024-10-15",
    time: "15:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "pending"
  },
  {
    type: "Raio-x",
    date: "2024-10-10",
    time: "11:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "concluded"
  },
  {
    type: "Hemograma",
    date: "2024-10-15",
    time: "15:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "pending"
  },
  {
    type: "Raio-x",
    date: "2024-10-10",
    time: "11:00",
    doctor: "Dr Josézinho",
    crm: "123456-SP",
    status: "concluded"
  }

];


export const PatientExams: React.FC = () => {
  return (
    <ContainerCards>
      <Title>Lista de exames</Title>
      <Grid>
        {exams.map((exam, index) => (
          <Card key={index}>
            <CardHeader>
              {exam.type}
            </CardHeader>
            <CardBody>
              <p><strong>Data: </strong>{new Date(exam.date).toLocaleDateString('pt-BR')}</p>
              <p><strong>Hora: </strong>{exam.time}</p>
              <p><strong>Médico: </strong>{exam.doctor}</p>
              <p><strong>CRM: </strong>{exam.crm}</p>
            </CardBody>
            <CardFooter>
              <StatusFooter><strong>Status:</strong> {exam.status}</StatusFooter>
              <StatusBadge status={exam.status}></StatusBadge>
            </CardFooter>
          </Card>
        ))} 
      </Grid>
    </ContainerCards>
  );
};

export default PatientExams;