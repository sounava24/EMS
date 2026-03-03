import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const onLanding = location.pathname === "/";

  const handleNavClick = (section) => {
    if (onLanding) {
      scroller.scrollTo(section, {
        duration: 600,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 600,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 300);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-8 bg-surface/80 backdrop-blur-md px-10 py-3 rounded-full shadow-lg border border-border">
        {user ? (
          <>
            <Link
              to={`/${user.role}`}
              className="text-text-primary font-medium hover:text-primary transition"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="text-text-primary font-medium hover:text-primary transition"
            >
              Profile
            </Link>
            <button
              onClick={logout}
              className="bg-danger text-white px-5 py-2 rounded-full font-semibold hover:bg-danger/90 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-text-primary font-medium hover:text-primary transition"
            >
              Home
            </Link>
            <button
              onClick={() => handleNavClick("features")}
              className="text-text-primary font-medium hover:text-primary transition"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-text-primary font-medium hover:text-primary transition"
            >
              About
            </button>
            <Link
              to="/login"
              className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-hover transition"
            >
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
