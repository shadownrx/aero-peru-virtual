"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, FileText, Shield, Info } from "lucide-react"

// Categorías de normativas
const ruleCategories = {
  es: [
    { id: "va-rules", name: "Reglas de la VA", icon: <Shield className="h-4 w-4" /> },
    { id: "ivao", name: "Normativas IVAO", icon: <FileText className="h-4 w-4" /> },
    { id: "gdpr", name: "Política GDPR", icon: <FileText className="h-4 w-4" /> },
    { id: "faq", name: "Preguntas Frecuentes", icon: <Info className="h-4 w-4" /> },
  ],
  en: [
    { id: "va-rules", name: "VA Rules", icon: <Shield className="h-4 w-4" /> },
    { id: "ivao", name: "IVAO Regulations", icon: <FileText className="h-4 w-4" /> },
    { id: "gdpr", name: "GDPR Policy", icon: <FileText className="h-4 w-4" /> },
    { id: "faq", name: "FAQ", icon: <Info className="h-4 w-4" /> },
  ],
}

// Enlaces a las páginas completas de normativas
const regulationLinks = {
  es: {
    "va-rules": "/resources/regulaciones-va",
    ivao: "https://ivao.aero/members/regulations.htm",
    gdpr: "/resources/politica-gdpr",
  },
  en: {
    "va-rules": "/resources/va-regulations",
    ivao: "https://ivao.aero/members/regulations.htm",
    gdpr: "/resources/gdpr-policy",
  },
}

