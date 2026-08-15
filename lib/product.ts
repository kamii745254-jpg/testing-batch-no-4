export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "AI Revenue Analytics",
    description: "Advanced analytics to track and recover lost revenue.",
    price: 99,
    category: "Analytics",
    emoji: "📊",
  },
  {
    id: 2,
    name: "Revenue Recovery Pro",
    description: "Automatically identify and recover potential revenue leaks.",
    price: 149,
    category: "Recovery",
    emoji: "💰",
  },
  {
    id: 3,
    name: "AI Business Insights",
    description: "Get intelligent insights and recommendations for your business.",
    price: 79,
    category: "AI Insights",
    emoji: "🤖",
  },
  {
    id: 4,
    name: "Premium Dashboard",
    description: "Complete business dashboard with advanced reporting.",
    price: 199,
    category: "Dashboard",
    emoji: "📈",
  },
];