import { useState, useCallback } from "react";

const AUTH_KEY = "portfolio_auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(AUTH_KEY) === "true";
  });

  const login = useCallback(() => {
    const password = prompt("Mot de passe admin :");
    // Simple local auth — replace with real auth later
    if (password === "admin2025") {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
}
