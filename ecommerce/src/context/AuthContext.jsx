import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on page load
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const savedUser = localStorage.getItem("username");

    if (token && savedUser) {
      setIsLoggedIn(true);
      setUsername(savedUser);
    }
  }, []);

  // Login handler (used inside Login.jsx)
  function login(user, token) {
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("username", user);

    setIsLoggedIn(true);
    setUsername(user);
  }

  // Logout handler
  function logout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");

    setIsLoggedIn(false);
    setUsername("");

    window.location.href = "/";
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
