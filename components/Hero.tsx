export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            🚀 AI Powered Revenue Intelligence
          </span>

          <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
            Recover Lost Revenue
            <span className="text-blue-600"> Before It Becomes Loss</span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            AI automatically detects revenue leaks, predicts customer behavior,
            identifies hidden business opportunities and gives actionable
            recommendations to maximize your business growth.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition">
              Live Demo
            </button>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                98%
              </h2>

              <p className="text-gray-600">
                Prediction Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                +45%
              </h2>

              <p className="text-gray-600">
                Revenue Growth
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                24/7
              </h2>

              <p className="text-gray-600">
                AI Monitoring
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Dashboard Preview
          </h2>

          <div className="space-y-6">

            <div className="bg-blue-600 text-white rounded-2xl p-6">
              <p>Total Revenue</p>

              <h1 className="text-4xl font-bold mt-2">
                $48,250
              </h1>

              <p className="mt-2 text-blue-100">
                ↑ 18% this month
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-gray-100 rounded-xl p-5">
                <h3 className="font-bold">
                  Lost Revenue
                </h3>

                <p className="text-red-500 text-2xl font-bold mt-2">
                  $2,340
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-5">
                <h3 className="font-bold">
                  AI Score
                </h3>

                <p className="text-green-600 text-2xl font-bold mt-2">
                  92%
                </p>
              </div>

            </div>

            <div className="bg-gray-100 rounded-xl p-6">

              <h3 className="font-bold mb-3">
                AI Recommendation
              </h3>

              <p className="text-gray-600">
                Recover abandoned carts using automated email campaigns to
                increase revenue by an estimated 12%.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}