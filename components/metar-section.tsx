"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Info, Wind, Droplets, Eye, Thermometer, Clock, AlertCircle } from "lucide-react"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Datos de ejemplo de METAR para aeropuertos peruanos
const sampleMetars = {
  SPJC: {
    raw: "SPJC 281700Z 18010KT 9999 FEW020 SCT100 22/17 Q1012 NOSIG",
    decoded: {
      station: "SPJC (Jorge Chávez International, Lima)",
      time: "28th day at 17:00 UTC",
      wind: "180° at 10 knots",
      visibility: "10+ km",
      clouds: "Few clouds at 2,000 ft, Scattered clouds at 10,000 ft",
      temperature: "22°C",
      dewpoint: "17°C",
      pressure: "1012 hPa",
      remarks: "No significant change expected",
    },
  },
  SPZO: {
    raw: "SPZO 281630Z 32008KT 9999 FEW030 BKN200 16/05 Q1033 NOSIG",
    decoded: {
      station: "SPZO (Alejandro Velasco Astete, Cusco)",
      time: "28th day at 16:30 UTC",
      wind: "320° at 8 knots",
      visibility: "10+ km",
      clouds: "Few clouds at 3,000 ft, Broken clouds at 20,000 ft",
      temperature: "16°C",
      dewpoint: "5°C",
      pressure: "1033 hPa",
      remarks: "No significant change expected",
    },
  },
  SPQT: {
    raw: "SPQT 281645Z 35006KT 9999 FEW025CB SCT100 30/24 Q1010 NOSIG",
    decoded: {
      station: "SPQT (Coronel FAP Francisco Secada Vignetta, Iquitos)",
      time: "28th day at 16:45 UTC",
      wind: "350° at 6 knots",
      visibility: "10+ km",
      clouds: "Few cumulonimbus at 2,500 ft, Scattered clouds at 10,000 ft",
      temperature: "30°C",
      dewpoint: "24°C",
      pressure: "1010 hPa",
      remarks: "No significant change expected",
    },
  },
  SPIM: {
    raw: "SPIM 281700Z 18012KT 9999 FEW020 SCT100 23/18 Q1012 NOSIG",
    decoded: {
      station: "SPIM (Grupo 8, Lima-Callao)",
      time: "28th day at 17:00 UTC",
      wind: "180° at 12 knots",
      visibility: "10+ km",
      clouds: "Few clouds at 2,000 ft, Scattered clouds at 10,000 ft",
      temperature: "23°C",
      dewpoint: "18°C",
      pressure: "1012 hPa",
      remarks: "No significant change expected",
    },
  },
  SPRU: {
    raw: "SPRU 281645Z 32005KT 9999 FEW030 SCT200 28/18 Q1011 NOSIG",
    decoded: {
      station: "SPRU (Capitán FAP Carlos Martínez de Pinillos, Trujillo)",
      time: "28th day at 16:45 UTC",
      wind: "320° at 5 knots",
      visibility: "10+ km",
      clouds: "Few clouds at 3,000 ft, Scattered clouds at 20,000 ft",
      temperature: "28°C",
      dewpoint: "18°C",
      pressure: "1011 hPa",
      remarks: "No significant change expected",
    },
  },
}

// Aeropuertos populares de Perú
const popularAirports = [
  { icao: "SPJC", name: "Lima - Jorge Chávez International" },
  { icao: "SPZO", name: "Cusco - Alejandro Velasco Astete" },
  { icao: "SPQT", name: "Iquitos - Coronel FAP Francisco Secada Vignetta" },
  { icao: "SPIM", name: "Lima-Callao - Grupo 8" },
  { icao: "SPRU", name: "Trujillo - Capitán FAP Carlos Martínez de Pinillos" },
]

// Aeropuertos internacionales populares
const internationalAirports = [
  { icao: "KJFK", name: "New York - John F. Kennedy International" },
  { icao: "EGLL", name: "London - Heathrow" },
  { icao: "EDDF", name: "Frankfurt International" },
  { icao: "RJAA", name: "Tokyo - Narita International" },
  { icao: "YSSY", name: "Sydney Kingsford Smith" },
]

