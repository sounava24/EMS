import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "John Doe", quote: "This EMS saved us hours of work!" },
    { name: "Jane Smith", quote: "Our events run smoother than ever!" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111] border border-green-500 shadow-md rounded-2xl p-6">
              <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
              <h4 className="text-lg font-semibold text-green-400">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
