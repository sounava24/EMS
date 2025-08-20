import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const doLogin = (role) => {
    if (!name) return alert("Enter your name");
    login({ role, name, email });
    navigate(`/${role}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="border border-green-500 rounded-lg p-8 w-[360px] space-y-4 shadow-lg">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-full border border-green-500 bg-transparent focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email (optional)"
          className="w-full px-4 py-2 rounded-full border border-green-500 bg-transparent focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex gap-3">
          <button
            onClick={() => doLogin("admin")}
            className="w-1/2 bg-green-600 py-2 rounded-full hover:bg-green-700"
          >
            Login Admin
          </button>
          <button
            onClick={() => doLogin("employee")}
            className="w-1/2 bg-blue-600 py-2 rounded-full hover:bg-blue-700"
          >
            Login Employee
          </button>
        </div>
      </div>
    </div>
  );
}
