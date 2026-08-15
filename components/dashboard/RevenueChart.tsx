export default function RevenueChart() {
  const data = [45, 70, 55, 90, 75, 110, 95];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Revenue Overview
          </h2>
          <p className="text-gray-500 mt-1">
            Weekly recovered revenue performance
          </p>
        </div>

        <button className="px-4 py-2 border rounded-xl text-sm hover:bg-gray-100 transition">
          This Week
        </button>
      </div>

      {/* Chart Area */}
      <div className="h-80 border rounded-2xl p-6 bg-gray-50">

        <div className="flex items-end justify-between h-full">

          {data.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-end h-full"
            >
              <div
                className="w-10 rounded-t-xl bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 hover:scale-105 transition-all duration-300"
                style={{
                  height: `${value * 2}px`,
                }}
              />

              <span className="mt-3 text-sm text-gray-500">
                {labels[index]}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between mt-6 text-sm text-gray-500">

        <div>
          Total Revenue
          <p className="font-bold text-xl text-gray-900">
            $124,500
          </p>
        </div>

        <div className="text-right">
          Growth
          <p className="font-bold text-xl text-green-600">
            +18%
          </p>
        </div>

      </div>
    </div>
  );
}