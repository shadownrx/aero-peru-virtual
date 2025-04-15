"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, FileText, Shield, Info } from "lucide-react"

// Categorías de FAQ
const faqCategories = {
  es: [
    { id: "general", name: "General", icon: <Info className="h-4 w-4" /> },
    { id: "va-rules", name: "Reglas de la VA", icon: <Shield className="h-4 w-4" /> },
    { id: "ivao", name: "Normativas IVAO", icon: <FileText className="h-4 w-4" /> },
    { id: "gdpr", name: "Política GDPR", icon: <FileText className="h-4 w-4" /> },
  ],
  en: [
    { id: "general", name: "General", icon: <Info className="h-4 w-4" /> },
    { id: "va-rules", name: "VA Rules", icon: <Shield className="h-4 w-4" /> },
    { id: "ivao", name: "IVAO Regulations", icon: <FileText className="h-4 w-4" /> },
    { id: "gdpr", name: "GDPR Policy", icon: <FileText className="h-4 w-4" /> },
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

// Preguntas frecuentes por categoría
const faqTranslations = {
  es: {
    general: [
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
    "va-rules": [
      {
        question: "¿Cuáles son las reglas principales de AERO PERU Virtual?",
        answer:
          "Nuestras reglas principales incluyen: completar al menos un vuelo cada 30 días, seguir procedimientos de vuelo realistas, utilizar nuestro sistema ACARS para registrar vuelos, mantener comunicaciones profesionales, y adherirse a nuestro código de conducta. El incumplimiento de estas reglas puede resultar en acciones disciplinarias.",
      },
      {
        question: "¿Cómo funciona el sistema de rangos en AERO PERU Virtual?",
        answer:
          "Utilizamos un sistema de rangos basado en horas de vuelo y experiencia: Piloto en Entrenamiento (0-50 horas), Segundo Oficial (50-100 horas), Primer Oficial (100-250 horas) y Capitán (250+ horas). Cada rango desbloquea acceso a diferentes aeronaves y rutas.",
      },
      {
        question: "¿Qué sucede si estoy inactivo por un período prolongado?",
        answer:
          "Después de 30 días sin actividad, recibirás una notificación de advertencia. A los 60 días, pasarás a estado inactivo, y a los 90 días tu cuenta podría ser eliminada. Si sabes que estarás ausente, puedes solicitar una licencia de ausencia que congelará tu cuenta por hasta 6 meses.",
      },
      {
        question: "¿Cuáles son los requisitos para los vuelos en AERO PERU Virtual?",
        answer:
          "Todos los vuelos deben: tener un plan de vuelo válido, seguir rutas realistas, utilizar el sistema ACARS para el registro, completarse en tiempo real (sin aceleración mayor a 4x), y seguir los procedimientos estándar de operación desde la puerta de salida hasta la de llegada.",
      },
      {
        question: "¿Puedo volar cualquier ruta o aeronave?",
        answer:
          "Las rutas y aeronaves disponibles dependen de tu rango. Los pilotos nuevos comienzan con acceso a aeronaves básicas y rutas domésticas, desbloqueando más opciones a medida que avanzan en rango. Todas nuestras rutas están basadas en operaciones reales o históricas de aerolíneas peruanas.",
      },
      {
        question: "¿Qué acciones pueden resultar en la expulsión de AERO PERU Virtual?",
        answer:
          "Las infracciones graves que pueden resultar en expulsión incluyen: falsificación de registros de vuelo, uso de software no autorizado para obtener ventajas, comportamiento irrespetuoso o abusivo hacia otros miembros, violaciones repetidas de las reglas después de advertencias, y cualquier acción que dañe la reputación de AERO PERU Virtual.",
      },
    ],
    ivao: [
      {
        question: "¿Qué es IVAO y cómo se relaciona con AERO PERU Virtual?",
        answer:
          "IVAO (International Virtual Aviation Organisation) es una red global de simulación de vuelo que proporciona servicios de control de tráfico aéreo y un entorno realista para vuelos en línea. AERO PERU Virtual colabora con IVAO para ofrecer a nuestros pilotos una experiencia más inmersiva con ATC real y otros pilotos en línea.",
      },
      {
        question: "¿Es obligatorio volar en IVAO como piloto de AERO PERU Virtual?",
        answer:
          "No es obligatorio, pero lo recomendamos encarecidamente. Volar en IVAO añade un nivel de realismo significativo a tu experiencia. Ofrecemos vuelos tanto en modo offline como online, pero los vuelos en IVAO pueden otorgar bonificaciones adicionales en nuestro sistema de progresión.",
      },
      {
        question: "¿Cuáles son las reglas básicas de IVAO que debo conocer?",
        answer:
          "Las reglas fundamentales de IVAO incluyen: usar tu nombre real, mantener comunicaciones profesionales, seguir las instrucciones de ATC, utilizar fraseología estándar, no desconectarte en vuelo sin notificar a ATC, y respetar a otros usuarios. IVAO tiene un código de conducta completo disponible en su sitio web.",
      },
      {
        question: "¿Necesito un ID de IVAO separado para volar con AERO PERU Virtual?",
        answer:
          "Sí, necesitarás registrarte en IVAO y obtener un ID de IVAO. Este proceso es gratuito. Una vez que tengas tu ID, puedes vincularlo a tu cuenta de AERO PERU Virtual para que tus vuelos en IVAO sean reconocidos automáticamente en nuestro sistema.",
      },
    ],
    gdpr: [
      {
        question: "¿Cómo protege AERO PERU Virtual mis datos personales?",
        answer:
          "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos, incluyendo encriptación de datos sensibles, acceso restringido a la información personal, monitoreo regular de nuestros sistemas, y formación en protección de datos para nuestro personal.",
      },
      {
        question: "¿Qué información personal recopila AERO PERU Virtual?",
        answer:
          "Recopilamos información de identificación (nombre, nombre de usuario), información de contacto (correo electrónico, país), información técnica (dirección IP, navegador) e información de actividad (registros de vuelo, participación en eventos). Solo recopilamos lo necesario para proporcionar nuestros servicios.",
      },
      {
        question: "¿Cuáles son mis derechos respecto a mis datos personales?",
        answer:
          "Bajo el GDPR, tienes derecho a acceder, rectificar, eliminar y limitar el procesamiento de tus datos. También tienes derecho a la portabilidad de datos, a oponerte al procesamiento y a no ser objeto de decisiones automatizadas. Puedes ejercer estos derechos contactando a nuestro Delegado de Protección de Datos.",
      },
      {
        question: "¿AERO PERU Virtual comparte mis datos con terceros?",
        answer:
          "Compartimos cierta información con IVAO para facilitar la integración de servicios, con proveedores de servicios necesarios para operar nuestro sitio web, y con socios de la comunidad para eventos conjuntos. No vendemos, alquilamos ni comercializamos tu información personal a terceros para fines de marketing.",
      },
    ],
  },
  en: {
    general: [
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
    "va-rules": [
      {
        question: "What are the main rules of AERO PERU Virtual?",
        answer:
          "Our main rules include: completing at least one flight every 30 days, following realistic flight procedures, using our ACARS system to log flights, maintaining professional communications, and adhering to our code of conduct. Failure to comply with these rules may result in disciplinary actions.",
      },
      {
        question: "How does the rank system work in AERO PERU Virtual?",
        answer:
          "We use a rank system based on flight hours and experience: Trainee Pilot (0-50 hours), Second Officer (50-100 hours), First Officer (100-250 hours), and Captain (250+ hours). Each rank unlocks access to different aircraft and routes.",
      },
      {
        question: "What happens if I'm inactive for an extended period?",
        answer:
          "After 30 days of inactivity, you'll receive a warning notification. At 60 days, you'll be moved to inactive status, and at 90 days your account may be deleted. If you know you'll be absent, you can request a leave of absence that will freeze your account for up to 6 months.",
      },
      {
        question: "What are the requirements for flights in AERO PERU Virtual?",
        answer:
          "All flights must: have a valid flight plan, follow realistic routes, use the ACARS system for logging, be completed in real-time (no time acceleration greater than 4x), and follow standard operating procedures from departure gate to arrival gate.",
      },
      {
        question: "Can I fly any route or aircraft?",
        answer:
          "Available routes and aircraft depend on your rank. New pilots start with access to basic aircraft and domestic routes, unlocking more options as they advance in rank. All our routes are based on real or historical operations of Peruvian airlines.",
      },
      {
        question: "What actions can result in expulsion from AERO PERU Virtual?",
        answer:
          "Serious infractions that may result in expulsion include: falsification of flight records, use of unauthorized software to gain advantages, disrespectful or abusive behavior towards other members, repeated violations of rules after warnings, and any action that damages the reputation of AERO PERU Virtual.",
      },
    ],
    ivao: [
      {
        question: "What is IVAO and how does it relate to AERO PERU Virtual?",
        answer:
          "IVAO (International Virtual Aviation Organisation) is a global flight simulation network that provides air traffic control services and a realistic environment for online flights. AERO PERU Virtual collaborates with IVAO to offer our pilots a more immersive experience with real ATC and other online pilots.",
      },
      {
        question: "Is it mandatory to fly on IVAO as an AERO PERU Virtual pilot?",
        answer:
          "It's not mandatory, but we highly recommend it. Flying on IVAO adds a significant level of realism to your experience. We offer both offline and online flights, but flights on IVAO may provide additional bonuses in our progression system.",
      },
      {
        question: "What are the basic IVAO rules I should know?",
        answer:
          "IVAO's fundamental rules include: using your real name, maintaining professional communications, following ATC instructions, using standard phraseology, not disconnecting in flight without notifying ATC, and respecting other users. IVAO has a complete code of conduct available on their website.",
      },
      {
        question: "Do I need a separate IVAO ID to fly with AERO PERU Virtual?",
        answer:
          "Yes, you'll need to register with IVAO and obtain an IVAO ID. This process is free. Once you have your ID, you can link it to your AERO PERU Virtual account so your IVAO flights are automatically recognized in our system.",
      },
    ],
    gdpr: [
      {
        question: "How does AERO PERU Virtual protect my personal data?",
        answer:
          "We implement technical and organizational security measures to protect your data, including encryption of sensitive data, restricted access to personal information, regular monitoring of our systems, and data protection training for our staff.",
      },
      {
        question: "What personal information does AERO PERU Virtual collect?",
        answer:
          "We collect identification information (name, username), contact information (email, country), technical information (IP address, browser), and activity information (flight logs, event participation). We only collect what is necessary to provide our services.",
      },
      {
        question: "What are my rights regarding my personal data?",
        answer:
          "Under GDPR, you have the right to access, rectify, erase, and restrict the processing of your data. You also have the right to data portability, to object to processing, and not to be subject to automated decision-making. You can exercise these rights by contacting our Data Protection Officer.",
      },
      {
        question: "Does AERO PERU Virtual share my data with third parties?",
        answer:
          "We share certain information with IVAO to facilitate service integration, with service providers necessary to operate our website, and with community partners for joint events. We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
      },
    ],
  },
}

export function FaqSection() {
  const { language } = useLanguage()
  const categories = language === "es" ? faqCategories.es : faqCategories.en
  const faqs = language === "es" ? faqTranslations.es : faqTranslations.en
  const links = language === "es" ? regulationLinks.es : regulationLinks.en

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
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm flex items-center gap-2">
                    {category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(faqs).map(([categoryId, categoryFaqs]) => (
                <TabsContent key={categoryId} value={categoryId} className="mt-0">
                  <div className="mb-6">
                    {categoryId !== "general" && links[categoryId] && (
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-sm mb-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-medium">
                            {language === "es"
                              ? `Normativas completas de ${categories.find((c) => c.id === categoryId)?.name}`
                              : `Complete ${categories.find((c) => c.id === categoryId)?.name} Regulations`}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
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
                          <Button variant="outline" className="rounded-none flex items-center gap-2">
                            {language === "es" ? "Ver Normativa Completa" : "View Complete Regulations"}
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {categoryFaqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${categoryId}-${index}`}
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
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
