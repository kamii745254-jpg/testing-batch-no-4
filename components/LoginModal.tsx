"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({
  isOpen,
  onClose,
}: Props) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        email === "demo@airevenue.com" &&
        password === "12345678"
      ) {
        localStorage.setItem("isAuthenticated", "true");
        alert("Login Successful 🎉");
        onClose();
        router.push("/dashboard");
      } else {
        setError("Invalid email or password.");
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-[430px] p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto">
          AI
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mt-6">
          Welcome Back
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Sign in to AI Revenue Recovery
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-3 mt-8 outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative mt-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border rounded-xl p-3 pr-20 outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-blue-600 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-600 text-sm mt-3">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded-xl py-3 mt-6 hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-gray-100 rounded-xl text-sm">
          <p className="font-semibold mb-2">
            Demo Credentials
          </p>

          <p>Email: demo@airevenue.com</p>
          <p>Password: 12345678</p>
        </div>

      </div>
    </div>
  );
}