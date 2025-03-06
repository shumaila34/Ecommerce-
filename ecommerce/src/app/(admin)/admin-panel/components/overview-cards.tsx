import type React from "react";
import {
  ShoppingCart,
  TrendingUp,
  Users,
  DollarSign,
  BarChart,
} from "lucide-react";

interface OverviewCard {
  title: string;
  amount: string;
  icon: React.ReactNode;
  className: string;
}

export function OverviewCards() {
  const cards: OverviewCard[] = [
    {
      title: "Today Orders",
      amount: "$1171.41",
      icon: <ShoppingCart className="w-6 h-6" />,
      className: "bg-blue-500 text-white",
    },
    {
      title: "Yesterday Orders",
      amount: "$1,042.00",
      icon: <TrendingUp className="w-6 h-6" />,
      className: "bg-green-500 text-white",
    },
    {
      title: "This Month",
      amount: "$35,715.90",
      icon: <Users className="w-6 h-6" />,
      className: "bg-yellow-500 text-white",
    },
    {
      title: "Last Month",
      amount: "$22,613.70",
      icon: <DollarSign className="w-6 h-6" />,
      className: "bg-purple-500 text-white",
    },
    {
      title: "All-Time Sales",
      amount: "$452,848.91",
      icon: <BarChart className="w-6 h-6" />,
      className: "bg-red-500 text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`p-6 rounded-lg shadow-sm ${card.className}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">{card.title}</p>
              <h3 className="text-2xl font-bold mt-1">{card.amount}</h3>
            </div>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
