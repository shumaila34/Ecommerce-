"use client";
import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import OrderStatus from "./OrderStatus";
import { orders as fakeOrders } from "../data/fakeOrders"; // Fake orders
import Link from "next/link";
import { ArrowUp, ArrowDown } from "lucide-react";
import TableSkeleton from "./TableSkeleton";
import ErrorAlert from "./ErrorAlert";
import { Order } from "../types/Orders.type";

const OrderTable = () => {
  const [orders, setOrders] = useState<Order[] | null>(null); // Initially empty
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Simulating an error state
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });

  // Simulate loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOrders(fakeOrders); // Set fake data
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

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
        cell: ({ row }) => (
          <span className="font-bold">${row.original.total.toFixed(2)}</span>
        ),
        enableSorting: true,
      },
      {
        header: "ACTION",
        cell: ({ row }) => (
          <Link href={`/orders/${row.original.id}`}>
            <button className="bg-emerald-500 text-white px-3 py-1 rounded text-sm">
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
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <TableSkeleton />; // Show skeleton loader
  if (error) return <ErrorAlert />; // Handle errors

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-orange-400 text-white text-sm">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`p-3 text-left cursor-pointer select-none ${
                      header.column.getCanSort() ? "hover:bg-orange-300" : ""
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
              <tr key={row.id} className="border-t text-sm">
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
