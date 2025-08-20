import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

export default function App() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Landing page at root */}
        <Route
          index
          element={
            <PageWrapper>
              {!user ? <LandingPage /> : <Navigate to={`/${user.role}`} replace />}
            </PageWrapper>
          }
        />

        {/* Login page */}
        <Route
          path="/login"
          element={
            <PageWrapper>
              {!user ? <Login /> : <Navigate to={`/${user.role}`} replace />}
            </PageWrapper>
          }
        />

        {/* Register page */}
        <Route
          path="/register"
          element={
            <PageWrapper>
              {!user ? <Register /> : <Navigate to={`/${user.role}`} replace />}
            </PageWrapper>
          }
        />

        {/* Admin dashboard */}
        <Route
          path="/admin"
          element={
            <PageWrapper>
              {user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" replace />}
            </PageWrapper>
          }
        />

        {/* Employee dashboard */}
        <Route
          path="/employee"
          element={
            <PageWrapper>
              {user?.role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
            </PageWrapper>
          }
        />

        {/* Catch-all route */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <Navigate to="/" replace />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
