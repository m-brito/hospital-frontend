// External Libraries
import React, { useEffect, useRef, useState } from "react";

// Styles
import { Title, ContainerCards } from "./styles";
import { Grid } from "../DoctorsList/styles";
import CardExam from "../../commons/toolkit/Cards/CardExam";
import axiosInstance from "../../../api";
import { Exam } from "../../../types/types";

export const PatientExams: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_HOST}/exam`
        );
        setExams(response.data);
      } catch (error) {
        console.error("Erro ao buscar exames", error);
      }
    };

    fetchExams();
  }, []);

  return (
    <ContainerCards>
      <Title>Lista de exames</Title>
      <Grid>
        {exams.map((exam, index) => (
          <CardExam
            key={index}
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
