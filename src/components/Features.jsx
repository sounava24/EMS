import React from "react";
import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    { title: "Event Scheduling", desc: "Plan, organize, and publish events with ease." },
    { title: "Attendee Management", desc: "Track registrations and engagement in real-time." },
    { title: "Automated Reports", desc: "Get actionable insights instantly after events." },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-[#111] border border-green-500 shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
