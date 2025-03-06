<<<<<<< HEAD
"use client"

import { useState, useEffect } from "react"
import { RecentOrders } from "./components/recent-order"
import { DashboardStats } from "./components/stats"
import { DashboardStatsSkeleton } from "./components/stat-skeleton"
import { RecentOrdersSkeleton } from "./components/recent-orders-skeleton"

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Dashboard
        </h1>
      </div>
      {isLoading ? <DashboardStatsSkeleton /> : <DashboardStats />}
      {isLoading ? <RecentOrdersSkeleton /> : <RecentOrders />}
    </div>
  )
}

export default DashboardPage
=======
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <h1>Coming Soon</h1>
        </div>
    );
};

export default DashboardPage;
>>>>>>> login-and-Dashboard
