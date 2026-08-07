"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-400">
          AI Revenue
        </h1>
        <p className="text-sm text-gray-400">
          Recovery Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
          📊 Dashboard
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
          📈 Analytics
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
          💰 Revenue
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
          🤖 AI Insights
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
          ⚙️ Settings
        </button>
      </nav>

      {/* Bottom */}
      <div className="mt-16 border-t border-slate-700 pt-6">
        <button className="w-full px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </aside>
  );
}
