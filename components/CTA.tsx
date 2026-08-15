export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
      <div className="max-w-5xl mx-auto text-center px-8">

        <span className="bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold">
          🚀 Start Today
        </span>

        <h2 className="text-5xl font-bold text-white mt-8">
          Ready to Recover Lost Revenue?
        </h2>

        <p className="text-blue-100 text-xl mt-6 max-w-3xl mx-auto">
          Let AI detect hidden revenue leaks, provide actionable insights,
          and help your business grow with confidence.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>

          <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
            Book Demo
          </button>

        </div>

      </div>
    </section>
  );
}