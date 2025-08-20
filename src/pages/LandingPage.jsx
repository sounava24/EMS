import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <Hero />
      
      <Element name="features">
        <Features />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="testimonials">
        <Testimonials />
      </Element>

      <CTA />
      <Footer />
    </div>
  );
}
