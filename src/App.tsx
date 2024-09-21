import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/pages/Login';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp'; 

const App: React.FC = () => {
  return (
    <Routes>
      {/* Redireciona a rota raiz (/) para a página de login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
