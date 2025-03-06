"use client";
import { useParams } from "next/navigation";
import { orderDetails as order } from "../data/detailsData";

const OrderDetails = () => {
  const params = useParams();
  const orderId = params.id; // Get the order ID from URL
  const id = orderId;
  // Dummy order data

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Success Message */}
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          <strong>Thank You {order.customer.name}</strong>, Your order has been
          received!
        </div>

        {/* Invoice Header */}
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">INVOICE</h2>
          <p className="text-gray-600 text-sm">
            Status:{" "}
            <span className="text-orange-500 font-bold text-sm">
              {order.status}
            </span>
          </p>
        </div>

        {/* Invoice Details */}
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-600">DATE</p>
            <p className="font-semibold">{order.date}</p>
          </div>
          <div>
            <p className="text-gray-600">INVOICE NO.</p>
            <p className="font-semibold">{order.invoiceNo}</p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h3 className="font-semibold text-gray-700">INVOICE TO:</h3>
          <p>{order.customer.name}</p>
          <p className="text-gray-600">{order.customer.email}</p>
          <p className="text-gray-600">{order.customer.phone}</p>
          <p className="text-gray-600">{order.customer.address}</p>
        </div>

        {/* Order Items Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-orange-400 text-white text-sm">
            <tr>
              <th className="p-3 border">SR.</th>
              <th className="p-3 border">PRODUCT NAME</th>
              <th className="p-3 border">QUANTITY</th>
              <th className="p-3 border">ITEM PRICE</th>
              <th className="p-3 border">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={item.id} className="border-t text-sm">
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.quantity}</td>
                <td className="p-3 border font-bold">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-3 border font-bold text-red-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="text-right mt-6">
          <p className="text-sm font-semibold">
            Total: $
            {order.items
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
