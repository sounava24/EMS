import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <header className="w-full bg-[#111] border-b border-green-500 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold text-green-400">EMS Platform</h1>
        <nav className="flex gap-6">
          <RouterLink to="/" className="hover:text-green-400 transition">Home</RouterLink>
          
          <ScrollLink 
            to="features" 
            smooth={true} 
            duration={600} 
            offset={-80} 
            className="hover:text-green-400 transition cursor-pointer"
          >
            Features
          </ScrollLink>

          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={600} 
            offset={-80}
            className="hover:text-green-400 transition cursor-pointer"
          >
            About
          </ScrollLink>

          <ScrollLink 
            to="testimonials" 
            smooth={true} 
            duration={600} 
            offset={-80}
            className="hover:text-green-400 transition cursor-pointer"
          >
            Testimonials
          </ScrollLink>

          <RouterLink 
            to="/login" 
            className="bg-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Login
          </RouterLink>
        </nav>
      </div>
    </header>
  );
}
