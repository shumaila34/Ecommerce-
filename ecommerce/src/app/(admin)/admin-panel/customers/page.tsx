"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

interface Customer {
  id: string;
  joiningDate: string;
  name: string;
  email: string;
  phone: string;
}

const initialCustomers: Customer[] = [
  { id: "1", joiningDate: "2023-05-10", name: "John Doe", email: "john@gmail.com", phone: "123-456-7890" },
  { id: "2", joiningDate: "2024-02-15", name: "Jane Smith", email: "jane@gmail.com", phone: "987-654-3210" },
  { id: "3", joiningDate: "2024-06-20", name: "Alice Johnson", email: "alice@gmail.com", phone: "456-789-1234" },
];

function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle selection
  const toggleCustomer = (customerId: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(customerId) ? prev.filter((id) => id !== customerId) : [...prev, customerId]
    );
  };

  // Toggle all selections
  const toggleAllCustomers = () => {
    setSelectedCustomers((prev) =>
      prev.length === customers.length ? [] : customers.map((c) => c.id)
    );
  };

  // Search filter
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-800">Customers</h1>
      </div>

      {/* Search Input */}
      <div className="flex justify-between items-center gap-4">
        <Input
          placeholder="Search by Name"
          className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline" onClick={() => setSearchQuery("")}>
          Reset
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedCustomers.length === customers.length}
                  onCheckedChange={toggleAllCustomers}
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCustomers.includes(customer.id)}
                    onCheckedChange={() => toggleCustomer(customer.id)}
                  />
                </TableCell>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.joiningDate}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
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

export default CustomersPage;
