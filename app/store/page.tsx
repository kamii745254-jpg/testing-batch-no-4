"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
};

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching products from Supabase...");

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      console.log("SUPABASE PRODUCTS:", data);
      console.log("SUPABASE ERROR:", error);

      if (error) {
        console.error("Supabase error:", error);
        setError(error.message);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("cart");
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            AI Revenue
          </Link>

          <div className="flex items-center gap-6">

            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/store"
              className="text-blue-600 font-semibold"
            >
              Store
            </Link>

            <Link
              href="/checkout"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700"
            >
              Cart ({cart.length})
            </Link>

          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">

        <p className="text-blue-600 font-semibold mb-3">
          AI REVENUE SOLUTIONS
        </p>

        <h1 className="text-5xl font-bold text-gray-900">
          Choose Your Solution
        </h1>

        <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
          Powerful AI tools to help you understand your revenue,
          detect leaks, and grow your business.
        </p>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        {loading && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              Loading products...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 font-semibold">
              Supabase Error:
            </p>

            <p className="text-red-500 mt-2">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              No products available.
            </p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-sm border p-7 hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-6">
                  🤖
                </div>

                {product.category && (
                  <span className="text-sm text-blue-600 font-semibold">
                    {product.category}
                  </span>
                )}

                <h2 className="text-2xl font-bold text-gray-900 mt-2">
                  {product.name}
                </h2>

                <p className="text-gray-500 mt-3 min-h-[50px]">
                  {product.description}
                </p>

                <div className="mt-6">

                  <span className="text-4xl font-bold text-gray-900">
                    ${Number(product.price).toFixed(2)}
                  </span>

                  <span className="text-gray-500">
                    /month
                  </span>

                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-7 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}