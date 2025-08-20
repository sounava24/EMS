import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee"); // default role
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      register({ name, email, password, role });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="border border-green-500 rounded-2xl p-8 w-[400px] space-y-6 shadow-xl bg-[#111]">
        <h2 className="text-2xl font-bold text-center">Register to EMS</h2>

        {error && (
          <div className="bg-red-600 text-white text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="employee" className="bg-black">
              Employee
            </option>
            <option value="admin" className="bg-black">
              Admin
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a
            href="/"
            className="text-green-400 hover:underline font-medium"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
