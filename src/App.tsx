import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/pages/Login';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp'; 
import { Layout } from './components/Layout/layout';
import { DoctorsList } from './components/pages/DoctorsList';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="doctors" element={<DoctorsList />} />
      </Route>
    </Routes>
  );
};

export default App;
