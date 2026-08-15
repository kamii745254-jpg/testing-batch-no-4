"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    alert("Logged out successfully!");
    router.push("/");
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back! Here's your business overview.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-white shadow px-4 py-2 rounded-xl hover:bg-gray-100 transition">
          🔔
        </button>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}