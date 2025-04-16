"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plane, Clock, Ruler, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ParallaxSection } from "@/components/animations/parallax-section"

// Datos de rutas expandidos
const routesData = {
  es: [
    // Rutas domésticas
    {
      from: "Lima (LIM)",
      to: "Cusco (CUZ)",
      duration: "1h 15m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "587 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "La ruta más popular de Perú, conectando la capital con la histórica ciudad de Cusco.",
      difficulty: "Fácil",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Arequipa (AQP)",
      duration: "1h 30m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "764 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Conecta Lima con la segunda ciudad más grande de Perú, conocida como la Ciudad Blanca.",
      difficulty: "Fácil",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Iquitos (IQT)",
      duration: "2h 00m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "1,010 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Ruta hacia la ciudad amazónica más grande de Perú, solo accesible por aire o agua.",
      difficulty: "Moderada",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Trujillo (TRU)",
      duration: "1h 10m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "557 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Conecta la capital con la histórica ciudad de Trujillo en la costa norte.",
      difficulty: "Fácil",
    },
    {
      from: "Lima (LIM)",
      to: "Piura (PIU)",
      duration: "1h 40m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "854 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Ruta hacia la soleada ciudad norteña de Piura, conocida por sus hermosas playas.",
      difficulty: "Fácil",
    },
    {
      from: "Lima (LIM)",
      to: "Juliaca (JUL)",
      duration: "1h 45m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "810 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Ruta hacia la puerta de entrada al Lago Titicaca, el lago navegable más alto del mundo.",
      difficulty: "Moderada",
    },
    {
      from: "Lima (LIM)",
      to: "Tarapoto (TPP)",
      duration: "1h 30m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "670 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Conecta Lima con esta ciudad amazónica conocida como la Ciudad de las Palmeras.",
      difficulty: "Moderada",
    },
    {
      from: "Lima (LIM)",
      to: "Chiclayo (CIX)",
      duration: "1h 25m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "680 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Ruta hacia la ciudad costera de Chiclayo, famosa por sus sitios arqueológicos.",
      difficulty: "Fácil",
    },
    {
      from: "Lima (LIM)",
      to: "Pucallpa (PCL)",
      duration: "1h 20m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "550 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Conecta Lima con esta importante ciudad amazónica a orillas del río Ucayali.",
      difficulty: "Moderada",
    },
    {
      from: "Cusco (CUZ)",
      to: "Juliaca (JUL)",
      duration: "0h 45m",
      aircraft: ["Embraer E190", "Bombardier Dash 8 Q400"],
      distance: "193 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Ruta corta que conecta dos importantes destinos turísticos del sur de Perú.",
      difficulty: "Moderada",
    },
    {
      from: "Cusco (CUZ)",
      to: "Puerto Maldonado (PEM)",
      duration: "0h 55m",
      aircraft: ["Embraer E190", "Bombardier Dash 8 Q400"],
      distance: "283 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Ruta hacia la puerta de entrada a la Amazonía peruana desde Cusco.",
      difficulty: "Moderada",
    },
    {
      from: "Arequipa (AQP)",
      to: "Cusco (CUZ)",
      duration: "1h 00m",
      aircraft: ["Embraer E190", "Bombardier Dash 8 Q400"],
      distance: "320 km",
      frequency: "Diaria",
      type: "Doméstica",
      description: "Conecta dos de las ciudades turísticas más importantes del sur de Perú.",
      difficulty: "Moderada",
    },

    // Rutas internacionales
    {
      from: "Lima (LIM)",
      to: "Santiago (SCL)",
      duration: "3h 30m",
      aircraft: ["Airbus A320", "Boeing 787-9"],
      distance: "2,453 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Ruta principal entre Perú y Chile, conectando dos importantes capitales sudamericanas.",
      difficulty: "Moderada",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Bogotá (BOG)",
      duration: "3h 15m",
      aircraft: ["Airbus A320", "Boeing 787-9"],
      distance: "1,890 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Conecta Lima con la capital colombiana, una importante ruta comercial y turística.",
      difficulty: "Moderada",
    },
    {
      from: "Lima (LIM)",
      to: "Buenos Aires (EZE)",
      duration: "4h 45m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "3,130 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Ruta de larga distancia que conecta Perú con Argentina.",
      difficulty: "Difícil",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Ciudad de México (MEX)",
      duration: "5h 30m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "4,230 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Importante ruta que conecta Perú con México, atravesando América Central.",
      difficulty: "Difícil",
    },
    {
      from: "Lima (LIM)",
      to: "Miami (MIA)",
      duration: "5h 45m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "4,180 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Una de las rutas más importantes hacia Estados Unidos, muy popular entre turistas y empresarios.",
      difficulty: "Difícil",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Madrid (MAD)",
      duration: "11h 30m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "9,520 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "La ruta transatlántica más importante, conectando Perú con España y Europa.",
      difficulty: "Muy difícil",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "São Paulo (GRU)",
      duration: "4h 55m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "3,620 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Importante ruta comercial que conecta Perú con la ciudad más grande de Brasil.",
      difficulty: "Difícil",
    },
    {
      from: "Lima (LIM)",
      to: "Quito (UIO)",
      duration: "2h 30m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "1,330 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Ruta que conecta Lima con la capital ecuatoriana, atravesando la región andina.",
      difficulty: "Moderada",
    },
    {
      from: "Lima (LIM)",
      to: "La Paz (LPB)",
      duration: "2h 15m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "1,210 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Ruta hacia la capital más alta del mundo, un desafío interesante para los pilotos.",
      difficulty: "Difícil",
    },
    {
      from: "Lima (LIM)",
      to: "Panamá (PTY)",
      duration: "3h 30m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "2,170 km",
      frequency: "Diaria",
      type: "Internacional",
      description: "Importante conexión con el hub de Panamá, puerta de entrada a Centroamérica y el Caribe.",
      difficulty: "Moderada",
    },
  ],
  en: [
    // Domestic routes
    {
      from: "Lima (LIM)",
      to: "Cusco (CUZ)",
      duration: "1h 15m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "587 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Peru's most popular route, connecting the capital with the historic city of Cusco.",
      difficulty: "Easy",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Arequipa (AQP)",
      duration: "1h 30m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "764 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Connects Lima with Peru's second-largest city, known as the White City.",
      difficulty: "Easy",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Iquitos (IQT)",
      duration: "2h 00m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "1,010 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Route to Peru's largest Amazonian city, only accessible by air or water.",
      difficulty: "Moderate",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Trujillo (TRU)",
      duration: "1h 10m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "557 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Connects the capital with the historic city of Trujillo on the northern coast.",
      difficulty: "Easy",
    },
    {
      from: "Lima (LIM)",
      to: "Piura (PIU)",
      duration: "1h 40m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "854 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Route to the sunny northern city of Piura, known for its beautiful beaches.",
      difficulty: "Easy",
    },
    {
      from: "Lima (LIM)",
      to: "Juliaca (JUL)",
      duration: "1h 45m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "810 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Route to the gateway to Lake Titicaca, the world's highest navigable lake.",
      difficulty: "Moderate",
    },
    {
      from: "Lima (LIM)",
      to: "Tarapoto (TPP)",
      duration: "1h 30m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "670 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Connects Lima with this Amazonian city known as the City of Palms.",
      difficulty: "Moderate",
    },
    {
      from: "Lima (LIM)",
      to: "Chiclayo (CIX)",
      duration: "1h 25m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "680 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Route to the coastal city of Chiclayo, famous for its archaeological sites.",
      difficulty: "Easy",
    },
    {
      from: "Lima (LIM)",
      to: "Pucallpa (PCL)",
      duration: "1h 20m",
      aircraft: ["Airbus A319", "Embraer E190"],
      distance: "550 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Connects Lima with this important Amazonian city on the banks of the Ucayali River.",
      difficulty: "Moderate",
    },
    {
      from: "Cusco (CUZ)",
      to: "Juliaca (JUL)",
      duration: "0h 45m",
      aircraft: ["Embraer E190", "Bombardier Dash 8 Q400"],
      distance: "193 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Short route connecting two important tourist destinations in southern Peru.",
      difficulty: "Moderate",
    },
    {
      from: "Cusco (CUZ)",
      to: "Puerto Maldonado (PEM)",
      duration: "0h 55m",
      aircraft: ["Embraer E190", "Bombardier Dash 8 Q400"],
      distance: "283 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Route to the gateway to the Peruvian Amazon from Cusco.",
      difficulty: "Moderate",
    },
    {
      from: "Arequipa (AQP)",
      to: "Cusco (CUZ)",
      duration: "1h 00m",
      aircraft: ["Embraer E190", "Bombardier Dash 8 Q400"],
      distance: "320 km",
      frequency: "Daily",
      type: "Domestic",
      description: "Connects two of the most important tourist cities in southern Peru.",
      difficulty: "Moderate",
    },

    // International routes
    {
      from: "Lima (LIM)",
      to: "Santiago (SCL)",
      duration: "3h 30m",
      aircraft: ["Airbus A320", "Boeing 787-9"],
      distance: "2,453 km",
      frequency: "Daily",
      type: "International",
      description: "Main route between Peru and Chile, connecting two important South American capitals.",
      difficulty: "Moderate",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Bogotá (BOG)",
      duration: "3h 15m",
      aircraft: ["Airbus A320", "Boeing 787-9"],
      distance: "1,890 km",
      frequency: "Daily",
      type: "International",
      description: "Connects Lima with the Colombian capital, an important commercial and tourist route.",
      difficulty: "Moderate",
    },
    {
      from: "Lima (LIM)",
      to: "Buenos Aires (EZE)",
      duration: "4h 45m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "3,130 km",
      frequency: "Daily",
      type: "International",
      description: "Long-distance route connecting Peru with Argentina.",
      difficulty: "Hard",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Mexico City (MEX)",
      duration: "5h 30m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "4,230 km",
      frequency: "Daily",
      type: "International",
      description: "Important route connecting Peru with Mexico, crossing Central America.",
      difficulty: "Hard",
    },
    {
      from: "Lima (LIM)",
      to: "Miami (MIA)",
      duration: "5h 45m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "4,180 km",
      frequency: "Daily",
      type: "International",
      description:
        "One of the most important routes to the United States, very popular among tourists and businesspeople.",
      difficulty: "Hard",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "Madrid (MAD)",
      duration: "11h 30m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "9,520 km",
      frequency: "Daily",
      type: "International",
      description: "The most important transatlantic route, connecting Peru with Spain and Europe.",
      difficulty: "Very hard",
      featured: true,
    },
    {
      from: "Lima (LIM)",
      to: "São Paulo (GRU)",
      duration: "4h 55m",
      aircraft: ["Boeing 787-9", "Airbus A330-200"],
      distance: "3,620 km",
      frequency: "Daily",
      type: "International",
      description: "Important commercial route connecting Peru with Brazil's largest city.",
      difficulty: "Hard",
    },
    {
      from: "Lima (LIM)",
      to: "Quito (UIO)",
      duration: "2h 30m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "1,330 km",
      frequency: "Daily",
      type: "International",
      description: "Route connecting Lima with the Ecuadorian capital, crossing the Andean region.",
      difficulty: "Moderate",
    },
    {
      from: "Lima (LIM)",
      to: "La Paz (LPB)",
      duration: "2h 15m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "1,210 km",
      frequency: "Daily",
      type: "International",
      description: "Route to the highest capital in the world, an interesting challenge for pilots.",
      difficulty: "Hard",
    },
    {
      from: "Lima (LIM)",
      to: "Panama (PTY)",
      duration: "3h 30m",
      aircraft: ["Airbus A320", "Boeing 737-800"],
      distance: "2,170 km",
      frequency: "Daily",
      type: "International",
      description: "Important connection with the Panama hub, gateway to Central America and the Caribbean.",
      difficulty: "Moderate",
    },
  ],
}

