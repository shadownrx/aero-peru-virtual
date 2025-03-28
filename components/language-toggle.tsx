"use client"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/app/i18n/language-context"

export function LanguageToggle() {
  const { language, changeLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // No renderizar el menú completo hasta que el componente esté montado
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Globe className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("es")} className={language === "es" ? "bg-muted" : ""}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

