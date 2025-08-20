import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="bg-[#111] py-20 border-t border-green-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Why Choose Our EMS?</h2>
        <p className="text-lg text-gray-300 mb-8">
          We designed our Event Management System to help teams coordinate effortlessly. 
          Whether it's a small seminar or a large conference, everything is managed in one place.
        </p>
        <Link 
          to="/register"
          className="border border-green-500 text-green-400 px-6 py-3 rounded-full font-medium hover:bg-green-500 hover:text-white transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
