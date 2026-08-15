"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import AIInsights from "@/components/dashboard/AIInsights";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TopProducts from "@/components/dashboard/TopProducts";
import RevenueLeakCard from "@/components/dashboard/RevenueLeakCard";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");

    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>

          <AIInsights />
        </div>

        <div className="mt-6">
          <RecentActivity />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <TopProducts />
          </div>

          <RevenueLeakCard />
        </div>
      </main>
    </div>
  );
}