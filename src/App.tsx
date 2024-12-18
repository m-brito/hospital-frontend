import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/Login";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import { Layout } from "./components/Layout/layout";
import { DoctorsList } from "./components/pages/DoctorsList";
import RequireAuth from "./components/auth/RequireAuth";
import Unauthorized from "./components/pages/ErrorPages/Unauthorized";
import NotFound from "./components/pages/ErrorPages/NotFound";
import AdminLog from "./components/pages/AdminLog";
import PatientExams from "./components/pages/PatientExams";
import RegisterExam from "./components/pages/RegisterExam";
import { Schedules } from "./components/pages/Schedules";
import { UserManagement } from "./components/pages/UserManagement";

const Roles = {
  ADMIN: "admin",
  PATIENT: "patient",
  DOCTOR: "doctor",
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="userManagment" element={<UserManagement />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="/" element={<Layout />}>
        <Route
          element={
            <RequireAuth
              allowedRoles={[Roles.PATIENT, Roles.DOCTOR, Roles.ADMIN]}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="doctors" element={<DoctorsList />} />
          <Route path="exams" element={<PatientExams />} />
          <Route path="appointments" element={<Schedules />} />
        </Route>
        <Route
          element={<RequireAuth allowedRoles={[Roles.DOCTOR, Roles.ADMIN]} />}
        >
          <Route path="appointments/:id" element={<RegisterExam />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[Roles.ADMIN]} />}>
          <Route path="log" element={<AdminLog />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
