import { Package, Clock, Truck, CheckCircle } from "lucide-react";

export function OrderStatus() {
  const statuses = [
    {
      title: "Total Orders",
      count: "654",
      icon: <Package className="w-5 h-5 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Orders Pending",
      count: "207",
      icon: <Clock className="w-5 h-5 text-yellow-600" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      title: "Orders Processing",
      count: "93",
      icon: <Truck className="w-5 h-5 text-green-600" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Orders Delivered",
      count: "259",
      icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statuses.map((status) => (
        <div
          key={status.title}
          className={`p-4 rounded-lg ${status.bgColor} border ${status.borderColor} flex items-center gap-4 shadow-sm`}
        >
          <div className={`p-3 rounded-full bg-white shadow-sm`}>
            {status.icon}
          </div>
          <div>
            <p className="text-sm text-gray-600">{status.title}</p>
            <p className="text-xl font-bold text-gray-900">{status.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
