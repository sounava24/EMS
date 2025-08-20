import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-green-600 text-white py-8">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Ready to manage your events better?</h2>
        <Link 
          to="/register"
          className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
