export default function TopProducts() {
  const products = [
    {
      name: "Premium Plan",
      revenue: "$45,000",
      growth: "+18%",
      status: "🟢",
    },
    {
      name: "Enterprise Plan",
      revenue: "$32,500",
      growth: "+12%",
      status: "🟢",
    },
    {
      name: "Business Plan",
      revenue: "$21,900",
      growth: "+8%",
      status: "🟢",
    },
    {
      name: "Starter Plan",
      revenue: "$11,300",
      growth: "-3%",
      status: "🔴",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Top Products
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3">Product</th>
            <th className="pb-3">Revenue</th>
            <th className="pb-3">Growth</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4">{product.name}</td>
              <td>{product.revenue}</td>
              <td>{product.growth}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}