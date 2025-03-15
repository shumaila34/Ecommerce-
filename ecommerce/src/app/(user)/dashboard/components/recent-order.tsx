"use client"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const orders = [
  {
    id: "041C",
    orderTime: "February 2, 2025",
    method: "Cash",
    status: "Pending",
    total: "121.56",
  },
  {
    id: "AAFB",
    orderTime: "February 1, 2025",
    method: "Cash",
    status: "Pending",
    total: "210.00",
  },
  {
    id: "2CFA",
    orderTime: "February 1, 2025",
    method: "Cash",
    status: "Pending",
    total: "576.41",
  },
  {
    id: "5307",
    orderTime: "February 1, 2025",
    method: "Cash",
    status: "Delivered",
    total: "1018.73",
  },
  {
    id: "4933",
    orderTime: "January 31, 2025",
    method: "Cash",
    status: "Delivered",
    total: "90.78",
  },
]

export function RecentOrders() {
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 5
  const totalPages = Math.ceil(orders.length / ordersPerPage)

  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="rounded-lg border bg-white">
      <div className="border-b p-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="hidden md:table-cell">ORDER TIME</TableHead>
              <TableHead className="hidden sm:table-cell">METHOD</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className="text-right">TOTAL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell className="hidden md:table-cell">{order.orderTime}</TableCell>
                <TableCell className="hidden sm:table-cell">{order.method}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      order.status === "Delivered" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">${order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 border-t px-4 py-2 sm:flex-row">
        <Button variant="outline" size="sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {[...Array(totalPages).keys()].map((number) => (
            <Button
              key={number + 1}
              variant={currentPage === number + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}