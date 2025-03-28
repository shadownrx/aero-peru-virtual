"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Users, Plane, Map, Clock } from "lucide-react"

export function StatsSection() {
  const { language } = useLanguage()

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "250+",
      label: language === "es" ? "Pilotos Activos" : "Active Pilots",
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      value: "15,000+",
      label: language === "es" ? "Vuelos Completados" : "Completed Flights",
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      value: "120+",
      label: language === "es" ? "Destinos" : "Destinations",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "25,000+",
      label: language === "es" ? "Horas de Vuelo" : "Flight Hours",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-950 relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

