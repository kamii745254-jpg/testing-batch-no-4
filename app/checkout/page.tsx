"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const total = cart.reduce(
    (sum, product) => sum + Number(product.price),
    0
  );

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(
      (product) => product.id !== id
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = async () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setLoading(true);

    // Demo checkout processing
    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    localStorage.removeItem("cart");
    setCart([]);
    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-lg w-full text-center">

          <div className="text-6xl mb-5">
            🎉
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Order Confirmed!
          </h1>

          <p className="text-gray-500 mt-3">
            Thank you, {name}! Your order has been successfully
            placed.
          </p>

          <p className="text-gray-500 mt-2">
            Confirmation will be sent to {email}.
          </p>

          <Link
            href="/store"
            className="inline-block mt-7 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Back to Store
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

          <Link
            href="/store"
            className="text-2xl font-bold text-blue-600"
          >
            AI Revenue
          </Link>

          <Link
            href="/store"
            className="text-gray-600 hover:text-blue-600"
          >
            ← Back to Store
          </Link>

        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-gray-900">
          Checkout
        </h1>

        <p className="text-gray-500 mt-2">
          Complete your order below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

          {/* Customer Details */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-7">

            <h2 className="text-2xl font-bold">
              Customer Information
            </h2>

            <div className="mt-6">

              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div className="mt-5">

              <label className="block font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Cart Items */}
            <h2 className="text-2xl font-bold mt-10">
              Selected Products
            </h2>

            <div className="mt-5 space-y-4">

              {cart.length === 0 ? (
                <p className="text-gray-500">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    className="border rounded-xl p-4 flex justify-between items-center"
                  >

                    <div>
                      <h3 className="font-bold">
                        {product.name}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {product.description}
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="font-bold">
                        ${product.price}
                      </p>

                      <button
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className="text-red-500 text-sm mt-1"
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                ))
              )}

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-7 h-fit">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6 text-gray-600">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="border-t my-5" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span>
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading || cart.length === 0}
              className="w-full mt-7 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-300"
            >
              {loading
                ? "Processing..."
                : "Place Order"}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Demo checkout — no real payment is processed.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}