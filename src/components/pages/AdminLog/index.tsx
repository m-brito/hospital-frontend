import { useLogs } from "./hooks/useLogs";
import {
  Container,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  THead,
} from "./styles";

export const AdminLog: React.FC = () => {
  const { logs } = useLogs();

  const calculateExpiration = (date: Date, time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const startDate = new Date(date);
    startDate.setHours(hours);
    startDate.setMinutes(minutes);
    startDate.setSeconds(0);

    const expiresAt = new Date(startDate);
    expiresAt.setHours(expiresAt.getHours() + 24);

    const now = new Date();

    const timeDiffMs = expiresAt.getTime() - now.getTime();

    const hoursLeft = Math.floor(timeDiffMs / (1000 * 60 * 60));
    const minutesLeft = Math.floor(
      (timeDiffMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsLeft = Math.floor((timeDiffMs % (1000 * 60)) / 1000);

    return `${hoursLeft}h ${String(minutesLeft).padStart(2, "0")}m ${String(
      secondsLeft
    ).padStart(2, "0")}s`;
  };

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
          {logs.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {new Date(item.date).toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{calculateExpiration(item.date, item.time)}</TableCell>
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
