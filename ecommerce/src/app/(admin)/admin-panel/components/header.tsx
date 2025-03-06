import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center px-4">
      <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
        <Menu className="h-6 w-6" />
      </Button>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold text-gray-900 lg:hidden">DAX Bazar</h1>
        <div className="ml-auto flex items-center space-x-4">{/* Add any header actions here */}</div>
      </div>
    </header>
  )
}

