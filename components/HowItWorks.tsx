const steps = [
  {
    number: "01",
    title: "Connect Your Business",
    description:
      "Securely connect your business data to start AI-powered analysis.",
  },
  {
    number: "02",
    title: "AI Analyzes Revenue",
    description:
      "Our AI identifies revenue leaks, customer trends and business risks.",
  },
  {
    number: "03",
    title: "Smart Recommendations",
    description:
      "Receive personalized recommendations to recover lost revenue.",
  },
  {
    number: "04",
    title: "Track Growth",
    description:
      "Monitor your business improvements with live analytics and reports.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            PROCESS
          </p>

          <h2 className="text-5xl font-bold mt-3">
            How It Works
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Start recovering lost revenue in four simple AI-powered steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}