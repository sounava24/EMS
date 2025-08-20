import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={!user ? <Login /> : <Navigate to={`/${user.role}`} />}
      />
      <Route
        path="/admin"
        element={user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/employee"
        element={user?.role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
