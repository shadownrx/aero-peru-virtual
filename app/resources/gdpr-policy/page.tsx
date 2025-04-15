"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GDPRPolicyContent } from "@/app/resources/resource-content-regulations"

export default function GDPRPolicyPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-950"></div>
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      <div className="container py-12">
        <FadeIn delay={0.2}>
          <Link href="/resources" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "es" ? "Volver a Recursos" : "Back to Resources"}
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light mb-4">
              {language === "es"
                ? "Política GDPR de IVAO y AERO PERU Virtual"
                : "IVAO and AERO PERU Virtual GDPR Policy"}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {language === "es"
                ? "Información sobre cómo protegemos tus datos personales y tus derechos bajo el GDPR."
                : "Information on how we protect your personal data and your rights under GDPR."}
            </p>

            <div className="relative w-full h-64 mb-8 rounded-sm overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt={language === "es" ? "Protección de datos" : "Data protection"}
                fill
                className="object-cover"
              />
            </div>

            {/* Tabla de contenidos */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 mb-8 rounded-sm">
              <h2 className="text-xl font-light mb-4">{language === "es" ? "Contenido" : "Table of Contents"}</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#section-1" className="text-primary hover:underline">
                    {language === "es"
                      ? "Política GDPR de IVAO y AERO PERU Virtual"
                      : "IVAO and AERO PERU Virtual GDPR Policy"}
                  </a>
                </li>
                <li>
                  <a href="#section-2" className="text-primary hover:underline">
                    {language === "es" ? "Información que Recopilamos" : "Information We Collect"}
                  </a>
                </li>
                <li>
                  <a href="#section-3" className="text-primary hover:underline">
                    {language === "es" ? "Cómo Utilizamos tu Información" : "How We Use Your Information"}
                  </a>
                </li>
                <li>
                  <a href="#section-4" className="text-primary hover:underline">
                    {language === "es"
                      ? "Compartir Información con Terceros"
                      : "Sharing Information with Third Parties"}
                  </a>
                </li>
                <li>
                  <a href="#section-5" className="text-primary hover:underline">
                    {language === "es" ? "Tus Derechos bajo el GDPR" : "Your Rights under GDPR"}
                  </a>
                </li>
                <li>
                  <a href="#section-6" className="text-primary hover:underline">
                    {language === "es" ? "Seguridad de los Datos" : "Data Security"}
                  </a>
                </li>
                <li>
                  <a href="#section-7" className="text-primary hover:underline">
                    {language === "es" ? "Retención de Datos" : "Data Retention"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contenido del recurso */}
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              {language === "en" ? <GDPRPolicyContent /> : null}
            </div>

            {/* Acciones */}
            <div className="flex flex-wrap gap-4 mt-12 justify-center md:justify-start">
              <Button variant="outline" className="rounded-none flex items-center gap-2">
                <Download className="h-4 w-4" />
                {language === "es" ? "Descargar PDF" : "Download PDF"}
              </Button>

              <Button variant="ghost" className="rounded-none flex items-center gap-2">
                <Printer className="h-4 w-4" />
                {language === "es" ? "Imprimir" : "Print"}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
