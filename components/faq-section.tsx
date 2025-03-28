"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Añadimos las traducciones para las preguntas frecuentes
const faqTranslations = {
  es: [
    {
      question: "¿Qué es AERO PERU Virtual?",
      answer:
        "AERO PERU Virtual es una aerolínea virtual que simula las operaciones de una aerolínea real utilizando simuladores de vuelo. Ofrecemos una experiencia inmersiva para entusiastas de la aviación, permitiéndoles volar rutas reales con procedimientos realistas.",
    },
    {
      question: "¿Cómo puedo unirme a AERO PERU Virtual?",
      answer:
        "Para unirte a nuestra aerolínea virtual, simplemente regístrate en nuestra plataforma FSAirlines y completa el proceso de solicitud. Una vez aprobado, podrás comenzar a volar como piloto de AERO PERU Virtual.",
    },
    {
      question: "¿Qué simuladores de vuelo son compatibles?",
      answer:
        "Actualmente soportamos Microsoft Flight Simulator (2020), Prepar3D, X-Plane 11 y X-Plane 12. Nuestro sistema es compatible con estos simuladores a través de la plataforma FSAirlines.",
    },
    {
      question: "¿Necesito experiencia previa como piloto virtual?",
      answer:
        "No, no es necesario tener experiencia previa. Ofrecemos entrenamiento y recursos para pilotos de todos los niveles, desde principiantes hasta experimentados. Lo importante es tener entusiasmo por la aviación y compromiso con el realismo.",
    },
    {
      question: "¿Cuáles son los requisitos para volar en AERO PERU Virtual?",
      answer:
        "Necesitarás un simulador de vuelo compatible, una conexión a internet estable, y registrarte en nuestra plataforma. También recomendamos unirte a nuestro servidor de Discord para mantenerte conectado con la comunidad.",
    },
    {
      question: "¿Hay algún costo por unirse a AERO PERU Virtual?",
      answer:
        "No, unirse a AERO PERU Virtual es completamente gratuito. Somos una comunidad sin fines de lucro dedicada a la pasión por la aviación virtual.",
    },
  ],
  en: [
    {
      question: "What is AERO PERU Virtual?",
      answer:
        "AERO PERU Virtual is a virtual airline that simulates the operations of a real airline using flight simulators. We offer an immersive experience for aviation enthusiasts, allowing them to fly real routes with realistic procedures.",
    },
    {
      question: "How can I join AERO PERU Virtual?",
      answer:
        "To join our virtual airline, simply register on our FSAirlines platform and complete the application process. Once approved, you can start flying as an AERO PERU Virtual pilot.",
    },
    {
      question: "Which flight simulators are compatible?",
      answer:
        "We currently support Microsoft Flight Simulator (2020), Prepar3D, X-Plane 11, and X-Plane 12. Our system is compatible with these simulators through the FSAirlines platform.",
    },
    {
      question: "Do I need previous experience as a virtual pilot?",
      answer:
        "No, previous experience is not necessary. We offer training and resources for pilots of all levels, from beginners to experienced. What's important is enthusiasm for aviation and commitment to realism.",
    },
    {
      question: "What are the requirements to fly with AERO PERU Virtual?",
      answer:
        "You'll need a compatible flight simulator, a stable internet connection, and registration on our platform. We also recommend joining our Discord server to stay connected with the community.",
    },
    {
      question: "Is there a cost to join AERO PERU Virtual?",
      answer:
        "No, joining AERO PERU Virtual is completely free. We are a non-profit community dedicated to the passion for virtual aviation.",
    },
  ],
}

export function FaqSection() {
  const { language, t } = useLanguage()
  const faqs = language === "es" ? faqTranslations.es : faqTranslations.en

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-12 text-center">
            {language === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.3}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 dark:border-gray-800"
                >
                  <AccordionTrigger className="text-left font-light hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

