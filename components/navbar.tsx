"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, DiscIcon as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/app/i18n/language-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const discordUrl = "https://discord.gg/rsCYC4MxPQ"
  const loginUrl = "https://www.fsairlines.net/en/login"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/Aeroperu8.png"
        alt="Logo"
        width={85}
        height={18}
        className="rounded"
        priority
      />
      {/* Texto del branding */}
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-medium text-primary">AERO PERU</span>
        <span className="text-xs font-light tracking-wider uppercase">
          {t("virtual")}
        </span>
      </div>
    </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-light transition-colors hover:text-primary">
            {t("home")}
          </Link>
          <Link href="#about" className="text-sm font-light transition-colors hover:text-primary">
            {t("about")}
          </Link>
          <Link href="#metar" className="text-sm font-light transition-colors hover:text-primary">
            {t("metar")}
          </Link>
          <Link href="#routes" className="text-sm font-light transition-colors hover:text-primary">
            {t("routes")}
          </Link>
          <Link href="/resources" className="text-sm font-light transition-colors hover:text-primary">
            {t("resources")}
          </Link>
          <Link href="/#rules" className="text-sm font-light transition-colors hover:text-primary">
            {t("rules")}
          </Link>
          <Link href="#contact" className="text-sm font-light transition-colors hover:text-primary">
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={discordUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Discord size={16} />
              Discord
            </Button>
          </a>
          <LanguageToggle />
          <ModeToggle />
          <a href={loginUrl} target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:flex" variant="ghost" size="sm">
              {t("login")}
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="#about"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="#metar"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("metar")}
            </Link>
            <Link
              href="#routes"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("routes")}
            </Link>
            <Link
              href="/resources"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("resources")}
            </Link>
            <Link
              href="/#rules"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("rules")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" size="sm" className="gap-2 border-primary text-primary w-full">
                <Discord size={16} />
                Discord
              </Button>
            </a>
            <a href={loginUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full" variant="ghost" size="sm">
                {t("login")}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