// Función para generar un METAR aleatorio para cualquier aeropuerto
function generateMetarForAirport(icao: string) {
  // Obtener fecha y hora actual en UTC
  const now = new Date()
  const day = now.getUTCDate().toString().padStart(2, "0")
  const hour = now.getUTCHours().toString().padStart(2, "0")
  const minute = now.getUTCMinutes().toString().padStart(2, "0")

  // Generar datos aleatorios para el METAR
  const windDirection = Math.floor(Math.random() * 360)
    .toString()
    .padStart(3, "0")
  const windSpeed = Math.floor(Math.random() * 25)
    .toString()
    .padStart(2, "0")
  const visibility = Math.random() > 0.2 ? "9999" : `${Math.floor(Math.random() * 9000 + 1000)}`

  // Tipos de nubes
  const cloudTypes = ["FEW", "SCT", "BKN", "OVC"]
  const cloudType1 = cloudTypes[Math.floor(Math.random() * cloudTypes.length)]
  const cloudType2 = cloudTypes[Math.floor(Math.random() * cloudTypes.length)]
  const cloudHeight1 = (Math.floor(Math.random() * 30) + 1).toString().padStart(3, "0")
  const cloudHeight2 = (Math.floor(Math.random() * 50) + 30).toString().padStart(3, "0")

  // Temperatura y punto de rocío
  const temperature = Math.floor(Math.random() * 35)
  const dewpoint = Math.floor(Math.random() * temperature)

  // Presión
  const pressure = Math.floor(Math.random() * 30 + 990)

  // Construir el METAR raw
  const raw = `${icao} ${day}${hour}${minute}Z ${windDirection}${windSpeed}KT ${visibility} ${cloudType1}${cloudHeight1} ${cloudType2}${cloudHeight2} ${temperature}/${dewpoint} Q${pressure} NOSIG`

  // Construir el objeto decodificado
  return {
    raw,
    decoded: {
      station: `${icao} (Airport)`,
      time: `${day}th day at ${hour}:${minute} UTC`,
      wind: `${windDirection}° at ${windSpeed} knots`,
      visibility: visibility === "9999" ? "10+ km" : `${Number.parseInt(visibility) / 1000} km`,
      clouds: `${cloudType1} at ${Number.parseInt(cloudHeight1) * 100} ft, ${cloudType2} at ${Number.parseInt(cloudHeight2) * 100} ft`,
      temperature: `${temperature}°C`,
      dewpoint: `${dewpoint}°C`,
      pressure: `${pressure} hPa`,
      remarks: "No significant change expected",
    },
  }
}

