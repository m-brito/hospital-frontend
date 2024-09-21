import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/Login';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp'; 


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
