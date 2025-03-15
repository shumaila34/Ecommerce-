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
import { Switch } from "@/components/ui/switch";
import {
  Import,
  Upload,
  ListFilter,
  Trash2,
  Plus,
  Eye,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx"; 

interface Coupon {
  id: string;
  campaignName: string;
  code: string;
  discount: string;
  published: boolean;
  startDate: string;
  endDate: string;
  status: "Active" | "Expired";
}

const initialCoupons: Coupon[] = [
  {
    id: "1",
    campaignName: "Summer Sale",
    code: "SUMMER20",
    discount: "20%",
    published: true,
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    status: "Active",
  },
  {
    id: "2",
    campaignName: "Winter Bonanza",
    code: "WINTER15",
    discount: "15%",
    published: false,
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    status: "Expired",
  },
  {
    id: "3",
    campaignName: "Flash Sale",
    code: "FLASH10",
    discount: "10%",
    published: true,
    startDate: "2024-07-15",
    endDate: "2024-07-20",
    status: "Active",
  },
];

function CouponsPage() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [selectedCoupons, setSelectedCoupons] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle selection
  const toggleCoupon = (couponId: string) => {
    setSelectedCoupons((prev) =>
      prev.includes(couponId)
        ? prev.filter((id) => id !== couponId)
        : [...prev, couponId]
    );
  };

  // Toggle all selections
  const toggleAllCoupons = () => {
    setSelectedCoupons((prev) =>
      prev.length === coupons.length ? [] : coupons.map((c) => c.id)
    );
  };

  // Toggle published state
  const togglePublished = (couponId: string) => {
    setCoupons((prev) =>
      prev.map((coupon) =>
        coupon.id === couponId
          ? { ...coupon, published: !coupon.published }
          : coupon
      )
    );
  };

  // Search filter
  const filteredCoupons = coupons.filter((coupon) =>
    coupon.campaignName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-semibold text-blue-800">Coupons</h1>
      </div>

      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Import className="w-4 h-4 mr-2" />
            Import
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="destructive"
            size="sm"
            disabled={selectedCoupons.length === 0}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Link href="/admin-panel/catalog/coupons/addCoupon" className="w-full sm:w-auto">
            <Button
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Coupon
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by Campaign Name"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto">
            <ListFilter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => setSearchQuery("")}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedCoupons.length === coupons.length}
                  onCheckedChange={toggleAllCoupons}
                />
              </TableHead>
              <TableHead>CAMPAIGN NAME</TableHead>
              <TableHead>CODE</TableHead>
              <TableHead>DISCOUNT</TableHead>
              <TableHead>PUBLISHED</TableHead>
              <TableHead>START DATE</TableHead>
              <TableHead>END DATE</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCoupons.map((coupon) => (
              <TableRow key={coupon.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCoupons.includes(coupon.id)}
                    onCheckedChange={() => toggleCoupon(coupon.id)}
                  />
                </TableCell>
                <TableCell>{coupon.campaignName}</TableCell>
                <TableCell>{coupon.code}</TableCell>
                <TableCell>{coupon.discount}</TableCell>
                <TableCell>
                  <Switch
                    checked={coupon.published}
                    onCheckedChange={() => togglePublished(coupon.id)}
                  />
                </TableCell>
                <TableCell>{coupon.startDate}</TableCell>
                <TableCell>{coupon.endDate}</TableCell>
                <TableCell>
                  <span
                    className={clsx(
                      "px-2 py-1 rounded-full text-white text-xs font-semibold",
                      coupon.status === "Active" ? "bg-green-400" : "bg-red-400"
                    )}
                  >
                    {coupon.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CouponsPage;
