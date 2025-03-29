"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import Image from "next/image"

const testimonials = {
  es: [
    {
      quote:
        "AERO PERU Virtual me ha permitido vivir mi pasión por la aviación de una manera increíblemente realista. La comunidad es fantástica y el nivel de profesionalismo es impresionante.",
      author: "Carlos Mendoza",
      role: "Piloto Virtual - 2 años",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Como controlador aéreo virtual, puedo decir que AERO PERU Virtual ofrece una de las experiencias m��s auténticas. Los procedimientos y la atención al detalle son excepcionales.",
      author: "María Sánchez",
      role: "Controladora ATC - 1 año",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Desde que me uní a AERO PERU Virtual, he mejorado enormemente mis habilidades de vuelo. Los recursos de entrenamiento y el apoyo de la comunidad son invaluables.",
      author: "Javier Rodríguez",
      role: "Piloto Virtual - 6 meses",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ],
  en: [
    {
      quote:
        "AERO PERU Virtual has allowed me to live my passion for aviation in an incredibly realistic way. The community is fantastic and the level of professionalism is impressive.",
      author: "Carlos Mendoza",
      role: "Virtual Pilot - 2 years",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a virtual air traffic controller, I can say that AERO PERU Virtual offers one of the most authentic experiences. The procedures and attention to detail are exceptional.",
      author: "María Sánchez",
      role: "ATC Controller - 1 year",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Since joining AERO PERU Virtual, I have greatly improved my flying skills. The training resources and community support are invaluable.",
      author: "Javier Rodríguez",
      role: "Virtual Pilot - 6 months",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ],
}

export function TestimonialsSection() {
  const { language } = useLanguage()
  const currentTestimonials = language === "es" ? testimonials.es : testimonials.en

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-12 text-center">
            {language === "es" ? "Lo Que Dicen Nuestros Pilotos" : "What Our Pilots Say"}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-light italic">"{testimonial.quote}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

