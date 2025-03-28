"use client"

import { useEffect, useState } from "react"

export function ThemeScript() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // This runs on the client side only
    const theme = localStorage.getItem("theme") || "light"
    const root = document.documentElement

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [])

  return null
}

