"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Eye, Pencil, Plus, Trash2, ListFilter } from "lucide-react"
import Link from "next/link"

interface StaffMember {
  id: string
  name: string
  email: string
  contact: string
  joiningDate: string
  role: string
  status: "Active" | "Inactive"
  published: boolean
}

const initialStaff: StaffMember[] = [
  {
    id: "1",
    name: "Admin",
    email: "admin@gmail.com",
    contact: "360-943-7332",
    joiningDate: "8 Mar, 2025",
    role: "Super Admin",
    status: "Active",
    published: true,
  },
  {
    id: "2",
    name: "Parker",
    email: "marion@gmail.com",
    contact: "713-675-8813",
    joiningDate: "8 Mar, 2025",
    role: "Admin",
    status: "Active",
    published: true,
  },
  {
    id: "3",
    name: "John",
    email: "john@gmail.com",
    contact: "866-675-7852",
    joiningDate: "1 Mar, 2025",
    role: "Manager",
    status: "Active",
    published: true,
  },
]

const roles = ["All", "Super Admin", "Admin", "CEO", "Manager", "Accountant", "Cashier", "Security Guard"]

export default function StaffPage() {
  const [selectedRole, setSelectedRole] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>(initialStaff)

  const handleTogglePublished = (id: string) => {
    setStaffMembers((prevStaff) =>
      prevStaff.map((staff) =>
        staff.id === id
          ? {
              ...staff,
              published: !staff.published,
              status: !staff.published ? "Active" : "Inactive", 
            }
          : staff
      )
    )
  }

  const filteredStaff = staffMembers.filter((staff) => {
    const matchesRole = selectedRole === "All" || staff.role === selectedRole
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.contact.includes(searchQuery)
    return matchesRole && matchesSearch
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-800">All Staff</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <Input
          placeholder="Search by name/email/phone"
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Staff Role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2 ml-auto">
          <Link href="/admin-panel/staff/addStaff">
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Staff
            </Button>
          </Link>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <ListFilter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedRole("All")
              setSearchQuery("")
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>CONTACT</TableHead>
              <TableHead>JOINING DATE</TableHead>
              <TableHead>ROLE</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>PUBLISHED</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStaff.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.email}</TableCell>
                <TableCell>{staff.contact}</TableCell>
                <TableCell>{staff.joiningDate}</TableCell>
                <TableCell>{staff.role}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      staff.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {staff.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Switch checked={staff.published} onCheckedChange={() => handleTogglePublished(staff.id)} />
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
