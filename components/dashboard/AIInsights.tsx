export default function AIInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 h-80">
      <h2 className="text-2xl font-bold mb-4">
        AI Insights
      </h2>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-xl">
          Revenue leak detected in Product Sales.
        </div>

        <div className="bg-green-50 p-4 rounded-xl">
          Recovery rate improved by 12%.
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl">
          Marketing campaign needs optimization.
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          High refund requests detected.
        </div>
      </div>
    </div>
  );
}