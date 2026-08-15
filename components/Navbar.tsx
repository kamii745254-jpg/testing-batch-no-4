"use client";

import Link from "next/link";

type NavbarProps = {
  onLoginClick?: () => void;
};

export default function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            AI
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Revenue Recovery
            </h1>

            <p className="text-xs text-gray-500">
              AI Powered Analytics
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onLoginClick}
            className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Login
          </button>

          <button
            onClick={onLoginClick}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}