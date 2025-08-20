import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const register = ({ name, email, password, role }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // check if email already exists
    if (users.some((u) => u.email === email)) {
      throw new Error("User already exists with this email");
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // auto-login after register
    setUser({ name, email, role });
    localStorage.setItem("currentUser", JSON.stringify({ name, email, role }));
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    setUser({ name: foundUser.name, email, role: foundUser.role });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ name: foundUser.name, email, role: foundUser.role })
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
