import { CheckCircle, Clock, RefreshCcw, ShoppingCart } from "lucide-react"

const stats = [
  {
    title: "Total Orders",
    value: "574",
    icon: ShoppingCart,
    className: "bg-pink-50 text-pink-600",
  },
  {
    title: "Pending Orders",
    value: "180",
    icon: Clock,
    className: "bg-orange-50 text-orange-600",
  },
  {
    title: "Processing Order",
    value: "79",
    icon: RefreshCcw,
    className: "bg-blue-50 text-blue-600",
  },
  {
    title: "Complete Orders",
    value: "240",
    icon: CheckCircle,
    className: "bg-green-50 text-green-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.title} className="flex items-center gap-4 rounded-lg border bg-white p-4">
          <div className={`rounded-full p-3 ${stat.className}`}>
            <stat.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

