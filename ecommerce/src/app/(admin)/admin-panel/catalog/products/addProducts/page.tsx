"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Upload, X } from "lucide-react";
import Link from "next/link";

export default function AddProductPage() {
  const [hasVariants, setHasVariants] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6 pb-24 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Add Product</h1>
          <p className="text-gray-500 text-sm">
            Add your product and necessary information from here
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="border rounded px-4 py-2">
            <select className="outline-none bg-transparent">
              <option>en</option>
            </select>
          </div>
          <Link href="/admin-panel/catalog/products">
            <Button variant="ghost" size="icon" aria-label="Close">
              <X className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Variants Toggle */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <span className="text-orange-500">
          Does this product have variants?
        </span>
        <div className="flex items-center">
          <Switch
            checked={hasVariants}
            onCheckedChange={() => setHasVariants(!hasVariants)}
          />
          <span
            className={`ml-2 px-3 py-1 rounded-full text-white ${
              hasVariants ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {hasVariants ? "Yes" : "No"}
          </span>
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
        <div className="space-y-2">
          <Label htmlFor="title" className="text-gray-700">
            Product Title/Name
          </Label>
          <Input
            id="title"
            placeholder="Product Title/Name"
            className="bg-gray-50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-gray-700">
            Product Description
          </Label>
          <Textarea
            id="description"
            placeholder="Product Description"
            className="min-h-[120px] bg-gray-50"
          />
        </div>

        {/* Image Upload Section */}
        <div className="space-y-2">
          <Label className="text-gray-700">Product Images</Label>
          <div
            className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer"
            onClick={handleFileUploadClick}
          >
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-10 h-10 text-emerald-500" />
              <p className="text-gray-600">Drag your images here</p>
              <p className="text-xs text-gray-400">
                (Only *.jpeg, *.webp and *.png images will be accepted)
              </p>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/jpeg, image/webp, image/png"
            multiple
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sku" className="text-gray-700">
            Product SKU
          </Label>
          <Input id="sku" placeholder="Product SKU" className="bg-gray-50" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="barcode" className="text-gray-700">
            Product Barcode
          </Label>
          <Input
            id="barcode"
            placeholder="Product Barcode"
            className="bg-gray-50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-gray-700">
            Category
          </Label>
          <Select>
            <SelectTrigger className="bg-gray-50">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md border rounded-md">
              <SelectItem value="home">Home</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="default-category" className="text-gray-700">
            Default Category
          </Label>
          <Select>
            <SelectTrigger className="bg-gray-50">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md border rounded-md">
              <SelectItem value="home">Home</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="price" className="text-gray-700">
              Product Price
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1.5 text-gray-500">$</span>
              <Input id="price" type="number" className="pl-6 bg-gray-50" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="salePrice" className="text-gray-700">
              Sale Price
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1.5 text-gray-500">$</span>
              <Input id="salePrice" type="number" className="pl-6 bg-gray-50" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-gray-700">
              Product Quantity
            </Label>
            <Input
              id="quantity"
              type="number"
              defaultValue={0}
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug" className="text-gray-700">
              Product Slug
            </Label>
            <Input
              id="slug"
              placeholder="Product Slug"
              className="bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-between gap-2">
          <Link
            href="/admin-panel/catalog/products"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" className="w-full sm:w-[200px]">
              Cancel
            </Button>
          </Link>

          <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-[200px]">
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
}
