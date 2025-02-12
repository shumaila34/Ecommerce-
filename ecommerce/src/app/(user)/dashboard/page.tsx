import { RecentOrders } from "./components/recent-order"
import { DashboardStats } from "./components/stats"

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Dashboard
        </h1>
      </div>
      <DashboardStats />
      <RecentOrders />
    </div>
  )
}

export default DashboardPage