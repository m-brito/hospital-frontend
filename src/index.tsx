import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/pages/Login';
import { SignUp } from './components/pages/SignUp';
import { Home } from './components/pages/Home';
import { DoctorsList } from './components/pages/DoctorsList';


// Crie o root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderize seu aplicativo envolto pelo BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho do seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Aprenda mais: https://bit.ly/CRA-vitals
reportWebVitals();