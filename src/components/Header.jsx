import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Header() {
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
      <nav className="flex items-center gap-8 bg-black/70 backdrop-blur-md px-10 py-3 rounded-full shadow-lg border border-gray-700">
        <Link
          to="/"
          className="text-white font-medium hover:text-green-400 transition"
        >
          Home
        </Link>
        <button
          onClick={() => handleNavClick("features")}
          className="text-white font-medium hover:text-green-400 transition"
        >
          Features
        </button>
        <button
          onClick={() => handleNavClick("about")}
          className="text-white font-medium hover:text-green-400 transition"
        >
          About
        </button>
        <button
          onClick={() => handleNavClick("testimonials")}
          className="text-white font-medium hover:text-green-400 transition"
        >
          Testimonials
        </button>
        <Link
          to="/login"
          className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