export default function RoutesPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-950"></div>
  }

  const routes = language === "es" ? routesData.es : routesData.en
  const featuredRoutes = routes.filter((route) => route.featured)

  // Filtrar rutas
  const filteredRoutes = routes.filter((route) => {
    const matchesSearch =
      searchQuery === "" ||
      route.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.to.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = selectedType === "all" || route.type.toLowerCase() === selectedType.toLowerCase()
    const matchesDifficulty =
      selectedDifficulty === "all" || route.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()

    return matchesSearch && matchesType && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      <div className="container py-12">
        <FadeIn delay={0.2}>
          <h1 className="text-3xl font-light mb-4 text-center">
            {language === "es" ? "Rutas de AERO PERU Virtual" : "AERO PERU Virtual Routes"}
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {language === "es"
              ? "Explora nuestra red de rutas domésticas e internacionales. Vuela a los destinos más emblemáticos de Perú y el mundo."
              : "Explore our network of domestic and international routes. Fly to the most iconic destinations in Peru and around the world."}
          </p>
        </FadeIn>

        {/* Búsqueda y filtros */}
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder={language === "es" ? "Buscar por aeropuerto..." : "Search by airport..."}
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

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                  {language === "es" ? "Tipo:" : "Type:"}
                </span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-sm"
                >
                  <option value="all">{language === "es" ? "Todas" : "All"}</option>
                  <option value={language === "es" ? "Doméstica" : "Domestic"}>
                    {language === "es" ? "Doméstica" : "Domestic"}
                  </option>
                  <option value={language === "es" ? "Internacional" : "International"}>
                    {language === "es" ? "Internacional" : "International"}
                  </option>
                </select>
              </div>

              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                  {language === "es" ? "Dificultad:" : "Difficulty:"}
                </span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-sm"
                >
                  <option value="all">{language === "es" ? "Todas" : "All"}</option>
                  <option value={language === "es" ? "Fácil" : "Easy"}>{language === "es" ? "Fácil" : "Easy"}</option>
                  <option value={language === "es" ? "Moderada" : "Moderate"}>
                    {language === "es" ? "Moderada" : "Moderate"}
                  </option>
                  <option value={language === "es" ? "Difícil" : "Hard"}>
                    {language === "es" ? "Difícil" : "Hard"}
                  </option>
                  <option value={language === "es" ? "Muy difícil" : "Very hard"}>
                    {language === "es" ? "Muy difícil" : "Very hard"}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mapa de rutas */}
        <FadeIn delay={0.4}>
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-xl font-light mb-6 text-center">{language === "es" ? "Mapa de Rutas" : "Route Map"}</h2>
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt={language === "es" ? "Mapa de rutas" : "Route map"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-white text-center px-4">
                  {language === "es"
                    ? "Mapa interactivo de rutas en desarrollo"
                    : "Interactive route map in development"}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Rutas destacadas */}
        {searchQuery === "" && selectedType === "all" && selectedDifficulty === "all" && (
          <div className="mb-16">
            <FadeIn delay={0.5}>
              <h2 className="text-xl font-light mb-8 text-center">
                {language === "es" ? "Rutas Destacadas" : "Featured Routes"}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRoutes.map((route, index) => (
                <FadeIn key={index} delay={0.6 + index * 0.1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-light">{route.from}</div>
                      <Plane className="h-4 w-4 text-primary transform rotate-90 group-hover:translate-x-2 transition-transform duration-300" />
                      <div className="text-lg font-light">{route.to}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {language === "es" ? "Duración" : "Duration"}
                          </div>
                          <div className="text-sm">{route.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Ruler className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {language === "es" ? "Distancia" : "Distance"}
                          </div>
                          <div className="text-sm">{route.distance}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {language === "es" ? "Aeronaves" : "Aircraft"}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {route.aircraft.map((aircraft, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                            {aircraft}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{route.description}</p>

                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          route.type === (language === "es" ? "Doméstica" : "Domestic")
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                            : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100"
                        }`}
                      >
                        {route.type}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          route.difficulty === (language === "es" ? "Fácil" : "Easy")
                            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                            : route.difficulty === (language === "es" ? "Moderada" : "Moderate")
                              ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                              : route.difficulty === (language === "es" ? "Difícil" : "Hard")
                                ? "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100"
                                : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                        }`}
                      >
                        {route.difficulty}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Todas las rutas filtradas */}
        <ParallaxSection speed={0.1}>
          <div className="mb-8">
            <h2 className="text-xl font-light mb-8 text-center">
              {language === "es" ? "Todas las Rutas" : "All Routes"}
              {filteredRoutes.length > 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({filteredRoutes.length})</span>
              )}
            </h2>
          </div>

          {filteredRoutes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoutes.map((route, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.05} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-light">{route.from}</div>
                      <Plane className="h-4 w-4 text-primary transform rotate-90 group-hover:translate-x-2 transition-transform duration-300" />
                      <div className="text-lg font-light">{route.to}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {language === "es" ? "Duración" : "Duration"}
                          </div>
                          <div className="text-sm">{route.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Ruler className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {language === "es" ? "Distancia" : "Distance"}
                          </div>
                          <div className="text-sm">{route.distance}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {language === "es" ? "Aeronaves" : "Aircraft"}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {route.aircraft.map((aircraft, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                            {aircraft}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{route.description}</p>

                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          route.type === (language === "es" ? "Doméstica" : "Domestic")
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                            : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100"
                        }`}
                      >
                        {route.type}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          route.difficulty === (language === "es" ? "Fácil" : "Easy")
                            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                            : route.difficulty === (language === "es" ? "Moderada" : "Moderate")
                              ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                              : route.difficulty === (language === "es" ? "Difícil" : "Hard")
                                ? "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100"
                                : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                        }`}
                      >
                        {route.difficulty}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Info className="h-12 w-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {language === "es"
                  ? "No se encontraron rutas que coincidan con tu búsqueda."
                  : "No routes found matching your search."}
              </p>
            </div>
          )}
        </ParallaxSection>

        {/* CTA para pilotos */}
        <FadeIn delay={0.7}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-light mb-4">{language === "es" ? "¿Listo para volar?" : "Ready to fly?"}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {language === "es"
                ? "Únete a AERO PERU Virtual y comienza a explorar estas rutas. Nuestro sistema ACARS te permitirá registrar tus vuelos y avanzar en tu carrera como piloto virtual."
                : "Join AERO PERU Virtual and start exploring these routes. Our ACARS system will allow you to log your flights and advance in your career as a virtual pilot."}
            </p>
            <Link href="https://www.fsairlines.net/en/login" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-white"
              >
                {language === "es" ? "Registrarse Ahora" : "Register Now"}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
