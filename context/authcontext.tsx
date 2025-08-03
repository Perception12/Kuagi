// src/context/AuthContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

type User = {
  id: string;
  email: string;
  image_url?: string;
};

type AuthContextType = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  setAuth: (token: string, user: User) => void;
  login: (params: { userData: User; token: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const setAuth = (token: string, user: User) => {
    setToken(token);
    setUser(user);
    setIsAuthenticated(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
      localStorage.setItem("auth_user", JSON.stringify(user));
    }
  };

  useEffect(() => {
    // Initialize state from localStorage on component mount (client-side)
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("authUser");
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Update localStorage when token or user changes
    if (typeof window !== "undefined") {
      if (token && user) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
      }
    }
  }, [token, user]);

  interface LoginParams {
    userData: User;
    token: string;
  }

  const login = ({ userData, token }: LoginParams): void => {
    setUser(userData);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, loading, setAuth, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
