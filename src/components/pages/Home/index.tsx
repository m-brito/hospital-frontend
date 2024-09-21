import { useLogin } from '../Login/hooks/useLogin';
import {
  Container,
  Content,
  Paragraph,
  Title,
} from "./styles";


export const Home = () => {
  const { user } = useLogin();

  return (
    <Container>
      <Content>
        {user && user.role === "admin" && <p>Área do Administrador</p>}
        {user && user.role === "patient" && <p>Área do Paciente</p>}
        {user && user.role === "doctor" && <p>Área do Médico</p>}
        <Title>Bem-vindo ao Sistema Hospitalar</Title>
        <Paragraph>Escolha uma opção no menu lateral para começar.</Paragraph>
      </Content>
    </Container>
  );
};

export default Home;
