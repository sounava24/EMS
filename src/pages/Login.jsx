import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (role) => {
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    try {
      await login({ email, password });
      navigate(`/${role}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <Header />
      <div className="border border-green-500 rounded-2xl p-8 w-[380px] space-y-6 shadow-xl bg-[#111]">
        <h2 className="text-2xl font-bold text-center">Login to EMS</h2>

        {error && (
          <div className="bg-red-600 text-white text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

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

        <div className="flex gap-4">
          <button
            onClick={() => handleLogin("admin")}
            className="w-1/2 bg-green-600 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
          >
            Login Admin
          </button>
          <button
            onClick={() => handleLogin("employee")}
            className="w-1/2 bg-blue-600 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            Login Employee
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-green-400 hover:underline font-medium"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
