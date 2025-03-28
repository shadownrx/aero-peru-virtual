import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeScript } from "./theme-script"
import { LanguageProvider } from "./i18n/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AERO PERU Virtual | Aerolínea Virtual",
  description: "Bienvenido a AERO PERU Virtual, la nueva aerolínea virtual de Perú.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeScript />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'