import { OverviewCards } from "./components/overview-cards";
import { OrderStatus } from "./components/order-status";
import { OrdersTable } from "./components/orders-table";
import { LineChart, PieChart } from "./components/charts";

export default function Dashboard() {
    return(
        <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-black">Dashboard Overview</h1>

            <OverviewCards />

            <OrderStatus />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Weekly Sales</h2>
                    <LineChart />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Best Selling Products</h2>
                    <PieChart />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-700">Recent Orders</h2>
                <OrdersTable />
            </div>
        </div>

    )
}