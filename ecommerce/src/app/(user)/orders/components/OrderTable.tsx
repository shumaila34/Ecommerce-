// "use client";
// import { orders } from "../data/fakeOrders";
// import OrderStatus from "./OrderStatus";
// import Link from "next/link";

// const OrderTable = () => {
//   return (
//     <>
//       <div className="p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">My Orders</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200">
//             <thead>
//               <tr className="bg-orange-500">
//                 <th className="p-3 text-left">ID</th>
//                 <th className="p-3 text-left">ORDER TIME</th>
//                 <th className="p-3 text-left">METHOD</th>
//                 <th className="p-3 text-left">STATUS</th>
//                 <th className="p-3 text-left">TOTAL</th>
//                 <th className="p-3 text-left">ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id} className="border-t">
//                   <td className="p-3">{order.id}</td>
//                   <td className="p-3">{order.orderTime}</td>
//                   <td className="p-3">{order.method}</td>
//                   <td className="p-3">
//                     <OrderStatus  status={order.status} />
//                   </td>
//                   <td className="p-3">${order.total.toFixed(2)}</td>
//                   <td className="p-3">
//                     <Link href={`/orders/${order.id}`}>
//                       <button className="bg-green-600 text-white px-3 py-1 rounded">
//                         Details
//                       </button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderTable;
"use client";
import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { orders } from "../data/fakeOrders";
import OrderStatus from "./OrderStatus";
import Link from "next/link";
import { ArrowUp, ArrowDown } from "lucide-react";

const OrderTable = () => {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id", enableSorting: true },
      { header: "ORDER TIME", accessorKey: "orderTime", enableSorting: true },
      { header: "METHOD", accessorKey: "method", enableSorting: true },
      {
        header: "STATUS",
        cell: ({ row }) => <OrderStatus status={row.original.status} />,
        enableSorting: false,
      },
      {
        header: "TOTAL",
        accessorKey: "total",
        cell: ({ row }) => `$${row.original.total.toFixed(2)}`,
        enableSorting: true,
      },
      {
        header: "ACTION",
        cell: ({ row }) => (
          <Link href={`/orders/${row.original.id}`}>
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Details
            </button>
          </Link>
        ),
        enableSorting: false,
      },
    ],
    []
  );

  const table = useReactTable({
    data: orders,
    columns,
    state: {
      sorting,
      pagination, // Add pagination state
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination, // Update pagination state
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-orange-500 text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`p-3 text-left cursor-pointer select-none ${
                      header.column.getCanSort() ? "hover:bg-orange-600" : ""
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === "asc" && (
                        <ArrowUp size={16} />
                      )}
                      {header.column.getIsSorted() === "desc" && (
                        <ArrowDown size={16} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-gray-500 text-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTable;
