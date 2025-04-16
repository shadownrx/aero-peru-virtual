"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { Plane } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const popularRoutes = {
  es: [
    {
      from: "Lima (LIM)",
      to: "Cusco (CUZ)",
      duration: "1h 15m",
      aircraft: "Airbus A320",
      distance: "587 km",
    },
    {
      from: "Lima (LIM)",
      to: "Arequipa (AQP)",
      duration: "1h 30m",
      aircraft: "Embraer E190",
      distance: "764 km",
    },
    {
      from: "Lima (LIM)",
      to: "Iquitos (IQT)",
      duration: "2h 00m",
      aircraft: "Airbus A320",
      distance: "1,010 km",
    },
    {
      from: "Cusco (CUZ)",
      to: "Juliaca (JUL)",
      duration: "0h 45m",
      aircraft: "Embraer E190",
      distance: "193 km",
    },
    {
      from: "Lima (LIM)",
      to: "Trujillo (TRU)",
      duration: "1h 10m",
      aircraft: "Airbus A320",
      distance: "557 km",
    },
    {
      from: "Lima (LIM)",
      to: "Piura (PIU)",
      duration: "1h 40m",
      aircraft: "Embraer E190",
      distance: "854 km",
    },
  ],
  en: [
    {
      from: "Lima (LIM)",
      to: "Cusco (CUZ)",
      duration: "1h 15m",
      aircraft: "Airbus A320",
      distance: "587 km",
    },
    {
      from: "Lima (LIM)",
      to: "Arequipa (AQP)",
      duration: "1h 30m",
      aircraft: "Embraer E190",
      distance: "764 km",
    },
    {
      from: "Lima (LIM)",
      to: "Iquitos (IQT)",
      duration: "2h 00m",
      aircraft: "Airbus A320",
      distance: "1,010 km",
    },
    {
      from: "Cusco (CUZ)",
      to: "Juliaca (JUL)",
      duration: "0h 45m",
      aircraft: "Embraer E190",
      distance: "193 km",
    },
    {
      from: "Lima (LIM)",
      to: "Trujillo (TRU)",
      duration: "1h 10m",
      aircraft: "Airbus A320",
      distance: "557 km",
    },
    {
      from: "Lima (LIM)",
      to: "Piura (PIU)",
      duration: "1h 40m",
      aircraft: "Embraer E190",
      distance: "854 km",
    },
  ],
}

export function RoutesSection() {
  const { language } = useLanguage()
  const routes = language === "es" ? popularRoutes.es : popularRoutes.en

  return (
    <section id="routes" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-6 text-center">
            {language === "es" ? "Rutas Populares" : "Popular Routes"}
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {language === "es"
              ? "Explora algunas de nuestras rutas más populares. Vuela a los destinos más emblemáticos de Perú."
              : "Explore some of our most popular routes. Fly to the most iconic destinations in Peru."}
          </p>
        </FadeIn>

        <ParallaxSection speed={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.05} direction="up">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-light">{route.from}</div>
                    <Plane className="h-4 w-4 text-primary transform rotate-90 group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="text-lg font-light">{route.to}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "es" ? "Duración" : "Duration"}
                      </div>
                      <div>{route.duration}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "es" ? "Avión" : "Aircraft"}
                      </div>
                      <div>{route.aircraft}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "es" ? "Distancia" : "Distance"}
                      </div>
                      <div>{route.distance}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </ParallaxSection>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="/routes">
              <Button variant="outline" className="rounded-none">
                {language === "es" ? "Ver Todas las Rutas" : "View All Routes"}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
