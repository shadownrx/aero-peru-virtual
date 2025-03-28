"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("light")

  React.useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or use default
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark" | "system") || "light"
    setTheme(savedTheme)

    // Apply the theme
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (newTheme: "light" | "dark" | "system") => {
    const root = window.document.documentElement

    // Remove existing class
    root.classList.remove("light", "dark")

    // Determine which theme to apply
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
    }
  }

  const changeTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme)
    if (mounted) {
      localStorage.setItem("theme", newTheme)
      applyTheme(newTheme)
    }
  }

  // No renderizar nada hasta que el componente esté montado
  if (!mounted) {
    return <Button variant="outline" size="icon" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeTheme("light")}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("dark")}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("system")}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

