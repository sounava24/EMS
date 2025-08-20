import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-6 text-center border-t border-green-500">
      <p>© {new Date().getFullYear()} EMS Platform. All rights reserved.</p>
    </footer>
  );
}
