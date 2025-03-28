"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Download, Users, Map, Headphones, FileText, Compass } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ParallaxSection } from "@/components/animations/parallax-section"

// Categorías de recursos
const categories = {
  es: [
    { id: "all", name: "Todos" },
    { id: "guides", name: "Guías" },
    { id: "tutorials", name: "Tutoriales" },
    { id: "downloads", name: "Descargas" },
    { id: "community", name: "Comunidad" },
  ],
  en: [
    { id: "all", name: "All" },
    { id: "guides", name: "Guides" },
    { id: "tutorials", name: "Tutorials" },
    { id: "downloads", name: "Downloads" },
    { id: "community", name: "Community" },
  ],
}

// Recursos detallados
const resourcesData = {
  es: [
    {
      title: "Guía para Principiantes",
      description: "Todo lo que necesitas saber para comenzar como piloto virtual en AERO PERU.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
      featured: true,
    },
    {
      title: "Manual de Operaciones",
      description: "Procedimientos estándar de operación para todos los pilotos de AERO PERU Virtual.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
    },
    {
      title: "Cartas de Navegación",
      description: "Colección completa de cartas de navegación para los aeropuertos peruanos.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
    },
    {
      title: "Tutoriales en Video",
      description: "Aprende a configurar tu simulador y realizar procedimientos de vuelo correctamente.",
      icon: <Video className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
      featured: true,
    },
    {
      title: "Curso de Radiofonía",
      description: "Aprende a comunicarte correctamente con ATC utilizando fraseología estándar.",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
    },
    {
      title: "Liveries Oficiales",
      description: "Descarga las libreas oficiales de AERO PERU Virtual para tu simulador de vuelo.",
      icon: <Download className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
      featured: true,
    },
    {
      title: "Herramientas de Planificación",
      description: "Software y herramientas para planificar tus vuelos de manera eficiente.",
      icon: <Compass className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
    },
    {
      title: "Eventos Mensuales",
      description: "Calendario de vuelos en grupo, competencias y eventos especiales.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "community",
      featured: true,
    },
  ],
  en: [
    {
      title: "Beginner's Guide",
      description: "Everything you need to know to get started as a virtual pilot at AERO PERU.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
      featured: true,
    },
    {
      title: "Operations Manual",
      description: "Standard operating procedures for all AERO PERU Virtual pilots.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
    },
    {
      title: "Navigation Charts",
      description: "Complete collection of navigation charts for Peruvian airports.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
    },
    {
      title: "Video Tutorials",
      description: "Learn how to set up your simulator and perform flight procedures correctly.",
      icon: <Video className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
      featured: true,
    },
    {
      title: "Radio Communication Course",
      description: "Learn to communicate correctly with ATC using standard phraseology.",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
    },
    {
      title: "Official Liveries",
      description: "Download the official AERO PERU Virtual liveries for your flight simulator.",
      icon: <Download className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
      featured: true,
    },
    {
      title: "Flight Planning Tools",
      description: "Software and tools to efficiently plan your flights.",
      icon: <Compass className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
    },
    {
      title: "Monthly Events",
      description: "Calendar of group flights, competitions, and special events.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "community",
      featured: true,
    },
  ],
}

export function ResourcesSection() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const currentCategories = language === "es" ? categories.es : categories.en
  const allResources = language === "es" ? resourcesData.es : resourcesData.en

  // Filtrar recursos por categoría
  const filteredResources =
    activeCategory === "all" ? allResources : allResources.filter((resource) => resource.category === activeCategory)

  // Destacar recursos principales
  const featuredResources = allResources.filter((resource) => resource.featured)

  return (
    <section id="resources" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-6 text-center">
            {language === "es" ? "Recursos para Pilotos" : "Pilot Resources"}
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {language === "es"
              ? "Explora nuestra colección de recursos diseñados para ayudarte a mejorar tus habilidades como piloto virtual."
              : "Explore our collection of resources designed to help you improve your skills as a virtual pilot."}
          </p>
        </FadeIn>

        {/* Categorías */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {currentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Recursos destacados */}
        {activeCategory === "all" && (
          <div className="mb-16">
            <FadeIn delay={0.4}>
              <h3 className="text-xl font-light mb-8 text-center">
                {language === "es" ? "Recursos Destacados" : "Featured Resources"}
              </h3>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredResources.map((resource, index) => (
                <FadeIn key={index} delay={0.5 + index * 0.1} direction="up">
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="mb-4">{resource.icon}</div>
                    <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">{resource.description}</p>
                    <Link href={resource.link} className="mt-auto">
                      <Button variant="outline" size="sm" className="rounded-none">
                        {language === "es" ? "Ver Más" : "Learn More"}
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Todos los recursos filtrados */}
        <ParallaxSection speed={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.05} direction="up">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-sm hover:shadow-md transition-all duration-300 h-full group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">{resource.description}</p>
                  <Link href={resource.link} className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary"
                    >
                      {language === "es" ? "Ver Más" : "Learn More"}
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </ParallaxSection>

        {/* CTA para unirse a Discord */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {language === "es"
                ? "¿Necesitas ayuda con algún recurso? Únete a nuestro Discord para soporte directo."
                : "Need help with any resource? Join our Discord for direct support."}
            </p>
            <a href="https://discord.gg/rsCYC4MxPQ" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-white"
              >
                {language === "es" ? "Unirse a Discord" : "Join Discord"}
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

