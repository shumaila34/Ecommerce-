"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { X } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const routes = [
  { id: "all", label: "Select All" },
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "categories", label: "Categories" },
  { id: "attributes", label: "Attributes" },
  { id: "coupons", label: "Coupons" },
  { id: "customers", label: "Customers" },
  { id: "orders", label: "Orders" },
  { id: "staff", label: "Staff" },
]

const roles = ["Super Admin", "Admin", "CEO", "Manager", "Accountant", "Cashier", "Security Guard"]

export default function AddStaffPage() {
  const [isPublished, setIsPublished] = useState(false)
  const [selectedRoutes, setSelectedRoutes] = useState<string[]>([])


  const handleSelectAllRoutes = () => {
    if (selectedRoutes.length === routes.length - 1) {
      setSelectedRoutes([])
    } else {
      setSelectedRoutes(routes.filter((r) => r.id !== "all").map((r) => r.id))
    }
  }

  const handleRouteToggle = (routeId: string) => {
    setSelectedRoutes((prev) => (prev.includes(routeId) ? prev.filter((id) => id !== routeId) : [...prev, routeId]))
  }

  return (
    <div className="p-6 pb-24 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Add Staff</h1>
          <p className="text-gray-500 text-sm">Add staff member and necessary information from here</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin-panel/staff">
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-8">
        <div className="inline-block border-b-2 border-blue-500 pb-2 px-4">
          <h2 className="text-blue-500 font-medium">Basic Info</h2>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="first-name" className="text-gray-700">
              First Name
            </Label>
            <Input id="first-name" placeholder="Enter first name" className="bg-gray-50" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="last-name" className="text-gray-700">
              Last Name
            </Label>
            <Input id="last-name" placeholder="Enter last name" className="bg-gray-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter email address" className="bg-gray-50" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact" className="text-gray-700">
              Contact Number
            </Label>
            <Input id="contact" type="tel" placeholder="Enter contact number" className="bg-gray-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <Input id="password" type="password" placeholder="Enter password" className="bg-gray-50" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-gray-700">
              Role
            </Label>
            <Select>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role.toLowerCase()}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Routes Access Section */}
        <div className="space-y-4">
          <Label className="text-gray-700">Routes to Access</Label>
          <div className="space-y-2 border rounded-lg p-4">
            {routes.map((route) => (
              <div key={route.id} className="flex items-center space-x-2">
                <Checkbox
                  id={route.id}
                  checked={
                    route.id === "all" ? selectedRoutes.length === routes.length - 1 : selectedRoutes.includes(route.id)
                  }
                  onCheckedChange={() => (route.id === "all" ? handleSelectAllRoutes() : handleRouteToggle(route.id))}
                />
                <label
                  htmlFor={route.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {route.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Published Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Published</span>
          <Switch checked={isPublished} onCheckedChange={setIsPublished} />
          <span className={`ml-2 px-3 py-1 rounded-full text-white ${isPublished ? "bg-green-500" : "bg-red-500"}`}>
            {isPublished ? "Yes" : "No"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-between gap-2">
          <Link href="/admin-panel/staff" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-[200px]">
              Cancel
            </Button>
          </Link>

          <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-[200px]">Add Staff</Button>
        </div>
      </div>
    </div>
  )
}

