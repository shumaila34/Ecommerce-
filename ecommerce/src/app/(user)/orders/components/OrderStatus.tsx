const OrderStatus = ({ status }: { status: string }) => {
  const statusColors: Record<string, string> = {
    Delivered: "text-green-600",
    Pending: "text-orange-500",
    Processing:"text-pink-400"
  };

  return (
    <>
      <span className={`font-medium ${statusColors[status]}`}>{status}</span>
    </>
  );
};

export default OrderStatus;
