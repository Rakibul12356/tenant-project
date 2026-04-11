import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

// Dummy users database - Bariwala Management System
const DUMMY_USERS = [
  {
    id: 1,
    name: "Mohammad Karim",
    email: "owner@demo.com",
    password: "owner123",
    role: "owner",
    avatar: "MK",
    joinedDate: "Jan 2024",
    properties: 5,
    tenants: 8,
    revenue: "৳ 85,000",
  },
  {
    id: 2,
    name: "Rafikul Islam",
    email: "tenant@demo.com",
    password: "tenant123",
    role: "tenant",
    avatar: "RI",
    joinedDate: "Feb 2024",
    propertyName: "Uttara House - Flat 5/A",
    rentAmount: "৳ 15,000",
  },
  {
    id: 3,
    name: "Admin System",
    email: "admin@demo.com",
    password: "admin123",
    role: "admin",
    avatar: "AS",
    joinedDate: "Dec 2023",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("auth_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 900));

    const found = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      localStorage.setItem("auth_user", JSON.stringify(safeUser));
      toast.success(`Welcome back, ${safeUser.name}!`);
      setLoading(false);
      return { success: true, user: safeUser };
    } else {
      setLoading(false);
      toast.error("Invalid email or password");
      return { success: false };
    }
  };

  const register = async (name, email, password, accountType = "tenant", referralCode = "") => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    const exists = DUMMY_USERS.find((u) => u.email === email);
    if (exists) {
      setLoading(false);
      toast.error("Email already registered");
      return { success: false };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      role: accountType === "owner" ? "owner" : "tenant",
      avatar: name.slice(0, 2).toUpperCase(),
      joinedDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };

    if (accountType === "owner") {
      newUser.properties = 0;
      newUser.tenants = 0;
      newUser.revenue = "৳ 0";
    } else {
      newUser.propertyName = "Pending";
      newUser.rentAmount = "৳ 0";
    }

    setUser(newUser);
    localStorage.setItem("auth_user", JSON.stringify(newUser));
    toast.success(`${accountType === "owner" ? "Owner" : "Tenant"} account created successfully! Welcome 🎉`);
    setLoading(false);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    toast.info("Logged out successfully");
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem("auth_user", JSON.stringify(updated));
    toast.success("Profile updated!");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
