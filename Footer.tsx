export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-14">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Revenue Recovery
          </h2>

          <p className="mt-4 text-gray-400">
            AI-powered platform helping businesses detect revenue leaks,
            analyze performance and maximize growth.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>

          <ul className="space-y-2">
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>AI Insights</li>
            <li>Reports</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>

          <ul className="space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>

          <p>Email: support@airevenue.com</p>

          <p className="mt-2">
            © 2026 AI Revenue Recovery
          </p>
        </div>

      </div>
    </footer>
  );
}