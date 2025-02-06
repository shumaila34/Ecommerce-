"use client";
import { orders } from "../data/fakeOrders";
import OrderStatus from "./OrderStatus";
import Link from "next/link";

const OrderTable = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-orange-500">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">ORDER TIME</th>
                <th className="p-3 text-left">METHOD</th>
                <th className="p-3 text-left">STATUS</th>
                <th className="p-3 text-left">TOTAL</th>
                <th className="p-3 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.orderTime}</td>
                  <td className="p-3">{order.method}</td>
                  <td className="p-3">
                    <OrderStatus  status={order.status} />
                  </td>
                  <td className="p-3">${order.total.toFixed(2)}</td>
                  <td className="p-3">
                    <Link href={`/orders/${order.id}`}>
                      <button className="bg-green-600 text-white px-3 py-1 rounded">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
