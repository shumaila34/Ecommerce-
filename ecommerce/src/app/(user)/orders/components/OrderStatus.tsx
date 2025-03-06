import { FC } from "react";
import { OrderStatusProps } from "./Orders.type";

const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  const statusColors: Record<string, string> = {
    Delivered: "text-green-600",
    Pending: "text-orange-500",
    Processing: "text-pink-400",
  };

  return (
    <>
      <span className={`font-medium ${statusColors[status]}`}>{status}</span>
    </>
  );
};

export default OrderStatus;
