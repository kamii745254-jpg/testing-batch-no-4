export default function RecentActivity() {
  const activities = [
    {
      title: "Revenue leak detected",
      description: "AI found abnormal sales drop in Product A.",
      time: "2 min ago",
      color: "bg-red-100",
      icon: "🚨",
    },
    {
      title: "Revenue recovered",
      description: "$2,450 recovered after campaign optimization.",
      time: "15 min ago",
      color: "bg-green-100",
      icon: "💰",
    },
    {
      title: "AI Report Generated",
      description: "Weekly revenue analysis completed.",
      time: "1 hour ago",
      color: "bg-blue-100",
      icon: "🤖",
    },
    {
      title: "New User Login",
      description: "Admin logged into dashboard.",
      time: "3 hours ago",
      color: "bg-yellow-100",
      icon: "👤",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-xl border hover:bg-gray-50 transition"
          >
            <div className="flex gap-4 items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>

            <span className="text-sm text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}