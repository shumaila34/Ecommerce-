"use client"

import { cn } from "@/lib/utils"
import { KeyRound, LayoutDashboard, LogOut, ShoppingBag, User, UserCog, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Orders",
    href: "/user/orders",
    icon: ShoppingBag,
  },
  {
    title: "My Account",
    href: "/user/account",
    icon: User,
  },
  {
    title: "Update Profile",
    href: "/profile",
    icon: UserCog,
  },
  {
    title: "Change Password",
    href: "/password",
    icon: KeyRound,
  },
]

export function DashboardSidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:w-64",
        open ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-xl font-semibold">Menu</span>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(false)}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="space-y-2 p-4">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100",
              pathname === link.href && "bg-emerald-50 text-emerald-600",
            )}
            onClick={() => setOpen(false)}
          >
            <link.icon className="h-5 w-5" />
            {link.title}
          </Link>
        ))}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </nav>
    </div>
  )
}
