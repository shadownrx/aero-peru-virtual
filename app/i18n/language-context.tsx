"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "./translations"

type Language = "es" | "en"
type TranslationKey = keyof typeof translations.es

interface LanguageContextType {
  language: Language
  t: (key: TranslationKey) => string
  changeLanguage: (lang: Language) => void
}

// Valor por defecto para el contexto
const defaultContextValue: LanguageContextType = {
  language: "es",
  t: (key: TranslationKey) => translations.es[key] || key,
  changeLanguage: () => {},
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    // Marcar como montado para evitar problemas de hidratación
    setMounted(true)

    // Check for saved language preference or use default
    const savedLanguage = (localStorage.getItem("language") as Language) || "es"
    setLanguage(savedLanguage)
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    if (mounted) {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  // Usar el valor por defecto durante el renderizado del servidor
  // y el valor real después de la hidratación
  const value = mounted ? { language, t, changeLanguage } : defaultContextValue

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}

