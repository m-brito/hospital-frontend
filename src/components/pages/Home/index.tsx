import React from 'react';
import { SideBarGenerico } from '../../commons/toolkit/SideBarGenerico'; 
import { useLogin } from '../Login/hooks/useLogin'; // Use seu hook de login

const Home = () => {
  const { user } = useLogin(); // Puxe as informações do usuário

  return (
    <div style={{ display: 'flex' }}>
      <SideBarGenerico /> {/* Sidebar para todos os usuários */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Conteúdo principal */}
        <h1>Bem-vindo ao Sistema!</h1>
        {user && user.isAdmin && <p>Área do Administrador</p>}
        {user && user.isPaciente && <p>Área do Paciente</p>}
        {user && user.isDoctor && <p>Área do Médico</p>}
      </div>
    </div>
  );
};

export default Home;
