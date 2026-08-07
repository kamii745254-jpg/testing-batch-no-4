export default function RevenueLeakCard() {
  return (
    <div className="bg-red-500 text-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-3">
        Revenue Leak Alert 🚨
      </h2>

      <p className="mb-4">
        AI detected unusual revenue loss in Product Sales.
      </p>

      <button className="bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
        View Details
      </button>
    </div>
  );
}