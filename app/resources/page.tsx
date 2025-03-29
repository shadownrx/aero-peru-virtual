"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import Link from "next/link"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { Input } from "@/components/ui/input"
import { resourcesData, updateResourceLinks } from "./data"

export default function ResourcesPage() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)
  const [resources, setResources] = useState(resourcesData)

  useEffect(() => {
    setMounted(true)
    // Actualizar los enlaces de los recursos
    setResources(updateResourceLinks())
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-950"></div>
  }

  const currentCategories =
    language === "es"
      ? [
          { id: "all", name: "Todos" },
          { id: "guides", name: "Guías" },
          { id: "tutorials", name: "Tutoriales" },
          { id: "downloads", name: "Descargas" },
          { id: "community", name: "Comunidad" },
          { id: "charts", name: "Cartas" },
          { id: "training", name: "Entrenamiento" },
        ]
      : [
          { id: "all", name: "All" },
          { id: "guides", name: "Guides" },
          { id: "tutorials", name: "Tutorials" },
          { id: "downloads", name: "Downloads" },
          { id: "community", name: "Community" },
          { id: "charts", name: "Charts" },
          { id: "training", name: "Training" },
        ]

  const allResources = language === "es" ? resources.es : resources.en

  // Filtrar recursos por categoría y búsqueda
  const filteredResources = allResources.filter((resource) => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Destacar recursos principales
  const featuredResources = allResources.filter((resource) => resource.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      <div className="container py-12">
        <FadeIn delay={0.2}>
          <h1 className="text-3xl font-light mb-4 text-center">
            {language === "es" ? "Recursos para Pilotos" : "Pilot Resources"}
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {language === "es"
              ? "Explora nuestra colección de recursos diseñados para ayudarte a mejorar tus habilidades como piloto virtual."
              : "Explore our collection of resources designed to help you improve your skills as a virtual pilot."}
          </p>
        </FadeIn>

        {/* Búsqueda y filtros */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder={language === "es" ? "Buscar recursos..." : "Search resources..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {language === "es" ? "Filtrar por:" : "Filter by:"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          </div>
        </FadeIn>

        {/* Recursos destacados */}
        {activeCategory === "all" && searchQuery === "" && (
          <div className="mb-16">
            <FadeIn delay={0.4}>
              <h2 className="text-xl font-light mb-8 text-center">
                {language === "es" ? "Recursos Destacados" : "Featured Resources"}
              </h2>
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
          <div className="mb-8">
            <h2 className="text-xl font-light mb-8 text-center">
              {activeCategory === "all"
                ? language === "es"
                  ? "Todos los Recursos"
                  : "All Resources"
                : currentCategories.find((cat) => cat.id === activeCategory)?.name}
            </h2>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {language === "es"
                  ? "No se encontraron recursos que coincidan con tu búsqueda."
                  : "No resources found matching your search."}
              </p>
            </div>
          )}
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
    </div>
  )
}

