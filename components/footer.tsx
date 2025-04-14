"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, DiscIcon as Discord } from "lucide-react"
import { useLanguage } from "@/app/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  const discordUrl = "https://discord.gg/rsCYC4MxPQ"

  return (
    <footer className="bg-white dark:bg-gray-950 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-medium text-primary">AERO PERU</span>
              <span className="text-xs font-light ml-2 tracking-wider uppercase">{t("virtual")}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
              La nueva experiencia de vuelo virtual en Perú.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">{t("links")}</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("home")}
              </Link>
              <Link href="#about" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("about")}
              </Link>
              <Link href="#metar" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("metar")}
              </Link>
              <Link href="#routes" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("routes")}
              </Link>
              <Link href="/resources" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("resources")}
              </Link>
              <Link href="/#rules" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("rules")}
              </Link>
              <Link href="#contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("contact")}
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("terms")}
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                {t("privacy")}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">{t("contact")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">info@aeroperuvirtual.com</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Discord size={18} />
                <span className="sr-only">Discord</span>
              </a>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} AERO PERU Virtual. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}