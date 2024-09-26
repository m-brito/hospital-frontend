import {
  Container,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  THead
} from "./styles";


export const AdminLog: React.FC = () => {

  const data = [
    { date: "2024-09-26", time: "14:00", expiresIn: "18hrs", name: "Dr Josézinho", role: "Médico", email: "josédoutordasilva@gmail.com" },
    { date: "2024-09-25", time: "10:30", expiresIn: "10hrs", name: "Mariazinha Pacientinha", role: "Paciente", email: "mariazinha@gmail.com" },
    { date: "2024-09-26", time: "14:00", expiresIn: "18hrs", name: "Dr Josézinho", role: "Médico", email: "josédoutordasilva@gmail.com" },
    { date: "2024-09-25", time: "10:30", expiresIn: "10hrs", name: "Mariazinha Pacientinha", role: "Paciente", email: "mariazinha@gmail.com" },
    { date: "2024-09-26", time: "14:00", expiresIn: "18hrs", name: "Dr Josézinho", role: "Médico", email: "josédoutordasilva@gmail.com" },
    { date: "2024-09-25", time: "10:30", expiresIn: "10hrs", name: "Mariazinha Pacientinha", role: "Paciente", email: "mariazinha@gmail.com" },
    { date: "2024-09-26", time: "14:00", expiresIn: "18hrs", name: "Dr Josézinho", role: "Médico", email: "josédoutordasilva@gmail.com" },
    { date: "2024-09-25", time: "10:30", expiresIn: "10hrs", name: "Mariazinha Pacientinha", role: "Paciente", email: "mariazinha@gmail.com" },
    { date: "2024-09-26", time: "14:00", expiresIn: "18hrs", name: "Dr Josézinho", role: "Médico", email: "josédoutordasilva@gmail.com" }
  ];

  return (
    <Container>

      <Table>
        <THead>
          <TableRow>
            <TableHeader>Data</TableHeader>
            <TableHeader>Hora</TableHeader>
            <TableHeader>Expira em</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
        </THead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(item.date).toLocaleDateString('pt-BR')}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.expiresIn}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AdminLog;
