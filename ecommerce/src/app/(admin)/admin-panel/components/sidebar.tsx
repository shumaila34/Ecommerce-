"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ListOrdered,
  Users,
  ShoppingCart,
  UserCog,
  Settings,
  FileText,
  X,
  LogOut,
  ChevronDown,
  Tag,
  Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/admin-panel" },
  {
    title: "Catalog",
    icon: ListOrdered,
    subItems: [
      { title: "Products", icon: ShoppingCart, href: "/admin-panel/catalog/products" },
      { title: "Categories", icon: FileText, href: "/admin-panel/catalog/categories" },
      { title: "Attributes", icon: Tag, href: "/admin-panel/catalog/attributes" },
      { title: "Coupons", icon: Ticket, href: "/admin-panel/catalog/coupons" },
    ],
  },
  { title: "Customers", icon: Users, href: "/admin-panel/customers" },
  { title: "Orders", icon: ShoppingCart, href: "/admin-panel/orders" },
  { title: "Our Staff", icon: UserCog, href: "/admin-panel/staff" },
  { title: "Settings", icon: Settings, href: "/admin-panel/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-blue-50 border-r border-blue-200 transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-black">DAX Bazar</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden text-blue-600 hover:text-blue-700"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="px-4 mb-16">
          {menuItems.map((item) =>
            item.subItems ? (
              <Collapsible
                key={item.title}
                open={openDropdown === item.title}
                onOpenChange={() =>
                  setOpenDropdown(
                    openDropdown === item.title ? null : item.title
                  )
                }
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-blue-700 rounded-lg hover:bg-blue-100">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      onClick={() => {
                        if (window.innerWidth < 1024) {
                          onClose();
                        }
                      }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 text-blue-700 rounded-lg hover:bg-blue-100",
                        pathname === subItem.href &&
                          "bg-blue-100 text-blue-800 font-medium"
                      )}
                    >
                      <subItem.icon className="w-4 h-4" />
                      <span>{subItem.title}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose();
                  }
                }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-blue-700 rounded-lg hover:bg-blue-100",
                  pathname === item.href &&
                    "bg-blue-100 text-blue-800 font-medium"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            )
          )}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-white bg-black hover:bg-blue-700 hover:text-blue-800"
            onClick={() => {
              // Add logout logic here
              console.log("Logout clicked");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
}
