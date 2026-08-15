export default function StatsCards() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,500",
      icon: "💰",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Recovered Revenue",
      value: "$18,900",
      icon: "📈",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Revenue Leaks",
      value: "23",
      icon: "⚠️",
      color: "from-red-500 to-red-700",
    },
    {
      title: "AI Accuracy",
      value: "96%",
      icon: "🤖",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
        >
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl text-white`}
          >
            {item.icon}
          </div>

          <p className="text-gray-500 mt-5">{item.title}</p>

          <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}