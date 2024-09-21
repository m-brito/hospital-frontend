import { useLogin } from '../Login/hooks/useLogin';

export const Home = () => {
  const { user } = useLogin();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Bem-vindo ao Sistema!</h1>
        {user && user.role === "admin" && <p>Área do Administrador</p>}
        {user && user.role === "patient" && <p>Área do Paciente</p>}
        {user && user.role === "doctor" && <p>Área do Médico</p>}
      </div>
    </div>
  );
};

export default Home;
