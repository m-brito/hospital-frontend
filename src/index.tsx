import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'; // Certifique-se de que você tenha um arquivo App.js que configure as rotas

// Crie o root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderize seu aplicativo envolto pelo BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Renderiza o componente App que contém as rotas */}
    </BrowserRouter>
  </React.StrictMode>
);

// Metragem de desempenho
reportWebVitals();
