"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Upload, X } from "lucide-react";
import Link from "next/link";

export default function AddCategoryPage() {
  const [hasVariants, setHasVariants] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6 pb-24 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Add Category</h1>
          <p className="text-gray-500 text-sm">
            Add your category and necessary information from here
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin-panel/catalog/categories">
            <Button variant="ghost" size="icon" aria-label="Close">
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
        <div className="space-y-2">
          <Label htmlFor="category-name" className="text-gray-700">
            Name
          </Label>
          <Input
            id="category-name"
            placeholder="Enter category name"
            className="bg-gray-50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category-description" className="text-gray-700">
            Description
          </Label>
          <Textarea
            id="category-description"
            placeholder="Enter category description"
            className="min-h-[120px] bg-gray-50"
          />
        </div>

        {/* Image Upload Section */}
        <div className="space-y-2">
          <Label className="text-gray-700">Category Image</Label>
          <div
            className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer"
            onClick={handleFileUploadClick}
          >
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-10 h-10 text-emerald-500" />
              <p className="text-gray-600">Drag and drop your image here</p>
              <p className="text-xs text-gray-400">
                (Only *.jpeg, *.webp, and *.png images are accepted)
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

        {/* Published Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Published</span>
          <Switch
            checked={isPublished}
            onCheckedChange={() => setIsPublished(!isPublished)}
          />
          <span
            className={`ml-2 px-3 py-1 rounded-full text-white ${
              isPublished ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isPublished ? "Yes" : "No"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-between gap-2">
          <Link href="/admin-panel/catalog/categories" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-[200px]">
              Cancel
            </Button>
          </Link>

          <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-[200px]">
            Add Category
          </Button>
        </div>
      </div>
    </div>
  );
}