"use client"

import "./globals.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Menu,
  Search,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/users", icon: Users },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full space-y-9">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        DashBoard
      </h1>
      <nav className="flex flex-col gap-3">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href   
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-400"
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex">

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-70 bg-white/5 backdrop-blur-xl border-r border-white/10 p-8">
          <SidebarContent />
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">

          {/* TOPBAR */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">

            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Mobile Menu */}
              <Sheet >
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>

                <SheetContent side="left" className="bg-slate-950 text-white">
                  <SidebarContent />
                </SheetContent>
              </Sheet>

              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                <Input
                  placeholder="Search..."
                  className="pl-8 bg-white/5 border-white/10"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

              <ThemeToggle />

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell size={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    New user registered
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Revenue increased 15%
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>SP</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="flex-1 p-8 md:p-12">
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}