// Preguntas frecuentes y reglas por categoría
const rulesTranslations = {
  es: {
    "va-rules": [
      {
        question: "Requisitos de Membresía",
        answer:
          "Para ser miembro activo de AERO PERU Virtual, debes: tener al menos 16 años de edad, poseer una copia legal de un simulador de vuelo compatible, comprometerte a realizar al menos un vuelo cada 30 días, mantener un comportamiento profesional y respetuoso, y seguir los procedimientos operativos estándar durante los vuelos.",
      },
      {
        question: "Código de Conducta",
        answer:
          "Todos los miembros deben adherirse a nuestro código de conducta: tratar a todos con respeto y cortesía, mantener un comportamiento profesional durante vuelos y comunicaciones, no falsificar registros de vuelo ni usar software no autorizado, ayudar a otros miembros cuando sea posible, y recordar que representas a AERO PERU Virtual en eventos externos.",
      },
      {
        question: "Regulaciones de Vuelo",
        answer:
          "Todos los vuelos deben tener un plan de vuelo válido, seguir rutas realistas, utilizar el sistema ACARS para el registro, completarse en tiempo real (sin aceleración mayor a 4x), y seguir los procedimientos estándar de operación desde la puerta de salida hasta la de llegada.",
      },
      {
        question: "Sistema de Rangos",
        answer:
          "Utilizamos un sistema de rangos basado en horas de vuelo: Piloto en Entrenamiento (0-50 horas), Segundo Oficial (50-100 horas), Primer Oficial (100-250 horas) y Capitán (250+ horas). Cada rango desbloquea acceso a diferentes aeronaves y rutas.",
      },
      {
        question: "Política de Inactividad",
        answer:
          "Después de 30 días sin actividad, recibirás una notificación de advertencia. A los 60 días, pasarás a estado inactivo, y a los 90 días tu cuenta podría ser eliminada. Si sabes que estarás ausente, puedes solicitar una licencia de ausencia que congelará tu cuenta por hasta 6 meses.",
      },
      {
        question: "Acciones Disciplinarias",
        answer:
          "Las infracciones graves que pueden resultar en expulsión incluyen: falsificación de registros de vuelo, uso de software no autorizado para obtener ventajas, comportamiento irrespetuoso o abusivo hacia otros miembros, violaciones repetidas de las reglas después de advertencias, y cualquier acción que dañe la reputación de AERO PERU Virtual.",
      },
    ],
    ivao: [
      {
        question: "Requisitos para volar en IVAO",
        answer:
          "Para volar en IVAO necesitarás: registrarte y obtener un ID de IVAO (proceso gratuito), instalar el cliente de IVAO (Altitude) compatible con tu simulador, y familiarizarte con las reglas básicas y procedimientos de comunicación de IVAO.",
      },
      {
        question: "Reglas Fundamentales de IVAO",
        answer:
          "Las reglas fundamentales de IVAO incluyen: usar tu nombre real, mantener comunicaciones profesionales, seguir las instrucciones de ATC, utilizar fraseología estándar, no desconectarte en vuelo sin notificar a ATC, y respetar a otros usuarios.",
      },
      {
        question: "Comunicaciones en IVAO",
        answer:
          "En IVAO debes mantener un comportamiento profesional en todo momento, usar fraseología aeronáutica correcta, seguir los procedimientos de vuelo estándar, obedecer las instrucciones de ATC, y no saturar las frecuencias con charlas innecesarias.",
      },
      {
        question: "Integración con AERO PERU Virtual",
        answer:
          "AERO PERU Virtual colabora con IVAO para ofrecer a nuestros pilotos una experiencia más inmersiva. Aunque no es obligatorio volar en IVAO, lo recomendamos encarecidamente y ofrecemos bonificaciones adicionales en nuestro sistema de progresión por vuelos realizados en la red de IVAO.",
      },
    ],
    gdpr: [
      {
        question: "Información Personal Recopilada",
        answer:
          "Recopilamos información de identificación (nombre, nombre de usuario), información de contacto (correo electrónico, país), información técnica (dirección IP, navegador) e información de actividad (registros de vuelo, participación en eventos). Solo recopilamos lo necesario para proporcionar nuestros servicios.",
      },
      {
        question: "Uso de la Información",
        answer:
          "Utilizamos tu información personal para: gestionar tu cuenta y proporcionar nuestros servicios, comunicarnos contigo sobre actualizaciones y eventos, mejorar nuestros servicios, garantizar el cumplimiento de nuestras regulaciones, y resolver disputas y problemas técnicos.",
      },
      {
        question: "Derechos bajo el GDPR",
        answer:
          "Bajo el GDPR, tienes derecho a: acceder a tus datos, rectificar información inexacta, solicitar la eliminación de tus datos, limitar el procesamiento, obtener una copia de tus datos en formato estructurado, oponerte al procesamiento, y no ser objeto de decisiones automatizadas.",
      },
      {
        question: "Seguridad de los Datos",
        answer:
          "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos, incluyendo encriptación de datos sensibles, acceso restringido a la información personal, monitoreo regular de nuestros sistemas, y formación en protección de datos para nuestro personal.",
      },
    ],
    faq: [
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
        question: "¿Hay algún costo por unirse a AERO PERU Virtual?",
        answer:
          "No, unirse a AERO PERU Virtual es completamente gratuito. Somos una comunidad sin fines de lucro dedicada a la pasión por la aviación virtual.",
      },
    ],
  },
  en: {
    "va-rules": [
      {
        question: "Membership Requirements",
        answer:
          "To be an active member of AERO PERU Virtual, you must: be at least 16 years old, own a legal copy of a compatible flight simulator, commit to completing at least one flight every 30 days, maintain professional and respectful behavior, and follow standard operating procedures during flights.",
      },
      {
        question: "Code of Conduct",
        answer:
          "All members must adhere to our code of conduct: treat everyone with respect and courtesy, maintain professional behavior during flights and communications, do not falsify flight records or use unauthorized software, help other members when possible, and remember that you represent AERO PERU Virtual in external events.",
      },
      {
        question: "Flight Regulations",
        answer:
          "All flights must have a valid flight plan, follow realistic routes, use the ACARS system for logging, be completed in real-time (no time acceleration greater than 4x), and follow standard operating procedures from departure gate to arrival gate.",
      },
      {
        question: "Rank System",
        answer:
          "We use a rank system based on flight hours: Trainee Pilot (0-50 hours), Second Officer (50-100 hours), First Officer (100-250 hours), and Captain (250+ hours). Each rank unlocks access to different aircraft and routes.",
      },
      {
        question: "Inactivity Policy",
        answer:
          "After 30 days of inactivity, you'll receive a warning notification. At 60 days, you'll be moved to inactive status, and at 90 days your account may be deleted. If you know you'll be absent, you can request a leave of absence that will freeze your account for up to 6 months.",
      },
      {
        question: "Disciplinary Actions",
        answer:
          "Serious infractions that may result in expulsion include: falsification of flight records, use of unauthorized software to gain advantages, disrespectful or abusive behavior towards other members, repeated violations of rules after warnings, and any action that damages the reputation of AERO PERU Virtual.",
      },
    ],
    ivao: [
      {
        question: "Requirements for Flying on IVAO",
        answer:
          "To fly on IVAO you'll need: to register and obtain an IVAO ID (free process), install the IVAO client (Altitude) compatible with your simulator, and familiarize yourself with IVAO's basic rules and communication procedures.",
      },
      {
        question: "IVAO Fundamental Rules",
        answer:
          "IVAO's fundamental rules include: using your real name, maintaining professional communications, following ATC instructions, using standard phraseology, not disconnecting in flight without notifying ATC, and respecting other users.",
      },
      {
        question: "Communications on IVAO",
        answer:
          "On IVAO you must maintain professional behavior at all times, use correct aeronautical phraseology, follow standard flight procedures, obey ATC instructions, and not saturate frequencies with unnecessary chatter.",
      },
      {
        question: "Integration with AERO PERU Virtual",
        answer:
          "AERO PERU Virtual collaborates with IVAO to offer our pilots a more immersive experience. While it's not mandatory to fly on IVAO, we highly recommend it and offer additional bonuses in our progression system for flights conducted on the IVAO network.",
      },
    ],
    gdpr: [
      {
        question: "Personal Information Collected",
        answer:
          "We collect identification information (name, username), contact information (email, country), technical information (IP address, browser), and activity information (flight logs, event participation). We only collect what is necessary to provide our services.",
      },
      {
        question: "Use of Information",
        answer:
          "We use your personal information to: manage your account and provide our services, communicate with you about updates and events, improve our services, ensure compliance with our regulations, and resolve disputes and technical issues.",
      },
      {
        question: "Rights under GDPR",
        answer:
          "Under GDPR, you have the right to: access your data, rectify inaccurate information, request deletion of your data, restrict processing, obtain a copy of your data in a structured format, object to processing, and not be subject to automated decision-making.",
      },
      {
        question: "Data Security",
        answer:
          "We implement technical and organizational security measures to protect your data, including encryption of sensitive data, restricted access to personal information, regular monitoring of our systems, and data protection training for our staff.",
      },
    ],
    faq: [
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
        question: "Is there a cost to join AERO PERU Virtual?",
        answer:
          "No, joining AERO PERU Virtual is completely free. We are a non-profit community dedicated to the passion for virtual aviation.",
      },
    ],
  },
}

