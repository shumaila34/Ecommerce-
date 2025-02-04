"use client"

import { cn } from "@/lib/utils"
import { KeyRound, LayoutDashboard, LogOut, ShoppingBag, User, UserCog } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/user/dashboard",
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
    href: "/user/profile",
    icon: UserCog,
  },
  {
    title: "Change Password",
    href: "/user/password",
    icon: KeyRound,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 space-y-2">
      {sidebarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100",
            pathname === link.href && "bg-emerald-50 text-emerald-600",
          )}
        >
          <link.icon className="h-5 w-5" />
          {link.title}
        </Link>
      ))}
      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100">
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </aside>
  )
}

