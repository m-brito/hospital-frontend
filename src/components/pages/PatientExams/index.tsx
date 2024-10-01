// External Libraries
import React, { useEffect, useRef, useState } from "react";

// Styles
import { Title, ContainerCards } from "./styles";
import { Grid } from "../DoctorsList/styles";
import CardExam from "../../commons/toolkit/Cards/CardExam";
import { useExams } from "./hooks/useExams";

export const PatientExams: React.FC = () => {
  const { exams, fetchExams } = useExams();

  return (
    <ContainerCards>
      <Title>Lista de exames</Title>
      <Grid>
        {exams.map((exam, index) => (
          <CardExam
            key={index}
            fetchExams={fetchExams}
            date={exam.date}
            doctor={exam.doctor}
            id={exam.id}
            status={exam.status}
            type={exam.type}
          />
        ))}
      </Grid>
    </ContainerCards>
  );
};

export default PatientExams;
