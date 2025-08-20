import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-green-600 to-blue-700 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Manage Your Events <br /> The Smart Way
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          EMS that streamlines event planning, attendee management, and reporting.
        </p>
        <Link 
          to="/register"
          className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
