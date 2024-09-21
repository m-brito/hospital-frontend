import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Login } from "./components/pages/Login";
import { SignUp } from "./components/pages/SignUp";
import { Home } from "./components/pages/Home";
import { DoctorsList } from "./components/pages/DoctorsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doctors" element={<DoctorsList />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();