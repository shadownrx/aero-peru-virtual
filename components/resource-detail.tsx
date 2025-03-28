"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ResourceDetailProps {
  id: string
}

export function ResourceDetail({ id }: ResourceDetailProps) {
  const { language } = useLanguage()

  // Esto es un ejemplo, en una implementación real se obtendría el recurso por su ID
  const resource = {
    es: {
      title: "Guía para Principiantes",
      description: "Todo lo que necesitas saber para comenzar como piloto virtual en AERO PERU.",
      content: `
        <h2>Bienvenido a AERO PERU Virtual</h2>
        <p>Esta guía te ayudará a dar tus primeros pasos como piloto virtual en nuestra aerolínea.</p>
        <h3>Requisitos</h3>
        <ul>
          <li>Un simulador de vuelo compatible (MSFS, X-Plane, Prepar3D)</li>
          <li>Conexión a internet estable</li>
          <li>Cuenta en FSAirlines</li>
        </ul>
        <h3>Primeros Pasos</h3>
        <p>1. Regístrate en FSAirlines y solicita unirte a AERO PERU Virtual</p>
        <p>2. Descarga e instala las libreas oficiales</p>
        <p>3. Configura tu ACARS para registrar tus vuelos</p>
        <p>4. Únete a nuestro Discord para conectar con la comunidad</p>
      `,
      downloadText: "Descargar PDF",
      backText: "Volver a Recursos",
      shareText: "Compartir",
    },
    en: {
      title: "Beginner's Guide",
      description: "Everything you need to know to get started as a virtual pilot at AERO PERU.",
      content: `
        <h2>Welcome to AERO PERU Virtual</h2>
        <p>This guide will help you take your first steps as a virtual pilot in our airline.</p>
        <h3>Requirements</h3>
        <ul>
          <li>A compatible flight simulator (MSFS, X-Plane, Prepar3D)</li>
          <li>Stable internet connection</li>
          <li>FSAirlines account</li>
        </ul>
        <h3>First Steps</h3>
        <p>1. Register on FSAirlines and request to join AERO PERU Virtual</p>
        <p>2. Download and install the official liveries</p>
        <p>3. Set up your ACARS to log your flights</p>
        <p>4. Join our Discord to connect with the community</p>
      `,
      downloadText: "Download PDF",
      backText: "Back to Resources",
      shareText: "Share",
    },
  }

  const currentResource = language === "es" ? resource.es : resource.en

  return (
    <div className="py-12">
      <div className="container">
        <FadeIn delay={0.2}>
          <Link href="#resources" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentResource.backText}
          </Link>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-light mb-4">{currentResource.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{currentResource.description}</p>

            <div className="relative w-full h-64 mb-8 rounded-sm overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt={currentResource.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className="prose prose-gray dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: currentResource.content }}
            />

            <div className="flex flex-wrap gap-4 mt-12">
              <Button variant="outline" className="rounded-none flex items-center gap-2">
                <Download className="h-4 w-4" />
                {currentResource.downloadText}
              </Button>

              <Button variant="ghost" className="rounded-none flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                {currentResource.shareText}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

