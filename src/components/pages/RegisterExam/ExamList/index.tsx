import React from "react";
import { ExamContainer, Grid } from "./styles";
import CardExam from "../../../commons/toolkit/Cards/CardExam";
import { Flex } from "../../../commons/toolkit/Flex";
import { Button } from "../../DoctorsList/styles";
import { Doctor, Exam } from "../../../../types/types";

interface ExamListProps {
  exams: Exam[];
  appointmentDoctor: Doctor;
  openModal: () => void;
}

const ExamList: React.FC<ExamListProps> = ({ exams, appointmentDoctor, openModal }) => {
  return (
    <ExamContainer>
      <Flex $justifyContent="space-between" $alignItems="center">
        <h2>Exames</h2>
        <Button onClick={openModal}>+ Exame</Button>
      </Flex>
      {exams.length > 0 ? (
        <Grid>
          {exams.map((exam, index) => (
            <CardExam
              key={index}
              date={exam.date}
              id={exam.id}
              status={exam.status}
              type={exam.type}
              doctor={appointmentDoctor}
            />
          ))}
        </Grid>
      ) : (
        <p>Nenhum exame registrado para esta consulta.</p>
      )}
    </ExamContainer>
  );
};

export default ExamList;
