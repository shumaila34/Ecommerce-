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
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  icon: string;
  name: string;
  description: string;
  published: boolean;
}

const categories: Category[] = [
  {
    id: "1",
    icon: "/placeholder.svg",
    name: "Fish & Meat",
    description: "Fish & Meat",
    published: true,
  },
  {
    id: "2",
    icon: "/placeholder.svg",
    name: "Fruits & Vegetables",
    description: "Fruits & Vegetables",
    published: true,
  },
  {
    id: "3",
    icon: "/placeholder.svg",
    name: "Cooking Essentials",
    description: "Cooking Essentials",
    published: true,
  },
];

function CategoryPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleAllCategories = () => {
    setSelectedCategories((prev) =>
      prev.length === categories.length ? [] : categories.map((c) => c.id)
    );
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-semibold text-blue-800">Categories</h1>
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
            disabled={selectedCategories.length === 0}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Link href="/admin-panel/catalog/categories/addCategories" className="w-full sm:w-auto">
            <Button
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by Category Name"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto">
            <ListFilter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
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
                  checked={selectedCategories.length === categories.length}
                  onCheckedChange={toggleAllCategories}
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>ICON</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>DESCRIPTION</TableHead>
              <TableHead>PUBLISHED</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                </TableCell>
                <TableCell>{category.id}</TableCell>
                <TableCell>
                  <div className="w-8 h-8 relative">
                    <Image
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <Switch
                    checked={category.published}
                    onCheckedChange={() =>
                      console.log(`Toggle published for ${category.id}`)
                    }
                  />
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

export default CategoryPage;
