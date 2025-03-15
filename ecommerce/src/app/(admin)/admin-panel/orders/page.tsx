"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const initialOrders = [
  {
    id: "11843",
    date: "2025-03-15",
    time: "11:48 PM",
    customer: "John Doe",
    method: "Cash",
    amount: "$142.01",
    status: "Pending",
  },
  {
    id: "11842",
    date: "2025-03-15",
    time: "8:12 PM",
    customer: "Jane Smith",
    method: "Card",
    amount: "$63.47",
    status: "Delivered",
  },
  {
    id: "11841",
    date: "2025-03-15",
    time: "6:51 PM",
    customer: "Alice Johnson",
    method: "Cash",
    amount: "$288.90",
    status: "Cancel",
  },
];

function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [orderLimit, setOrderLimit] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    return (
      (searchQuery === "" ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === "All" || order.status === statusFilter) &&
      (methodFilter === "All" || order.method === methodFilter)
    );
  });

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-800">Orders</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Input
          placeholder="Search by Customer Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select onValueChange={setStatusFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Processing">Processing</SelectItem>
            <SelectItem value="Cancel">Cancel</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setOrderLimit}>
          <SelectTrigger>
            <SelectValue placeholder="Order Limits" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="5">Last 5 Days</SelectItem>
            <SelectItem value="10">Last 10 Days</SelectItem>
            <SelectItem value="20">Last 20 Days</SelectItem>
            <SelectItem value="30">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setMethodFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Cash">Cash</SelectItem>
            <SelectItem value="Card">Card</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.time}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.method}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default OrdersPage;