export function RulesSection() {
  const { language } = useLanguage()
  const categories = language === "es" ? ruleCategories.es : ruleCategories.en
  const rules = language === "es" ? rulesTranslations.es : rulesTranslations.en
  const links = language === "es" ? regulationLinks.es : regulationLinks.en

  return (
    <section id="rules" className="py-24 bg-white dark:bg-gray-950 relative scroll-mt-20">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-12 text-center">
            {language === "es" ? "Normativas y Reglamentos" : "Rules and Regulations"}
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.3}>
            <Tabs defaultValue="va-rules" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm flex items-center gap-2">
                    {category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(rules).map(([categoryId, categoryRules]) => (
                <TabsContent key={categoryId} value={categoryId} className="mt-0">
                  <div className="mb-6">
                    {categoryId !== "faq" && links[categoryId] && (
                      <div className="bg-primary-light dark:bg-gray-800 p-4 rounded-sm mb-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-medium">
                            {language === "es"
                              ? `Documentación completa de ${categories.find((c) => c.id === categoryId)?.name}`
                              : `Complete ${categories.find((c) => c.id === categoryId)?.name} Documentation`}
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {language === "es"
                              ? "Consulta nuestra documentación detallada para obtener información completa."
                              : "Check our detailed documentation for complete information."}
                          </p>
                        </div>
                        <Link
                          href={links[categoryId]}
                          target={links[categoryId].startsWith("http") ? "_blank" : "_self"}
                          rel={links[categoryId].startsWith("http") ? "noopener noreferrer" : ""}
                        >
                          <Button variant="default" className="rounded-none flex items-center gap-2">
                            {language === "es" ? "Ver Documento Completo" : "View Complete Document"}
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {categoryRules.map((rule, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${categoryId}-${index}`}
                        className="border-b border-gray-200 dark:border-gray-800"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {rule.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400 font-light">
                          {rule.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
