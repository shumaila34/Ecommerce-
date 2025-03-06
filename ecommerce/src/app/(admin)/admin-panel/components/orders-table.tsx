"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreVertical, FileText, Download } from "lucide-react"
import { useState } from "react"

interface Order {
    id: string
    orderTime: string
    customerName: string
    method: string  
    amount: string
    status: "pending" | "delivered" | "processing" | "cancelled"
}

const ordersData: Order[] = [  
    {
        id: "11685",
        orderTime: "8 Feb, 2025 12:32 PM",
        customerName: "Javed Khan",
        method: "Cash",
        amount: "$250.00",
        status: "pending"
    },
    {
        id: "11686",
        orderTime: "8 Feb, 2025 1:30 PM",
        customerName: "Ahmed Saleem",
        method: "Card",
        amount: "$125.00",
        status: "delivered"
    },
    {
        id: "11687",
        orderTime: "8 Feb, 2025 2:15 PM",
        customerName: "Sara Ali",
        method: "Cash",
        amount: "$400.00",
        status: "processing"
    },
    {
        id: "11688",
        orderTime: "8 Feb, 2025 2:18 PM",
        customerName: "Ali Raza",
        method: "Cash",
        amount: "$75.00",
        status: "cancelled"
    },
]

export function OrdersTable() {
    const [orders, setOrders] = useState<Order[]>(ordersData) 

    const handleStatusChange = (id: string, newStatus: Order["status"]) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        )
    }

    return (
        <div className="rounded-lg border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>INVOICE ID</TableHead>
                        <TableHead>ORDER TIME</TableHead>
                        <TableHead>CUSTOMER NAME</TableHead>
                        <TableHead>METHOD</TableHead>
                        <TableHead>AMOUNT</TableHead>
                        <TableHead>STATUS</TableHead>
                        <TableHead>ACTION</TableHead>
                        <TableHead>INVOICE</TableHead>   
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.orderTime}</TableCell>
                            <TableCell>{order.customerName}</TableCell>
                            <TableCell>{order.method}</TableCell>
                            <TableCell>{order.amount}</TableCell>
                            <TableCell>
                                <span
                                    className={`px-2 py-1 rounded-full text-xs ${
                                        order.status === "pending"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : order.status === "delivered"
                                            ? "bg-green-100 text-green-800"
                                            : order.status === "processing"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </TableCell>
                            <TableCell>
                                <select
                                    className="border rounded px-2 py-1"
                                    value={order.status}
                                    onChange={(e) =>
                                        handleStatusChange(order.id, e.target.value as Order["status"])
                                    }
                                >
                                    <option value="delivered">Delivered</option>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="cancelled">Cancel</option>
                                </select>
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon">
                                        <FileText className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
