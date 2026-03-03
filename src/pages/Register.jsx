import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee"); // default role
  const [qualifications, setQualifications] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !qualifications || !jobTitle || !jobRole || !age) {
      setError("All fields are required");
      return;
    }

    try {
      register({ name, email, password, role, qualifications, jobTitle, jobRole, age });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50 text-amber-50">
        <Header />
      </div>

      <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Register Card */}
        <div className="relative border border-green-500 rounded-2xl p-8 w-full max-w-2xl space-y-6 shadow-2xl bg-black/80 backdrop-blur-md z-10">
          <h2 className="text-3xl font-extrabold text-center text-green-400">
            Register to EMS
          </h2>

          {error && (
            <div className="bg-red-600/90 text-white text-sm p-3 rounded-lg border border-red-400">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your qualifications"
                className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your job title"
                className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your job role"
                className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <select
              className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="employee" className="bg-black">Employee</option>
              <option value="admin" className="bg-black">Admin</option>
            </select>

            <button
              type="submit"
              className="w-full bg-green-600 py-3 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
