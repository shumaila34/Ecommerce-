"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Import, Upload, ListFilter, Trash2, Plus, Eye, Pencil } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  image: string
  category: string
  price: number
  salePrice: number
  stock: number
  status: "Sold Out" | "Selling"
  published: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Premium T-Shirt",
    image: "/placeholder.svg",
    category: "Men",
    price: 450.0,
    salePrice: 450.0,
    stock: 4972,
    status: "Selling",
    published: true,
  },
  {
    id: "2",
    name: "Himalaya Powder",
    image: "/placeholder.svg",
    category: "Skin Care",
    price: 174.97,
    salePrice: 160.0,
    stock: 5472,
    status: "Selling",
    published: true,
  },
  {
    id: "3",
    name: "Green Leaf Lettuce",
    image: "/placeholder.svg",
    category: "Fresh Vegetable",
    price: 112.72,
    salePrice: 112.72,
    stock: 463,
    status: "Selling",
    published: true,
  },
]

function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }

  const toggleAllProducts = () => {
    setSelectedProducts((prev) => (prev.length === products.length ? [] : products.map((p) => p.id)))
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-semibold text-blue-800">Products</h1>
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
          <Button variant="destructive" size="sm" disabled={selectedProducts.length === 0}>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Link href="/admin-panel/catalog/products/addProducts" className="w-full sm:w-auto">
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input placeholder="Search Product" className="w-full sm:max-w-sm" />
        <Select>
          <SelectTrigger className="w-full sm:w-[220px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="men">Men</SelectItem>
            <SelectItem value="skincare">Skin Care</SelectItem>
            <SelectItem value="vegetable">Fresh Vegetable</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[220px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-to-high">Low to High</SelectItem>
            <SelectItem value="high-to-low">High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-[160px]">
          <ListFilter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" className="w-full sm:w-[160px]">Reset</Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox checked={selectedProducts.length === products.length} onCheckedChange={toggleAllProducts} />
              </TableHead>
              <TableHead>PRODUCT NAME</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>SALE PRICE</TableHead>
              <TableHead>STOCK</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>VIEW</TableHead>
              <TableHead>PUBLISHED</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleProduct(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span>{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>${product.salePrice.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      product.status === "Selling" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Switch checked={product.published} />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ProductsPage
