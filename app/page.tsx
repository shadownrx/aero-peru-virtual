"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { ParticlesBackground } from "@/components/animations/particles-background"
import { RulesSection } from "@/components/rules-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { RoutesSection } from "@/components/routes-section"
import { MetarSection } from "@/components/metar-section"
import { AnimatedLogo } from "@/components/animations/animated-logo"
import { HeroParticles } from "@/components/animations/hero-particles"
// Importar el componente TypingEffect
import { TypingEffect } from "@/components/animations/typing-effect"

export default function Home() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Asegurarse de que el componente esté montado antes de renderizar contenido que depende del cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Si no está montado, mostrar un esqueleto o versión simplificada
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-950"></div>
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <ParticlesBackground />

      {/* Hero Section - Minimalista con animaciones */}
      <section className="relative w-full py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
        <HeroParticles />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Reemplazar el párrafo del hero con el efecto de escritura */}
            <FadeIn delay={0.2} direction="up">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                  {t("welcome")} <span className="text-primary font-normal">AERO PERU</span> {t("virtual")}
                </h1>
                <TypingEffect
                  text={t("heroText")}
                  speed={30}
                  delay={800}
                  className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-lg"
                />
                <div className="pt-4">
                  <Button variant="outline" className="rounded-none btn-glow">
                    {t("getStarted")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <AnimatedLogo src="/images/Aeroperu8.png" alt="AERO PERU Aircraft" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section - Minimalista con paralaje */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-light mb-12 text-center">{t("aboutUs")}</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <FadeIn delay={0.3} direction="left">
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">{t("aboutText1")}</p>
                  <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">{t("aboutText2")}</p>
                  <div className="pt-4">
                    <Link href="#" className="text-primary text-sm hover-line">
                      {t("learnMore")}
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <ParallaxSection speed={-0.2}>
                <FadeIn delay={0.4} direction="right">
                  <div className="relative h-[250px] md:h-[300px] hover-zoom rounded-sm overflow-hidden">
                    <Image src="/images/Aeroperu8.png" alt="AERO PERU Aircraft" fill className="object-cover" />
                  </div>
                </FadeIn>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* METAR Section - Reemplaza la sección de flota */}
      <MetarSection />

      {/* Routes Section */}
      <RoutesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Rules Section */}
      <RulesSection />

      {/* Contact Section - Minimalista con animaciones */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container relative z-10">
          <div className="max-w-xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-light mb-12 text-center">{t("contactUs")}</h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <form className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder={t("name")}
                  />
                  <input
                    type="email"
                    className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder={t("email")}
                  />
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder={t("message")}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="rounded-none w-full btn-glow">
                    {t("send")}
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalista con gradiente animado */}
      <section className="py-16 animated-gradient text-white relative">
        <div className="container text-center relative z-10">
          <div className="max-w-xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-light mb-6">{t("readyToFly")}</h2>
              <p className="text-base text-white/90 font-light mb-8">{t("joinText")}</p>
              <a href="https://www.fsairlines.net/en/login" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="rounded-none border-white text-white hover:bg-white hover:text-primary"
                >
                  {t("register")}
                </Button>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
