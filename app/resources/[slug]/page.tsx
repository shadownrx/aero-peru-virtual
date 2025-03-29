"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2, Bookmark, Printer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { resourcesData } from "@/app/resources/data"

export default function ResourcePage() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-950"></div>
  }

  // Buscar el recurso por slug
  const currentResources = language === "es" ? resourcesData.es : resourcesData.en
  const resource = currentResources.find((r) => r.slug === slug)

  if (!resource) {
    notFound()
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
            <h1 className="text-3xl font-light mb-4">{resource.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{resource.description}</p>

            {resource.coverImage && (
              <div className="relative w-full h-64 mb-8 rounded-sm overflow-hidden">
                <Image
                  src={resource.coverImage || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Tabla de contenidos */}
            {resource.tableOfContents && (
              <div className="bg-gray-50 dark:bg-gray-900 p-6 mb-8 rounded-sm">
                <h2 className="text-xl font-light mb-4">{language === "es" ? "Contenido" : "Table of Contents"}</h2>
                <ul className="space-y-2">
                  {resource.tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a href={`#section-${index + 1}`} className="text-primary hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contenido del recurso */}
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">{resource.content}</div>

            {/* Acciones */}
            <div className="flex flex-wrap gap-4 mt-12 justify-center md:justify-start">
              {resource.pdfUrl && (
                <Button variant="outline" className="rounded-none flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {language === "es" ? "Descargar PDF" : "Download PDF"}
                </Button>
              )}

              <Button variant="ghost" className="rounded-none flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                {language === "es" ? "Compartir" : "Share"}
              </Button>

              <Button variant="ghost" className="rounded-none flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                {language === "es" ? "Guardar" : "Save"}
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

