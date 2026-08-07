const features = [
  {
    icon: "📊",
    title: "Revenue Analytics",
    description:
      "Track revenue trends, monitor KPIs and identify business leaks in real time.",
  },
  {
    icon: "🤖",
    title: "AI Insights",
    description:
      "AI automatically detects hidden problems and predicts business opportunities.",
  },
  {
    icon: "🚀",
    title: "Smart Recommendations",
    description:
      "Receive actionable suggestions that help recover lost revenue faster.",
  },
  {
    icon: "⚡",
    title: "Automation",
    description:
      "Automate repetitive business workflows and save valuable time.",
  },
  {
    icon: "📈",
    title: "Growth Tracking",
    description:
      "Measure business growth with visual reports and analytics.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    description:
      "Enterprise-grade authentication and secure data management.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            FEATURES
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Everything You Need
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            AI-powered tools to monitor, analyze and recover revenue before it
            impacts your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}