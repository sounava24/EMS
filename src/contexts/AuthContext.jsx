import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const register = ({ name, email, password, role, qualifications, jobTitle, jobRole, age }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // check if email already exists
    if (users.some((u) => u.email === email)) {
      throw new Error("User already exists with this email");
    }

    const newUser = { name, email, password, role, qualifications, jobTitle, jobRole, age };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // auto-login after register
    const currentUser = { name, email, role, qualifications, jobTitle, jobRole, age };
    setUser(currentUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    const currentUser = {
      name: foundUser.name,
      email,
      role: foundUser.role,
      qualifications: foundUser.qualifications,
      jobTitle: foundUser.jobTitle,
      jobRole: foundUser.jobRole,
      age: foundUser.age,
    };
    setUser(currentUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const getAllUsers = () => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, getAllUsers }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