export function MetarSection() {
  const { language, t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAirport, setSelectedAirport] = useState<string | null>(null)
  const [showHelp, setShowHelp] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [metarData, setMetarData] = useState<any>(null)
  const [zuluTime, setZuluTime] = useState<string>("")
  const [mounted, setMounted] = useState(false)

  // Actualizar la hora Zulu cada segundo
  useEffect(() => {
    setMounted(true)

    const updateZuluTime = () => {
      const now = new Date()
      const hours = now.getUTCHours().toString().padStart(2, "0")
      const minutes = now.getUTCMinutes().toString().padStart(2, "0")
      const seconds = now.getUTCSeconds().toString().padStart(2, "0")
      setZuluTime(`${hours}:${minutes}:${seconds}Z`)
    }

    // Actualizar inmediatamente
    updateZuluTime()

    // Configurar intervalo para actualizar cada segundo
    const interval = setInterval(updateZuluTime, 1000)

    // Limpiar intervalo al desmontar
    return () => clearInterval(interval)
  }, [])

  const handleSearch = () => {
    const query = searchQuery.trim().toUpperCase()

    // Validar formato ICAO (generalmente 4 letras)
    if (!query.match(/^[A-Z]{4}$/)) {
      setError(
        language === "es"
          ? "Por favor ingresa un código ICAO válido (4 letras)"
          : "Please enter a valid ICAO code (4 letters)",
      )
      return
    }

    setError(null)
    setSelectedAirport(query)

    // Verificar si tenemos datos predefinidos para este aeropuerto
    if (sampleMetars[query as keyof typeof sampleMetars]) {
      setMetarData(sampleMetars[query as keyof typeof sampleMetars])
    } else {
      // Generar datos METAR aleatorios para este aeropuerto
      setMetarData(generateMetarForAirport(query))
    }
  }

  const selectAirport = (icao: string) => {
    setSearchQuery(icao)
    setSelectedAirport(icao)
    setError(null)

    // Verificar si tenemos datos predefinidos para este aeropuerto
    if (sampleMetars[icao as keyof typeof sampleMetars]) {
      setMetarData(sampleMetars[icao as keyof typeof sampleMetars])
    } else {
      // Generar datos METAR aleatorios para este aeropuerto
      setMetarData(generateMetarForAirport(icao))
    }
  }

  // No renderizar nada hasta que el componente esté montado
  if (!mounted) {
    return <section id="metar" className="py-24 bg-white dark:bg-gray-950 relative"></section>
  }

  return (
    <section id="metar" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-4 text-center">
            {language === "es" ? "Información Meteorológica (METAR)" : "Weather Information (METAR)"}
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            {language === "es"
              ? "Consulta la información meteorológica actual de aeropuertos en todo el mundo."
              : "Check current weather information for airports worldwide."}
          </p>

          {/* Hora Zulu actual */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <Clock className="h-4 w-4 text-primary" />
            <p className="text-sm font-mono">
              {language === "es" ? "Hora Zulu actual: " : "Current Zulu time: "}
              <span className="font-bold">{zuluTime}</span>
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Búsqueda de METAR */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder={language === "es" ? "Ingresa código ICAO (ej. SPJC)" : "Enter ICAO code (e.g. SPJC)"}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
                  className="h-10"
                  maxLength={4}
                />
              </div>
              <Button onClick={handleSearch} className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                {language === "es" ? "Buscar" : "Search"}
              </Button>
              <Button variant="outline" onClick={() => setShowHelp(!showHelp)} className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                {language === "es" ? "Ayuda" : "Help"}
              </Button>
            </div>

            {/* Mensaje de error */}
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </FadeIn>

          {/* Aeropuertos populares */}
          <FadeIn delay={0.4}>
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">
                {language === "es" ? "Aeropuertos Peruanos:" : "Peruvian Airports:"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularAirports.map((airport) => (
                  <button
                    key={airport.icao}
                    onClick={() => selectAirport(airport.icao)}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {airport.icao} - {airport.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium mb-2">
                {language === "es" ? "Aeropuertos Internacionales:" : "International Airports:"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {internationalAirports.map((airport) => (
                  <button
                    key={airport.icao}
                    onClick={() => selectAirport(airport.icao)}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {airport.icao} - {airport.name}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Resultados METAR */}
          {selectedAirport && metarData && (
            <ParallaxSection speed={0.1}>
              <FadeIn delay={0.5}>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
                  <h3 className="text-lg font-medium mb-4">{metarData.decoded.station}</h3>

                  <div className="bg-gray-100 dark:bg-gray-800 p-3 font-mono text-sm mb-6 overflow-x-auto">
                    {metarData.raw}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">
                          {language === "es" ? "Hora del Reporte" : "Report Time"}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">{metarData.decoded.time}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Wind className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">{language === "es" ? "Viento" : "Wind"}</div>
                        <div className="text-gray-600 dark:text-gray-300">{metarData.decoded.wind}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">{language === "es" ? "Visibilidad" : "Visibility"}</div>
                        <div className="text-gray-600 dark:text-gray-300">{metarData.decoded.visibility}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Thermometer className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">
                          {language === "es" ? "Temperatura / Punto de Rocío" : "Temperature / Dew Point"}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          {metarData.decoded.temperature} / {metarData.decoded.dewpoint}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Droplets className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">{language === "es" ? "Nubes" : "Clouds"}</div>
                        <div className="text-gray-600 dark:text-gray-300">{metarData.decoded.clouds}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">{language === "es" ? "Presión" : "Pressure"}</div>
                        <div className="text-gray-600 dark:text-gray-300">{metarData.decoded.pressure}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </ParallaxSection>
          )}

          {/* Ayuda para interpretar METAR */}
          {showHelp && (
            <FadeIn delay={0.3}>
              <div className="mt-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
                <h3 className="text-lg font-medium mb-4">
                  {language === "es" ? "Cómo interpretar un METAR" : "How to interpret a METAR"}
                </h3>
                <div className="space-y-3 text-sm">
                  <p>
                    {language === "es"
                      ? "METAR es un formato estándar para reportes meteorológicos utilizados en aviación. Aquí hay una guía básica:"
                      : "METAR is a standard format for weather reports used in aviation. Here's a basic guide:"}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>{language === "es" ? "SPJC" : "SPJC"}</strong> -
                      {language === "es" ? " Código ICAO del aeropuerto" : " ICAO airport code"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "281700Z" : "281700Z"}</strong> -
                      {language === "es" ? " Día 28 a las 17:00 UTC" : " 28th day at 17:00 UTC"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "18010KT" : "18010KT"}</strong> -
                      {language === "es" ? " Viento de 180° a 10 nudos" : " Wind from 180° at 10 knots"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "9999" : "9999"}</strong> -
                      {language === "es" ? " Visibilidad de 10km o más" : " Visibility of 10km or more"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "FEW020 SCT100" : "FEW020 SCT100"}</strong> -
                      {language === "es"
                        ? " Pocas nubes a 2,000 pies, nubes dispersas a 10,000 pies"
                        : " Few clouds at 2,000 feet, scattered clouds at 10,000 feet"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "22/17" : "22/17"}</strong> -
                      {language === "es"
                        ? " Temperatura 22°C, punto de rocío 17°C"
                        : " Temperature 22°C, dew point 17°C"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "Q1012" : "Q1012"}</strong> -
                      {language === "es" ? " Presión atmosférica 1012 hPa" : " Atmospheric pressure 1012 hPa"}
                    </li>
                    <li>
                      <strong>{language === "es" ? "NOSIG" : "NOSIG"}</strong> -
                      {language === "es" ? " No se esperan cambios significativos" : " No significant changes expected"}
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  )
}

