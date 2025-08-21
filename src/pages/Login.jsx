import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    <>
      {/* Fixed header on top */}
      <div className="fixed top-0 left-0 w-full z-50 text-amber-50">
        <Header />
      </div>

      <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
        
        {/* Background accents */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Login Card */}
        <div className="relative border border-green-500 rounded-2xl p-8 w-[380px] space-y-6 shadow-2xl bg-black/80 backdrop-blur-md z-10">
          <h2 className="text-3xl font-extrabold text-center text-green-400">Login to EMS</h2>

          {error && (
            <div className="bg-red-600/90 text-white text-sm p-3 rounded-lg border border-red-400">
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
              className="w-1/2 bg-green-600 py-3 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg"
            >
              Admin
            </button>
            <button
              onClick={() => handleLogin("employee")}
              className="w-1/2 bg-blue-600 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
            >
              Employee
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-400 hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
