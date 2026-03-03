import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

export default function Profile() {
  const { user, register } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [qualifications, setQualifications] = useState(user?.qualifications || "");
  const [jobTitle, setJobTitle] = useState(user?.jobTitle || "");
  const [jobRole, setJobRole] = useState(user?.jobRole || "");
  const [age, setAge] = useState(user?.age || "");
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u) => u.email === user.email);

      if (userIndex > -1) {
        const updatedUser = {
          ...users[userIndex],
          name,
          email,
          qualifications,
          jobTitle,
          jobRole,
          age,
        };

        users[userIndex] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setMessage("Profile updated successfully!");
      } else {
        setMessage("User not found.");
      }
    } catch (err) {
      setMessage("Failed to update profile.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-6 pt-20">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Edit Profile</h2>
          {message && (
            <div className="bg-green-600/90 text-white text-sm p-3 rounded-lg border border-green-400 mb-4">
              {message}
            </div>
          )}
          <form className="space-y-4" onSubmit={handleUpdate}>
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
              disabled // Prevent email changes for now
            />
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
            <button
              type="submit"
              className="w-full bg-green-600 py-3 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
