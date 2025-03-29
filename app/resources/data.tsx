import type React from "react"
import Image from "next/image"
import { BookOpen, Video, Download, Users, Map, Headphones, FileText, Compass } from "lucide-react"

// Tipo para los recursos
export type Resource = {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  category: string
  featured?: boolean
  slug?: string
  coverImage?: string
  tableOfContents?: string[]
  content?: React.ReactNode
  pdfUrl?: string
}

// Datos de recursos
export const resourcesData = {
  es: [
    {
      title: "Guía para Principiantes",
      description: "Todo lo que necesitas saber para comenzar como piloto virtual en AERO PERU.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "/resources/guia-principiantes",
      category: "guides",
      featured: true,
      slug: "guia-principiantes",
      coverImage: "/placeholder.svg?height=400&width=800",
      tableOfContents: [
        "Introducción a la aviación virtual",
        "Requisitos de software y hardware",
        "Primeros pasos con el simulador",
        "Conceptos básicos de vuelo",
        "Procedimientos estándar",
        "Recursos adicionales",
      ],
      content: (
        <>
          <h2 id="section-1" className="scroll-mt-20">
            Introducción a la aviación virtual
          </h2>
          <p>
            Bienvenido al fascinante mundo de la aviación virtual con AERO PERU Virtual. Esta guía está diseñada para
            ayudarte a dar tus primeros pasos como piloto virtual, proporcionándote toda la información necesaria para
            comenzar tu viaje en los cielos virtuales de Perú y el mundo.
          </p>
          <p>
            La aviación virtual es una simulación realista de operaciones de vuelo utilizando software especializado.
            Como piloto de AERO PERU Virtual, tendrás la oportunidad de experimentar la emoción de volar aviones
            comerciales siguiendo procedimientos reales, comunicándote con controladores aéreos virtuales y formando
            parte de una comunidad apasionada por la aviación.
          </p>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=800" alt="Simulador de vuelo" fill className="object-cover" />
          </div>

          <h2 id="section-2" className="scroll-mt-20">
            Requisitos de software y hardware
          </h2>
          <p>Para comenzar tu experiencia como piloto virtual, necesitarás:</p>
          <h3>Software:</h3>
          <ul>
            <li>
              <strong>Simulador de vuelo:</strong> Puedes utilizar Microsoft Flight Simulator (2020), Prepar3D, X-Plane
              11 o X-Plane 12.
            </li>
            <li>
              <strong>Cliente ACARS:</strong> Software que registra tus vuelos y los reporta a nuestra plataforma.
            </li>
            <li>
              <strong>Navegador web:</strong> Para acceder a nuestra plataforma FSAirlines y recursos online.
            </li>
          </ul>

          <h3>Hardware recomendado:</h3>
          <ul>
            <li>
              <strong>Procesador:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600X o superior
            </li>
            <li>
              <strong>Memoria:</strong> 16 GB RAM mínimo
            </li>
            <li>
              <strong>Tarjeta gráfica:</strong> NVIDIA GTX 1070 / AMD RX 5700 o superior
            </li>
            <li>
              <strong>Almacenamiento:</strong> 150 GB de espacio disponible en SSD
            </li>
            <li>
              <strong>Conexión a Internet:</strong> 5 Mbps o superior
            </li>
          </ul>

          <p>
            <strong>Equipo opcional pero recomendado:</strong>
          </p>
          <ul>
            <li>Joystick o yoke</li>
            <li>Pedales de timón</li>
            <li>Throttle quadrant (cuadrante de potencia)</li>
            <li>Sistema de audio de calidad</li>
            <li>Monitor adicional para cartas de navegación</li>
          </ul>

          <h2 id="section-3" className="scroll-mt-20">
            Primeros pasos con el simulador
          </h2>
          <p>
            Una vez que tengas instalado tu simulador de vuelo preferido, estos son los primeros pasos que debes seguir:
          </p>

          <ol>
            <li>
              <strong>Familiarízate con los controles básicos:</strong> Dedica tiempo a aprender los controles básicos
              de tu simulador. La mayoría de los simuladores incluyen tutoriales integrados que te ayudarán a entender
              los conceptos fundamentales.
            </li>
            <li>
              <strong>Instala las libreas oficiales:</strong> Descarga e instala las libreas (pinturas) oficiales de
              AERO PERU Virtual para tu simulador desde nuestra sección de descargas.
            </li>
            <li>
              <strong>Configura tu ACARS:</strong> Instala y configura el software ACARS que utilizamos para rastrear
              tus vuelos. Encontrarás guías detalladas en nuestra sección de tutoriales.
            </li>
            <li>
              <strong>Únete a nuestro Discord:</strong> Conéctate con otros pilotos y obtén ayuda en tiempo real
              uniéndote a nuestro servidor de Discord.
            </li>
          </ol>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Cabina de avión virtual"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="section-4" className="scroll-mt-20">
            Conceptos básicos de vuelo
          </h2>
          <p>Antes de realizar tu primer vuelo oficial, es importante que comprendas algunos conceptos básicos:</p>

          <h3>Fases de vuelo:</h3>
          <ol>
            <li>
              <strong>Planificación pre-vuelo:</strong> Incluye la selección de ruta, cálculo de combustible y
              verificación de condiciones meteorológicas.
            </li>
            <li>
              <strong>Preparación de cabina:</strong> Configuración inicial de sistemas y verificaciones pre-vuelo.
            </li>
            <li>
              <strong>Rodaje:</strong> Movimiento del avión en tierra desde la puerta hasta la pista.
            </li>
            <li>
              <strong>Despegue:</strong> Aceleración en pista y ascenso inicial.
            </li>
            <li>
              <strong>Ascenso:</strong> Subida hasta la altitud de crucero.
            </li>
            <li>
              <strong>Crucero:</strong> Fase principal del vuelo a altitud constante.
            </li>
            <li>
              <strong>Descenso:</strong> Reducción de altitud en preparación para el aterrizaje.
            </li>
            <li>
              <strong>Aproximación:</strong> Alineación con la pista y configuración para aterrizaje.
            </li>
            <li>
              <strong>Aterrizaje:</strong> Contacto con la pista y desaceleración.
            </li>
            <li>
              <strong>Rodaje a puerta:</strong> Movimiento desde la pista hasta la puerta de llegada.
            </li>
          </ol>

          <h3>Instrumentos básicos:</h3>
          <ul>
            <li>
              <strong>Altímetro:</strong> Indica la altitud del avión.
            </li>
            <li>
              <strong>Anemómetro:</strong> Muestra la velocidad del aire.
            </li>
            <li>
              <strong>Horizonte artificial:</strong> Muestra la actitud del avión respecto al horizonte.
            </li>
            <li>
              <strong>Indicador de rumbo:</strong> Muestra la dirección del avión.
            </li>
            <li>
              <strong>Variómetro:</strong> Indica la velocidad vertical (ascenso/descenso).
            </li>
          </ul>

          <h2 id="section-5" className="scroll-mt-20">
            Procedimientos estándar
          </h2>
          <p>En AERO PERU Virtual seguimos procedimientos estándar basados en operaciones reales:</p>

          <h3>Procedimientos de comunicación:</h3>
          <p>
            Utilizamos fraseología estándar para comunicarnos con ATC (Control de Tráfico Aéreo). Consulta nuestro Curso
            de Radiofonía para más detalles.
          </p>

          <h3>Procedimientos de navegación:</h3>
          <p>
            Seguimos rutas establecidas utilizando ayudas a la navegación como VOR, NDB, ILS y RNAV. Es importante
            familiarizarse con las cartas de navegación de los aeropuertos.
          </p>

          <h3>Procedimientos de emergencia:</h3>
          <p>
            Aunque esperamos que nunca los necesites, es importante conocer los procedimientos básicos para situaciones
            de emergencia como fallo de motor, despresurización o incendio.
          </p>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Consejo para principiantes</h3>
            <p>
              Comienza con aviones más pequeños y sencillos antes de pasar a jets comerciales complejos. Esto te
              permitirá familiarizarte con los conceptos básicos de vuelo sin sentirte abrumado por sistemas complejos.
            </p>
          </div>

          <h2 id="section-6" className="scroll-mt-20">
            Recursos adicionales
          </h2>
          <p>Para continuar tu aprendizaje, te recomendamos los siguientes recursos:</p>

          <ul>
            <li>Tutoriales en video de AERO PERU Virtual</li>
            <li>Manual de operaciones completo</li>
            <li>Guías específicas para cada aeronave</li>
            <li>Comunidad de Discord para preguntas y apoyo</li>
            <li>Programa de mentores para pilotos nuevos</li>
          </ul>

          <p>
            Recuerda que todos los pilotos comenzaron como principiantes. No tengas miedo de hacer preguntas y pedir
            ayuda. ¡Nuestra comunidad está aquí para apoyarte en cada paso de tu viaje como piloto virtual!
          </p>
        </>
      ),
      pdfUrl: "#",
    },
    {
      title: "Manual de Operaciones",
      description: "Procedimientos estándar de operación para todos los pilotos de AERO PERU Virtual.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
      slug: "manual-operaciones",
    },
    {
      title: "Cartas de Navegación",
      description: "Colección completa de cartas de navegación para los aeropuertos peruanos.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "#",
      category: "charts",
      slug: "cartas-navegacion",
    },
    {
      title: "Tutoriales en Video",
      description: "Aprende a configurar tu simulador y realizar procedimientos de vuelo correctamente.",
      icon: <Video className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
      featured: true,
      slug: "tutoriales-video",
    },
    {
      title: "Curso de Radiofonía",
      description: "Aprende a comunicarte correctamente con ATC utilizando fraseología estándar.",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      link: "/resources/curso-radiofonia",
      category: "tutorials",
      slug: "curso-radiofonia",
      coverImage: "/placeholder.svg?height=400&width=800",
      tableOfContents: [
        "Introducción a las comunicaciones aeronáuticas",
        "Alfabeto fonético y números",
        "Fraseología estándar",
        "Procedimientos de comunicación",
        "Ejemplos prácticos",
        "Ejercicios de práctica",
      ],
      content: (
        <>
          <h2 id="section-1" className="scroll-mt-20">
            Introducción a las comunicaciones aeronáuticas
          </h2>
          <p>
            Las comunicaciones aeronáuticas son un componente esencial de la aviación, tanto real como virtual. Una
            comunicación clara, concisa y estandarizada es fundamental para garantizar la seguridad y eficiencia de las
            operaciones aéreas.
          </p>
          <p>
            En este curso, aprenderás los fundamentos de la radiofonía aeronáutica, incluyendo el alfabeto fonético, la
            fraseología estándar y los procedimientos de comunicación utilizados por pilotos y controladores aéreos en
            todo el mundo.
          </p>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Comunicaciones aeronáuticas"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="section-2" className="scroll-mt-20">
            Alfabeto fonético y números
          </h2>
          <p>
            El alfabeto fonético OACI (también conocido como alfabeto fonético internacional) se utiliza para deletrear
            palabras y letras a través de la radio para evitar confusiones.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>A</strong> - Alfa
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>B</strong> - Bravo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>C</strong> - Charlie
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>D</strong> - Delta
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>E</strong> - Echo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>F</strong> - Foxtrot
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>G</strong> - Golf
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>H</strong> - Hotel
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>I</strong> - India
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>J</strong> - Juliett
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>K</strong> - Kilo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>L</strong> - Lima
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>M</strong> - Mike
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>N</strong> - November
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>O</strong> - Oscar
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>P</strong> - Papa
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>Q</strong> - Quebec
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>R</strong> - Romeo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>S</strong> - Sierra
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>T</strong> - Tango
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>U</strong> - Uniform
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>V</strong> - Victor
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>W</strong> - Whiskey
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>X</strong> - X-ray
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>Y</strong> - Yankee
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>Z</strong> - Zulu
            </div>
          </div>

          <p>
            <strong>Pronunciación de números:</strong>
          </p>
          <ul>
            <li>
              <strong>0</strong> - Cero (Zero en inglés)
            </li>
            <li>
              <strong>1</strong> - Uno (One)
            </li>
            <li>
              <strong>2</strong> - Dos (Two)
            </li>
            <li>
              <strong>3</strong> - Tres (Three)
            </li>
            <li>
              <strong>4</strong> - Cuatro (Four)
            </li>
            <li>
              <strong>5</strong> - Cinco (Five)
            </li>
            <li>
              <strong>6</strong> - Seis (Six)
            </li>
            <li>
              <strong>7</strong> - Siete (Seven)
            </li>
            <li>
              <strong>8</strong> - Ocho (Eight)
            </li>
            <li>
              <strong>9</strong> - Nueve (Nine)
            </li>
          </ul>

          <p>
            Los números se pronuncian individualmente. Por ejemplo, 123 se pronuncia "uno-dos-tres" y no "ciento
            veintitrés".
          </p>

          <h2 id="section-3" className="scroll-mt-20">
            Fraseología estándar
          </h2>
          <p>
            La fraseología estándar es un conjunto de palabras y frases específicas utilizadas en las comunicaciones
            aeronáuticas para transmitir información de manera clara y sin ambigüedades.
          </p>

          <h3>Palabras y frases comunes:</h3>
          <ul>
            <li>
              <strong>Afirmativo</strong> - Sí
            </li>
            <li>
              <strong>Negativo</strong> - No
            </li>
            <li>
              <strong>Verificado</strong> - Confirmado
            </li>
            <li>
              <strong>Recibido</strong> - Mensaje entendido
            </li>
            <li>
              <strong>Espere</strong> - Aguarde instrucciones
            </li>
            <li>
              <strong>Autorizado</strong> - Permiso concedido
            </li>
            <li>
              <strong>Imposible</strong> - No es posible cumplir con la solicitud
            </li>
            <li>
              <strong>Repita</strong> - Solicitud para que se repita el mensaje
            </li>
            <li>
              <strong>Corrección</strong> - Se ha cometido un error en la transmisión
            </li>
            <li>
              <strong>Mantenga</strong> - Continúe en las condiciones especificadas
            </li>
          </ul>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Importante</h3>
            <p>
              Nunca uses jerga, abreviaturas no estándar o lenguaje coloquial en las comunicaciones aeronáuticas. La
              claridad y precisión son fundamentales para la seguridad.
            </p>
          </div>

          <h2 id="section-4" className="scroll-mt-20">
            Procedimientos de comunicación
          </h2>
          <p>
            Los procedimientos de comunicación establecen cómo y cuándo deben realizarse las transmisiones por radio.
          </p>

          <h3>Estructura básica de una transmisión:</h3>
          <ol>
            <li>
              <strong>Llamada inicial:</strong> A quién llamas + quién eres
            </li>
            <li>
              <strong>Mensaje principal:</strong> Información que deseas transmitir
            </li>
            <li>
              <strong>Colación:</strong> Repetición de instrucciones recibidas para confirmar entendimiento
            </li>
          </ol>

          <p>
            <strong>Ejemplo:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Piloto:</strong> "Lima Control, AERO PERU 345, solicito autorización para despegue."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Lima Control, autorizado para despegar pista 16, viento 180 grados
              10 nudos."
            </p>
            <p>
              <strong>Piloto:</strong> "Autorizado para despegar pista 16, viento 180 grados 10 nudos, AERO PERU 345."
            </p>
          </div>

          <h3>Orden de prioridad en las comunicaciones:</h3>
          <ol>
            <li>Transmisiones de socorro (MAYDAY)</li>
            <li>Transmisiones de urgencia (PAN PAN)</li>
            <li>Comunicaciones relativas a radiogoniometría</li>
            <li>Mensajes relativos a la seguridad de vuelo</li>
            <li>Mensajes meteorológicos</li>
            <li>Mensajes relativos a la regularidad del vuelo</li>
          </ol>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=800" alt="Torre de control" fill className="object-cover" />
          </div>

          <h2 id="section-5" className="scroll-mt-20">
            Ejemplos prácticos
          </h2>
          <p>A continuación, se presentan ejemplos de comunicaciones típicas durante diferentes fases de vuelo:</p>

          <h3>Autorización de rodaje:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Piloto:</strong> "Lima Ground, AERO PERU 345, en puerta 7, solicito rodaje, información Bravo."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Lima Ground, autorizado a rodar a punto de espera pista 16 vía
              taxiway Alpha, QNH 1013."
            </p>
            <p>
              <strong>Piloto:</strong> "Autorizado a rodar a punto de espera pista 16 vía taxiway Alpha, QNH 1013, AERO
              PERU 345."
            </p>
          </div>

          <h3>Autorización de despegue:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Piloto:</strong> "Lima Tower, AERO PERU 345, listo para despegue pista 16."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, autorizado a despegar pista 16, viento 180 grados 8 nudos."
            </p>
            <p>
              <strong>Piloto:</strong> "Autorizado a despegar pista 16, AERO PERU 345."
            </p>
          </div>

          <h3>En ruta:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Piloto:</strong> "Lima Control, AERO PERU 345, pasando nivel 180, ascendiendo a nivel 280."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Lima Control, contacto radar, continúe ascenso a nivel 280."
            </p>
            <p>
              <strong>Piloto:</strong> "Continuamos ascenso a nivel 280, AERO PERU 345."
            </p>
          </div>

          <h3>Aproximación y aterrizaje:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Piloto:</strong> "Cusco Approach, AERO PERU 345, descendiendo a través de nivel 150 para 11,000
              pies, información Charlie."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Cusco Approach, descienda a 11,000 pies, QNH 1026, espere
              aproximación ILS pista 28."
            </p>
            <p>
              <strong>Piloto:</strong> "Descendemos a 11,000 pies, QNH 1026, esperamos aproximación ILS pista 28, AERO
              PERU 345."
            </p>
          </div>

          <h2 id="section-6" className="scroll-mt-20">
            Ejercicios de práctica
          </h2>
          <p>Para mejorar tus habilidades de comunicación, te recomendamos los siguientes ejercicios:</p>

          <h3>Ejercicio 1: Deletreo fonético</h3>
          <p>Practica deletrear las siguientes palabras utilizando el alfabeto fonético:</p>
          <ul>
            <li>AEROPERU</li>
            <li>CALLAO</li>
            <li>CUSCO</li>
            <li>LIMA</li>
            <li>NAZCA</li>
          </ul>

          <h3>Ejercicio 2: Lectura de números</h3>
          <p>Practica la lectura de los siguientes números:</p>
          <ul>
            <li>Altitud: FL280 (nivel de vuelo dos-ocho-cero)</li>
            <li>Rumbo: 175 (rumbo uno-siete-cinco)</li>
            <li>Frecuencia: 119.7 (frecuencia uno-uno-nueve-decimal-siete)</li>
            <li>Código transponder: 4572 (transponder cuatro-cinco-siete-dos)</li>
          </ul>

          <h3>Ejercicio 3: Simulación de comunicaciones</h3>
          <p>Practica las siguientes situaciones de comunicación:</p>
          <ol>
            <li>Solicitud de autorización de rodaje</li>
            <li>Reporte de posición en ruta</li>
            <li>Solicitud de cambio de nivel de vuelo</li>
            <li>Reporte de condiciones meteorológicas</li>
            <li>Declaración de emergencia (procedimiento MAYDAY)</li>
          </ol>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Consejo práctico</h3>
            <p>
              Escucha grabaciones reales de comunicaciones ATC para familiarizarte con el ritmo, tono y estructura de
              las comunicaciones aeronáuticas. Existen muchos recursos en línea donde puedes encontrar estas
              grabaciones.
            </p>
          </div>

          <p>
            Recuerda que la práctica constante es la clave para dominar las comunicaciones aeronáuticas. Cuanto más
            practiques, más natural y fluida será tu comunicación con ATC durante tus vuelos virtuales.
          </p>
        </>
      ),
      pdfUrl: "#",
    },
    {
      title: "Liveries Oficiales",
      description: "Descarga las libreas oficiales de AERO PERU Virtual para tu simulador de vuelo.",
      icon: <Download className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
      featured: true,
      slug: "liveries-oficiales",
    },
    {
      title: "Herramientas de Planificación",
      description: "Software y herramientas para planificar tus vuelos de manera eficiente.",
      icon: <Compass className="h-8 w-8 text-primary" />,
      link: "/resources/herramientas-planificacion",
      category: "downloads",
      slug: "herramientas-planificacion",
      coverImage: "/placeholder.svg?height=400&width=800",
      tableOfContents: [
        "Introducción a la planificación de vuelo",
        "Herramientas esenciales",
        "Planificación de rutas",
        "Cálculo de combustible",
        "Consideraciones meteorológicas",
        "Herramientas recomendadas",
      ],
      content: (
        <>
          <h2 id="section-1" className="scroll-mt-20">
            Introducción a la planificación de vuelo
          </h2>
          <p>
            La planificación de vuelo es un proceso fundamental en la aviación, tanto real como virtual. Una
            planificación adecuada garantiza que tu vuelo sea seguro, eficiente y realista. En esta guía, exploraremos
            las herramientas y recursos disponibles para ayudarte a planificar tus vuelos virtuales con AERO PERU
            Virtual.
          </p>
          <p>
            Una buena planificación de vuelo incluye la selección de rutas, cálculo de combustible, consideraciones
            meteorológicas, y la preparación de documentación necesaria como planes de vuelo y cartas de navegación.
          </p>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Planificación de vuelo"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="section-2" className="scroll-mt-20">
            Herramientas esenciales
          </h2>
          <p>Para una planificación de vuelo efectiva, necesitarás las siguientes herramientas esenciales:</p>

          <h3>1. Planificadores de vuelo</h3>
          <p>
            Los planificadores de vuelo son aplicaciones o sitios web que te ayudan a crear planes de vuelo detallados.
            Algunas opciones populares incluyen:
          </p>
          <ul>
            <li>
              <strong>SimBrief:</strong> Una herramienta completa y gratuita que genera planes de vuelo profesionales,
              incluyendo cálculos de combustible, rutas, altitudes y tiempos estimados.
            </li>
            <li>
              <strong>Little Navmap:</strong> Una aplicación gratuita de código abierto que ofrece planificación de
              vuelo, navegación y seguimiento para simuladores de vuelo.
            </li>
            <li>
              <strong>Navigraph:</strong> Ofrece cartas de navegación actualizadas y una herramienta de planificación de
              vuelo integrada con datos reales.
            </li>
            <li>
              <strong>SkyVector:</strong> Un planificador de vuelo basado en web con cartas aeronáuticas reales.
            </li>
          </ul>

          <h3>2. Bases de datos de aeropuertos</h3>
          <p>
            Estas herramientas proporcionan información detallada sobre aeropuertos, incluyendo pistas, frecuencias,
            elevación y procedimientos:
          </p>
          <ul>
            <li>
              <strong>AIPS (Publicaciones de Información Aeronáutica):</strong> Documentos oficiales que contienen
              información aeronáutica esencial para la navegación.
            </li>
            <li>
              <strong>Navigraph Charts:</strong> Proporciona cartas de aeropuertos actualizadas mensualmente.
            </li>
            <li>
              <strong>ChartFox:</strong> Una colección gratuita de cartas de aeropuertos de todo el mundo.
            </li>
          </ul>

          <h3>3. Información meteorológica</h3>
          <p>Para obtener información meteorológica realista para tus vuelos:</p>
          <ul>
            <li>
              <strong>METAR y TAF:</strong> Reportes y pronósticos meteorológicos estándar para aeropuertos.
            </li>
            <li>
              <strong>Active Sky:</strong> Un motor meteorológico avanzado para simuladores de vuelo.
            </li>
            <li>
              <strong>NOAA Aviation Weather Center:</strong> Proporciona información meteorológica oficial para la
              aviación.
            </li>
            <li>
              <strong>Windy.com:</strong> Una herramienta visual para analizar condiciones meteorológicas globales.
            </li>
          </ul>

          <h2 id="section-3" className="scroll-mt-20">
            Planificación de rutas
          </h2>
          <p>
            La planificación de rutas implica determinar el camino que seguirá tu aeronave desde el aeropuerto de salida
            hasta el de destino. Esto incluye:
          </p>

          <h3>Elementos de una ruta:</h3>
          <ul>
            <li>
              <strong>SID (Salida Normalizada por Instrumentos):</strong> Procedimiento de salida estandarizado.
            </li>
            <li>
              <strong>Aerovías:</strong> Rutas designadas para el tráfico aéreo.
            </li>
            <li>
              <strong>Puntos de notificación:</strong> Ubicaciones geográficas específicas utilizadas para la
              navegación.
            </li>
            <li>
              <strong>STAR (Llegada Normalizada por Instrumentos):</strong> Procedimiento de llegada estandarizado.
            </li>
            <li>
              <strong>Aproximación:</strong> Procedimiento para alinearse con la pista de aterrizaje.
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-6 rounded-sm">
            <h4 className="font-medium mb-2">Ejemplo de formato de ruta:</h4>
            <p className="font-mono">SPJC DCT ANKON UL302 DIXAN UL302 PIMTU DCT SPZO</p>
            <p className="text-sm mt-2">
              Esta ruta indica un vuelo desde el Aeropuerto Internacional Jorge Chávez (SPJC) en Lima, siguiendo una
              ruta directa (DCT) hasta el punto ANKON, luego la aerovía UL302 hasta DIXAN, continuando por UL302 hasta
              PIMTU, y finalmente una ruta directa hasta el Aeropuerto Internacional Alejandro Velasco Astete (SPZO) en
              Cusco.
            </p>
          </div>

          <h3>Consideraciones para la planificación de rutas:</h3>
          <ul>
            <li>
              <strong>Altitud óptima:</strong> Basada en la eficiencia del combustible y la distancia del vuelo.
            </li>
            <li>
              <strong>Restricciones del espacio aéreo:</strong> Zonas restringidas, prohibidas o peligrosas.
            </li>
            <li>
              <strong>Condiciones meteorológicas:</strong> Evitar áreas de clima severo.
            </li>
            <li>
              <strong>Alternativas:</strong> Aeropuertos alternativos en caso de emergencia o desvío.
            </li>
          </ul>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Carta de ruta aérea"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="section-4" className="scroll-mt-20">
            Cálculo de combustible
          </h2>
          <p>
            El cálculo preciso del combustible es crucial para la seguridad y eficiencia del vuelo. Debes considerar:
          </p>

          <h3>Componentes del cálculo de combustible:</h3>
          <ol>
            <li>
              <strong>Combustible para el rodaje:</strong> Cantidad necesaria para el arranque de motores y rodaje antes
              del despegue.
            </li>
            <li>
              <strong>Combustible para el viaje:</strong> Cantidad necesaria para volar desde el despegue en el
              aeropuerto de salida hasta el aterrizaje en el aeropuerto de destino.
            </li>
            <li>
              <strong>Combustible de contingencia:</strong> Generalmente un 5% del combustible de viaje para
              imprevistos.
            </li>
            <li>
              <strong>Combustible para alternativo:</strong> Cantidad necesaria para volar desde el aeropuerto de
              destino hasta un aeropuerto alternativo.
            </li>
            <li>
              <strong>Reserva final:</strong> Combustible mínimo que debe quedar al finalizar el vuelo (generalmente 30
              minutos de vuelo).
            </li>
            <li>
              <strong>Combustible adicional:</strong> A discreción del piloto, basado en condiciones específicas.
            </li>
          </ol>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Consejo para el cálculo de combustible</h3>
            <p>
              Herramientas como SimBrief realizan automáticamente estos cálculos basándose en el tipo de aeronave, la
              ruta y las condiciones meteorológicas. Sin embargo, es importante entender los principios detrás de estos
              cálculos para poder verificar su razonabilidad.
            </p>
          </div>

          <h2 id="section-5" className="scroll-mt-20">
            Consideraciones meteorológicas
          </h2>
          <p>Las condiciones meteorológicas pueden afectar significativamente tu vuelo. Es importante considerar:</p>

          <h3>Factores meteorológicos clave:</h3>
          <ul>
            <li>
              <strong>Vientos:</strong> Afectan la velocidad respecto al suelo, el consumo de combustible y la duración
              del vuelo.
            </li>
            <li>
              <strong>Tormentas:</strong> Pueden requerir desvíos y afectar la comodidad del vuelo.
            </li>
            <li>
              <strong>Visibilidad:</strong> Afecta la capacidad para realizar aproximaciones visuales.
            </li>
            <li>
              <strong>Techo de nubes:</strong> Determina si se requieren procedimientos de vuelo por instrumentos.
            </li>
            <li>
              <strong>Temperatura:</strong> Afecta el rendimiento de la aeronave, especialmente en aeropuertos de gran
              altitud como Cusco.
            </li>
          </ul>

          <h3>Fuentes de información meteorológica:</h3>
          <ul>
            <li>
              <strong>METAR (Meteorological Aerodrome Report):</strong> Informe de las condiciones meteorológicas
              actuales en un aeropuerto.
            </li>
            <li>
              <strong>TAF (Terminal Aerodrome Forecast):</strong> Pronóstico de las condiciones meteorológicas esperadas
              en un aeropuerto.
            </li>
            <li>
              <strong>SIGMET (Significant Meteorological Information):</strong> Información sobre fenómenos
              meteorológicos significativos que pueden afectar la seguridad de las operaciones de aeronaves.
            </li>
          </ul>

          <h2 id="section-6" className="scroll-mt-20">
            Herramientas recomendadas
          </h2>
          <p>
            Basándonos en nuestra experiencia y en las preferencias de nuestra comunidad, recomendamos las siguientes
            herramientas para la planificación de vuelos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">SimBrief</h3>
              <p className="mb-4">
                La herramienta más completa y popular para la planificación de vuelos. Ofrece planes de vuelo
                profesionales con cálculos precisos de combustible, rutas optimizadas y documentación completa.
              </p>
              <a
                href="https://www.simbrief.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visitar sitio web
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">Little Navmap</h3>
              <p className="mb-4">
                Una aplicación gratuita y de código abierto que ofrece planificación de vuelo detallada, navegación y
                seguimiento para simuladores de vuelo. Excelente para visualizar rutas en un mapa interactivo.
              </p>
              <a
                href="https://albar965.github.io/littlenavmap.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visitar sitio web
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">Navigraph</h3>
              <p className="mb-4">
                Ofrece cartas de navegación actualizadas mensualmente y una herramienta de planificación integrada.
                Ideal para quienes buscan la máxima precisión y datos actualizados.
              </p>
              <a
                href="https://navigraph.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visitar sitio web
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">Active Sky</h3>
              <p className="mb-4">
                El motor meteorológico más avanzado para simuladores de vuelo. Proporciona condiciones meteorológicas
                realistas basadas en datos reales.
              </p>
              <a
                href="https://hifisimtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visitar sitio web
              </a>
            </div>
          </div>

          <p>
            Recuerda que la planificación adecuada es la base de un vuelo exitoso. Tómate el tiempo necesario para
            familiarizarte con estas herramientas y desarrollar un proceso de planificación sistemático que funcione
            para ti.
          </p>

          <p>
            En AERO PERU Virtual, valoramos el realismo y la atención al detalle. Utilizar estas herramientas de
            planificación no solo mejorará tu experiencia de vuelo, sino que también te ayudará a desarrollar
            habilidades valiosas aplicables a la aviación real.
          </p>
        </>
      ),
      pdfUrl: "#",
    },
    {
      title: "Eventos Mensuales",
      description: "Calendario de vuelos en grupo, competencias y eventos especiales.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "community",
      featured: true,
      slug: "eventos-mensuales",
    },
    {
      title: "Programa de Entrenamiento Básico",
      description: "Curso completo para pilotos nuevos que cubre los fundamentos de la aviación virtual.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#",
      category: "training",
      slug: "entrenamiento-basico",
    },
    {
      title: "Programa de Entrenamiento Avanzado",
      description: "Curso para pilotos experimentados que desean mejorar sus habilidades.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#",
      category: "training",
      slug: "entrenamiento-avanzado",
    },
    {
      title: "Cartas SID/STAR",
      description: "Procedimientos de salida y llegada estándar para aeropuertos principales.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "#",
      category: "charts",
      slug: "cartas-sid-star",
    },
    {
      title: "Guía de Aeropuertos Peruanos",
      description: "Información detallada sobre todos los aeropuertos de Perú disponibles en la red.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
      slug: "guia-aeropuertos",
    },
    {
      title: "Tutoriales de Navegación",
      description: "Aprende a utilizar sistemas de navegación como VOR, ILS, RNAV y más.",
      icon: <Video className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
      slug: "tutoriales-navegacion",
    },
    {
      title: "Foro de la Comunidad",
      description: "Únete a las discusiones con otros pilotos virtuales de AERO PERU.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "community",
      slug: "foro-comunidad",
    },
    {
      title: "Escenarios para MSFS 2020",
      description: "Escenarios mejorados de aeropuertos peruanos para Microsoft Flight Simulator.",
      icon: <Download className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
      slug: "escenarios-msfs",
    },
    {
      title: "Programa de Mentores",
      description: "Conecta con pilotos experimentados que te guiarán en tu desarrollo como piloto virtual.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "training",
      slug: "programa-mentores",
    },
  ],
  en: [
    {
      title: "Beginner's Guide",
      description: "Everything you need to know to get started as a virtual pilot at AERO PERU.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "/resources/beginners-guide",
      category: "guides",
      featured: true,
      slug: "beginners-guide",
      coverImage: "/placeholder.svg?height=400&width=800",
      tableOfContents: [
        "Introduction to virtual aviation",
        "Software and hardware requirements",
        "Getting started with your simulator",
        "Basic flight concepts",
        "Standard procedures",
        "Additional resources",
      ],
      content: (
        <>
          <h2 id="section-1" className="scroll-mt-20">
            Introduction to virtual aviation
          </h2>
          <p>
            Welcome to the fascinating world of virtual aviation with AERO PERU Virtual. This guide is designed to help
            you take your first steps as a virtual pilot, providing you with all the necessary information to begin your
            journey in the virtual skies of Peru and beyond.
          </p>
          <p>
            Virtual aviation is a realistic simulation of flight operations using specialized software. As an AERO PERU
            Virtual pilot, you'll have the opportunity to experience the thrill of flying commercial aircraft following
            real procedures, communicating with virtual air traffic controllers, and being part of a community
            passionate about aviation.
          </p>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=800" alt="Flight simulator" fill className="object-cover" />
          </div>

          <h2 id="section-2" className="scroll-mt-20">
            Software and hardware requirements
          </h2>
          <p>To begin your experience as a virtual pilot, you'll need:</p>
          <h3>Software:</h3>
          <ul>
            <li>
              <strong>Flight simulator:</strong> You can use Microsoft Flight Simulator (2020), Prepar3D, X-Plane 11, or
              X-Plane 12.
            </li>
            <li>
              <strong>ACARS client:</strong> Software that logs your flights and reports them to our platform.
            </li>
            <li>
              <strong>Web browser:</strong> To access our FSAirlines platform and online resources.
            </li>
          </ul>

          <h3>Recommended hardware:</h3>
          <ul>
            <li>
              <strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600X or better
            </li>
            <li>
              <strong>Memory:</strong> 16 GB RAM minimum
            </li>
            <li>
              <strong>Graphics card:</strong> NVIDIA GTX 1070 / AMD RX 5700 or better
            </li>
            <li>
              <strong>Storage:</strong> 150 GB available space on SSD
            </li>
            <li>
              <strong>Internet connection:</strong> 5 Mbps or better
            </li>
          </ul>

          <p>
            <strong>Optional but recommended equipment:</strong>
          </p>
          <ul>
            <li>Joystick or yoke</li>
            <li>Rudder pedals</li>
            <li>Throttle quadrant</li>
            <li>Quality audio system</li>
            <li>Additional monitor for navigation charts</li>
          </ul>

          <h2 id="section-3" className="scroll-mt-20">
            Getting started with your simulator
          </h2>
          <p>Once you have your preferred flight simulator installed, these are the first steps you should follow:</p>

          <ol>
            <li>
              <strong>Familiarize yourself with the basic controls:</strong> Take time to learn the basic controls of
              your simulator. Most simulators include built-in tutorials that will help you understand the fundamental
              concepts.
            </li>
            <li>
              <strong>Install the official liveries:</strong> Download and install the official AERO PERU Virtual
              liveries for your simulator from our downloads section.
            </li>
            <li>
              <strong>Set up your ACARS:</strong> Install and configure the ACARS software we use to track your flights.
              You'll find detailed guides in our tutorials section.
            </li>
            <li>
              <strong>Join our Discord:</strong> Connect with other pilots and get real-time help by joining our Discord
              server.
            </li>
          </ol>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Virtual aircraft cockpit"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="section-4" className="scroll-mt-20">
            Basic flight concepts
          </h2>
          <p>Before making your first official flight, it's important to understand some basic concepts:</p>

          <h3>Flight phases:</h3>
          <ol>
            <li>
              <strong>Pre-flight planning:</strong> Includes route selection, fuel calculation, and weather checking.
            </li>
            <li>
              <strong>Cockpit preparation:</strong> Initial systems setup and pre-flight checks.
            </li>
            <li>
              <strong>Taxi:</strong> Movement of the aircraft on the ground from the gate to the runway.
            </li>
            <li>
              <strong>Takeoff:</strong> Acceleration on the runway and initial climb.
            </li>
            <li>
              <strong>Climb:</strong> Ascent to cruise altitude.
            </li>
            <li>
              <strong>Cruise:</strong> Main phase of the flight at constant altitude.
            </li>
            <li>
              <strong>Descent:</strong> Reduction of altitude in preparation for landing.
            </li>
            <li>
              <strong>Approach:</strong> Alignment with the runway and configuration for landing.
            </li>
            <li>
              <strong>Landing:</strong> Contact with the runway and deceleration.
            </li>
            <li>
              <strong>Taxi to gate:</strong> Movement from the runway to the arrival gate.
            </li>
          </ol>

          <h3>Basic instruments:</h3>
          <ul>
            <li>
              <strong>Altimeter:</strong> Indicates the aircraft's altitude.
            </li>
            <li>
              <strong>Airspeed indicator:</strong> Shows the aircraft's speed through the air.
            </li>
            <li>
              <strong>Attitude indicator:</strong> Shows the aircraft's attitude relative to the horizon.
            </li>
            <li>
              <strong>Heading indicator:</strong> Shows the direction the aircraft is pointing.
            </li>
            <li>
              <strong>Vertical speed indicator:</strong> Shows the rate of climb or descent.
            </li>
          </ul>

          <h2 id="section-5" className="scroll-mt-20">
            Standard procedures
          </h2>
          <p>At AERO PERU Virtual, we follow standard procedures based on real operations:</p>

          <h3>Communication procedures:</h3>
          <p>
            We use standard phraseology to communicate with ATC (Air Traffic Control). Check our Radio Communication
            Course for more details.
          </p>

          <h3>Navigation procedures:</h3>
          <p>
            We follow established routes using navigation aids such as VOR, NDB, ILS, and RNAV. It's important to
            familiarize yourself with airport navigation charts.
          </p>

          <h3>Emergency procedures:</h3>
          <p>
            Although we hope you'll never need them, it's important to know the basic procedures for emergency
            situations such as engine failure, depressurization, or fire.
          </p>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Beginner's tip</h3>
            <p>
              Start with smaller and simpler aircraft before moving on to complex commercial jets. This will allow you
              to familiarize yourself with basic flight concepts without being overwhelmed by complex systems.
            </p>
          </div>

          <h2 id="section-6" className="scroll-mt-20">
            Additional resources
          </h2>
          <p>To continue your learning, we recommend the following resources:</p>

          <ul>
            <li>AERO PERU Virtual video tutorials</li>
            <li>Complete operations manual</li>
            <li>Aircraft-specific guides</li>
            <li>Discord community for questions and support</li>
            <li>Mentorship program for new pilots</li>
          </ul>

          <p>
            Remember that all pilots started as beginners. Don't be afraid to ask questions and seek help. Our community
            is here to support you every step of the way on your journey as a virtual pilot!
          </p>
        </>
      ),
      pdfUrl: "#",
    },
    {
      title: "Operations Manual",
      description: "Standard operating procedures for all AERO PERU Virtual pilots.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
      slug: "operations-manual",
    },
    {
      title: "Navigation Charts",
      description: "Complete collection of navigation charts for Peruvian airports.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "#",
      category: "charts",
      slug: "navigation-charts",
    },
    {
      title: "Video Tutorials",
      description: "Learn how to set up your simulator and perform flight procedures correctly.",
      icon: <Video className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
      featured: true,
      slug: "video-tutorials",
    },
    {
      title: "Radio Communication Course",
      description: "Learn to communicate correctly with ATC using standard phraseology.",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      link: "/resources/radio-communication",
      category: "tutorials",
      slug: "radio-communication",
      coverImage: "/placeholder.svg?height=400&width=800",
      tableOfContents: [
        "Introduction to aeronautical communications",
        "Phonetic alphabet and numbers",
        "Standard phraseology",
        "Communication procedures",
        "Practical examples",
        "Practice exercises",
      ],
      content: (
        <>
          <h2 id="section-1" className="scroll-mt-20">
            Introduction to aeronautical communications
          </h2>
          <p>
            Aeronautical communications are an essential component of aviation, both real and virtual. Clear, concise,
            and standardized communication is fundamental to ensuring the safety and efficiency of air operations.
          </p>
          <p>
            In this course, you will learn the fundamentals of aeronautical radio communication, including the phonetic
            alphabet, standard phraseology, and communication procedures used by pilots and air traffic controllers
            worldwide.
          </p>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Aeronautical communications"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="section-2" className="scroll-mt-20">
            Phonetic alphabet and numbers
          </h2>
          <p>
            The ICAO phonetic alphabet (also known as the international phonetic alphabet) is used to spell out words
            and letters over the radio to avoid confusion.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>A</strong> - Alpha
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>B</strong> - Bravo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>C</strong> - Charlie
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>D</strong> - Delta
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>E</strong> - Echo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>F</strong> - Foxtrot
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>G</strong> - Golf
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>H</strong> - Hotel
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>I</strong> - India
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>J</strong> - Juliett
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>K</strong> - Kilo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>L</strong> - Lima
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>M</strong> - Mike
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>N</strong> - November
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>O</strong> - Oscar
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>P</strong> - Papa
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>Q</strong> - Quebec
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>R</strong> - Romeo
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>S</strong> - Sierra
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>T</strong> - Tango
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>U</strong> - Uniform
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>V</strong> - Victor
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>W</strong> - Whiskey
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>X</strong> - X-ray
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>Y</strong> - Yankee
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <strong>Z</strong> - Zulu
            </div>
          </div>

          <p>
            <strong>Pronunciation of numbers:</strong>
          </p>
          <ul>
            <li>
              <strong>0</strong> - Zero
            </li>
            <li>
              <strong>1</strong> - One
            </li>
            <li>
              <strong>2</strong> - Two
            </li>
            <li>
              <strong>3</strong> - Three
            </li>
            <li>
              <strong>4</strong> - Four
            </li>
            <li>
              <strong>5</strong> - Five
            </li>
            <li>
              <strong>6</strong> - Six
            </li>
            <li>
              <strong>7</strong> - Seven
            </li>
            <li>
              <strong>8</strong> - Eight
            </li>
            <li>
              <strong>9</strong> - Nine
            </li>
          </ul>

          <p>
            Numbers are pronounced individually. For example, 123 is pronounced "one-two-three" and not "one hundred
            twenty-three".
          </p>

          <h2 id="section-3" className="scroll-mt-20">
            Standard phraseology
          </h2>
          <p>
            Standard phraseology is a set of specific words and phrases used in aeronautical communications to convey
            information clearly and unambiguously.
          </p>

          <h3>Common words and phrases:</h3>
          <ul>
            <li>
              <strong>Affirmative</strong> - Yes
            </li>
            <li>
              <strong>Negative</strong> - No
            </li>
            <li>
              <strong>Verified</strong> - Confirmed
            </li>
            <li>
              <strong>Roger</strong> - Message understood
            </li>
            <li>
              <strong>Standby</strong> - Wait for instructions
            </li>
            <li>
              <strong>Cleared</strong> - Permission granted
            </li>
            <li>
              <strong>Unable</strong> - Not possible to comply with the request
            </li>
            <li>
              <strong>Say again</strong> - Request to repeat the message
            </li>
            <li>
              <strong>Correction</strong> - An error has been made in the transmission
            </li>
            <li>
              <strong>Maintain</strong> - Continue in the specified conditions
            </li>
          </ul>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Important</h3>
            <p>
              Never use jargon, non-standard abbreviations, or colloquial language in aeronautical communications.
              Clarity and precision are fundamental to safety.
            </p>
          </div>

          <h2 id="section-4" className="scroll-mt-20">
            Communication procedures
          </h2>
          <p>Communication procedures establish how and when radio transmissions should be made.</p>

          <h3>Basic structure of a transmission:</h3>
          <ol>
            <li>
              <strong>Initial call:</strong> Who you're calling + who you are
            </li>
            <li>
              <strong>Main message:</strong> Information you want to transmit
            </li>
            <li>
              <strong>Readback:</strong> Repetition of received instructions to confirm understanding
            </li>
          </ol>

          <p>
            <strong>Example:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Pilot:</strong> "Lima Control, AERO PERU 345, request clearance for takeoff."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Lima Control, cleared for takeoff runway 16, wind 180 degrees 10
              knots."
            </p>
            <p>
              <strong>Pilot:</strong> "Cleared for takeoff runway 16, wind 180 degrees 10 knots, AERO PERU 345."
            </p>
          </div>

          <h3>Order of priority in communications:</h3>
          <ol>
            <li>Distress transmissions (MAYDAY)</li>
            <li>Urgency transmissions (PAN PAN)</li>
            <li>Communications relating to direction finding</li>
            <li>Flight safety messages</li>
            <li>Meteorological messages</li>
            <li>Flight regularity messages</li>
          </ol>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <img src="/placeholder.svg?height=400&width=800" alt="Control tower" className="object-cover w-full h-full" />
          </div>

          <h2 id="section-5" className="scroll-mt-20">
            Practical examples
          </h2>
          <p>Below are examples of typical communications during different flight phases:</p>

          <h3>Taxi clearance:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Pilot:</strong> "Lima Ground, AERO PERU 345, at gate 7, request taxi, information Bravo."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Lima Ground, cleared to taxi to holding point runway 16 via taxiway
              Alpha, QNH 1013."
            </p>
            <p>
              <strong>Pilot:</strong> "Cleared to taxi to holding point runway 16 via taxiway Alpha, QNH 1013, AERO PERU
              345."
            </p>
          </div>

          <h3>Takeoff clearance:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Pilot:</strong> "Lima Tower, AERO PERU 345, ready for departure runway 16."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, cleared for takeoff runway 16, wind 180 degrees 8 knots."
            </p>
            <p>
              <strong>Pilot:</strong> "Cleared for takeoff runway 16, AERO PERU 345."
            </p>
          </div>

          <h3>En route:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Pilot:</strong> "Lima Control, AERO PERU 345, passing level 180, climbing to level 280."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Lima Control, radar contact, continue climb to level 280."
            </p>
            <p>
              <strong>Pilot:</strong> "Continue climb to level 280, AERO PERU 345."
            </p>
          </div>

          <h3>Approach and landing:</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-4 rounded-sm font-mono text-sm">
            <p>
              <strong>Pilot:</strong> "Cusco Approach, AERO PERU 345, descending through level 150 for 11,000 feet,
              information Charlie."
            </p>
            <p>
              <strong>ATC:</strong> "AERO PERU 345, Cusco Approach, descend to 11,000 feet, QNH 1026, expect ILS
              approach runway 28."
            </p>
            <p>
              <strong>Pilot:</strong> "Descend to 11,000 feet, QNH 1026, expect ILS approach runway 28, AERO PERU 345."
            </p>
          </div>

          <h2 id="section-6" className="scroll-mt-20">
            Practice exercises
          </h2>
          <p>To improve your communication skills, we recommend the following exercises:</p>

          <h3>Exercise 1: Phonetic spelling</h3>
          <p>Practice spelling the following words using the phonetic alphabet:</p>
          <ul>
            <li>AEROPERU</li>
            <li>CALLAO</li>
            <li>CUSCO</li>
            <li>LIMA</li>
            <li>NAZCA</li>
          </ul>

          <h3>Exercise 2: Number reading</h3>
          <p>Practice reading the following numbers:</p>
          <ul>
            <li>Altitude: FL280 (flight level two-eight-zero)</li>
            <li>Heading: 175 (heading one-seven-five)</li>
            <li>Frequency: 119.7 (frequency one-one-nine-decimal-seven)</li>
            <li>Transponder code: 4572 (squawk four-five-seven-two)</li>
          </ul>

          <h3>Exercise 3: Communication simulation</h3>
          <p>Practice the following communication situations:</p>
          <ol>
            <li>Request for taxi clearance</li>
            <li>Position report en route</li>
            <li>Request for flight level change</li>
            <li>Weather conditions report</li>
            <li>Emergency declaration (MAYDAY procedure)</li>
          </ol>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Practical tip</h3>
            <p>
              Listen to real ATC communication recordings to familiarize yourself with the rhythm, tone, and structure
              of aeronautical communications. There are many online resources where you can find these recordings.
            </p>
          </div>

          <p>
            Remember that constant practice is the key to mastering aeronautical communications. The more you practice,
            the more natural and fluid your communication with ATC will be during your virtual flights.
          </p>
        </>
      ),
      pdfUrl: "#",
    },
    {
      title: "Official Liveries",
      description: "Download the official AERO PERU Virtual liveries for your flight simulator.",
      icon: <Download className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
      featured: true,
      slug: "official-liveries",
    },
    {
      title: "Flight Planning Tools",
      description: "Software and tools to efficiently plan your flights.",
      icon: <Compass className="h-8 w-8 text-primary" />,
      link: "/resources/flight-planning-tools",
      category: "downloads",
      slug: "flight-planning-tools",
      coverImage: "/placeholder.svg?height=400&width=800",
      tableOfContents: [
        "Introduction to flight planning",
        "Essential tools",
        "Route planning",
        "Fuel calculation",
        "Weather considerations",
        "Recommended tools",
      ],
      content: (
        <>
          <h2 id="section-1" className="scroll-mt-20">
            Introduction to flight planning
          </h2>
          <p>
            Flight planning is a fundamental process in aviation, both real and virtual. Proper planning ensures that
            your flight is safe, efficient, and realistic. In this guide, we'll explore the tools and resources
            available to help you plan your virtual flights with AERO PERU Virtual.
          </p>
          <p>
            Good flight planning includes route selection, fuel calculation, weather considerations, and preparation of
            necessary documentation such as flight plans and navigation charts.
          </p>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <img src="/placeholder.svg?height=400&width=800" alt="Flight planning" className="object-cover w-full h-full" />
          </div>

          <h2 id="section-2" className="scroll-mt-20">
            Essential tools
          </h2>
          <p>For effective flight planning, you'll need the following essential tools:</p>

          <h3>1. Flight planners</h3>
          <p>
            Flight planners are applications or websites that help you create detailed flight plans. Some popular
            options include:
          </p>
          <ul>
            <li>
              <strong>SimBrief:</strong> A comprehensive and free tool that generates professional flight plans,
              including fuel calculations, routes, altitudes, and estimated times.
            </li>
            <li>
              <strong>Little Navmap:</strong> A free, open-source application that offers flight planning, navigation,
              and tracking for flight simulators.
            </li>
            <li>
              <strong>Navigraph:</strong> Offers updated navigation charts and an integrated flight planning tool with
              real data.
            </li>
            <li>
              <strong>SkyVector:</strong> A web-based flight planner with real aeronautical charts.
            </li>
          </ul>

          <h3>2. Airport databases</h3>
          <p>
            These tools provide detailed information about airports, including runways, frequencies, elevation, and
            procedures:
          </p>
          <ul>
            <li>
              <strong>AIPs (Aeronautical Information Publications):</strong> Official documents containing essential
              aeronautical information for navigation.
            </li>
            <li>
              <strong>Navigraph Charts:</strong> Provides airport charts updated monthly.
            </li>
            <li>
              <strong>ChartFox:</strong> A free collection of airport charts from around the world.
            </li>
          </ul>

          <h3>3. Weather information</h3>
          <p>To obtain realistic weather information for your flights:</p>
          <ul>
            <li>
              <strong>METAR and TAF:</strong> Standard weather reports and forecasts for airports.
            </li>
            <li>
              <strong>Active Sky:</strong> An advanced weather engine for flight simulators.
            </li>
            <li>
              <strong>NOAA Aviation Weather Center:</strong> Provides official weather information for aviation.
            </li>
            <li>
              <strong>Windy.com:</strong> A visual tool for analyzing global weather conditions.
            </li>
          </ul>

          <h2 id="section-3" className="scroll-mt-20">
            Route planning
          </h2>
          <p>
            Route planning involves determining the path your aircraft will follow from the departure airport to the
            destination. This includes:
          </p>

          <h3>Route elements:</h3>
          <ul>
            <li>
              <strong>SID (Standard Instrument Departure):</strong> Standardized departure procedure.
            </li>
            <li>
              <strong>Airways:</strong> Designated routes for air traffic.
            </li>
            <li>
              <strong>Reporting points:</strong> Specific geographic locations used for navigation.
            </li>
            <li>
              <strong>STAR (Standard Terminal Arrival Route):</strong> Standardized arrival procedure.
            </li>
            <li>
              <strong>Approach:</strong> Procedure for aligning with the landing runway.
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 my-6 rounded-sm">
            <h4 className="font-medium mb-2">Example route format:</h4>
            <p className="font-mono">SPJC DCT ANKON UL302 DIXAN UL302 PIMTU DCT SPZO</p>
            <p className="text-sm mt-2">
              This route indicates a flight from Jorge Chávez International Airport (SPJC) in Lima, following a direct
              route (DCT) to the ANKON point, then airway UL302 to DIXAN, continuing on UL302 to PIMTU, and finally a
              direct route to Alejandro Velasco Astete International Airport (SPZO) in Cusco.
            </p>
          </div>

          <h3>Route planning considerations:</h3>
          <ul>
            <li>
              <strong>Optimal altitude:</strong> Based on fuel efficiency and flight distance.
            </li>
            <li>
              <strong>Airspace restrictions:</strong> Restricted, prohibited, or dangerous areas.
            </li>
            <li>
              <strong>Weather conditions:</strong> Avoiding areas of severe weather.
            </li>
            <li>
              <strong>Alternates:</strong> Alternative airports in case of emergency or diversion.
            </li>
          </ul>

          <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
            <img src="/placeholder.svg?height=400&width=800" alt="Air route chart" className="object-cover w-full h-full" />
          </div>

          <h2 id="section-4" className="scroll-mt-20">
            Fuel calculation
          </h2>
          <p>Accurate fuel calculation is crucial for flight safety and efficiency. You should consider:</p>

          <h3>Fuel calculation components:</h3>
          <ol>
            <li>
              <strong>Taxi fuel:</strong> Amount needed for engine start and taxi before takeoff.
            </li>
            <li>
              <strong>Trip fuel:</strong> Amount needed to fly from takeoff at the departure airport to landing at the
              destination airport.
            </li>
            <li>
              <strong>Contingency fuel:</strong> Generally 5% of trip fuel for unforeseen circumstances.
            </li>
            <li>
              <strong>Alternate fuel:</strong> Amount needed to fly from the destination airport to an alternate
              airport.
            </li>
            <li>
              <strong>Final reserve:</strong> Minimum fuel that should remain at the end of the flight (generally 30
              minutes of flight).
            </li>
            <li>
              <strong>Additional fuel:</strong> At the pilot's discretion, based on specific conditions.
            </li>
          </ol>

          <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
            <h3 className="text-lg font-medium mb-2">Fuel calculation tip</h3>
            <p>
              Tools like SimBrief automatically perform these calculations based on aircraft type, route, and weather
              conditions. However, it's important to understand the principles behind these calculations to be able to
              verify their reasonableness.
            </p>
          </div>

          <h2 id="section-5" className="scroll-mt-20">
            Weather considerations
          </h2>
          <p>Weather conditions can significantly affect your flight. It's important to consider:</p>

          <h3>Key weather factors:</h3>
          <ul>
            <li>
              <strong>Winds:</strong> Affect ground speed, fuel consumption, and flight duration.
            </li>
            <li>
              <strong>Storms:</strong> May require diversions and affect flight comfort.
            </li>
            <li>
              <strong>Visibility:</strong> Affects the ability to perform visual approaches.
            </li>
            <li>
              <strong>Cloud ceiling:</strong> Determines if instrument flight procedures are required.
            </li>
            <li>
              <strong>Temperature:</strong> Affects aircraft performance, especially at high-altitude airports like
              Cusco.
            </li>
          </ul>

          <h3>Weather information sources:</h3>
          <ul>
            <li>
              <strong>METAR (Meteorological Aerodrome Report):</strong> Report of current weather conditions at an
              airport.
            </li>
            <li>
              <strong>TAF (Terminal Aerodrome Forecast):</strong> Forecast of expected weather conditions at an airport.
            </li>
            <li>
              <strong>SIGMET (Significant Meteorological Information):</strong> Information about significant
              meteorological phenomena that may affect the safety of aircraft operations.
            </li>
          </ul>

          <h2 id="section-6" className="scroll-mt-20">
            Recommended tools
          </h2>
          <p>
            Based on our experience and our community's preferences, we recommend the following tools for flight
            planning:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">SimBrief</h3>
              <p className="mb-4">
                The most comprehensive and popular tool for flight planning. It offers professional flight plans with
                accurate fuel calculations, optimized routes, and complete documentation.
              </p>
              <a
                href="https://www.simbrief.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit website
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">Little Navmap</h3>
              <p className="mb-4">
                A free, open-source application that offers detailed flight planning, navigation, and tracking for
                flight simulators. Excellent for visualizing routes on an interactive map.
              </p>
              <a
                href="https://albar965.github.io/littlenavmap.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit website
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">Navigraph</h3>
              <p className="mb-4">
                Offers navigation charts updated monthly and an integrated planning tool. Ideal for those seeking
                maximum accuracy and updated data.
              </p>
              <a
                href="https://navigraph.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit website
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-4">Active Sky</h3>
              <p className="mb-4">
                The most advanced weather engine for flight simulators. Provides realistic weather conditions based on
                real data.
              </p>
              <a
                href="https://hifisimtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit website
              </a>
            </div>
          </div>

          <p>
            Remember that proper planning is the foundation of a successful flight. Take the time to familiarize
            yourself with these tools and develop a systematic planning process that works for you.
          </p>

          <p>
            At AERO PERU Virtual, we value realism and attention to detail. Using these planning tools will not only
            enhance your flight experience but also help you develop valuable skills applicable to real aviation.
          </p>
        </>
      ),
      pdfUrl: "#",
    },
    {
      title: "Monthly Events",
      description: "Calendar of group flights, competitions, and special events.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "community",
      featured: true,
      slug: "monthly-events",
    },
    {
      title: "Basic Training Program",
      description: "Complete course for new pilots covering the fundamentals of virtual aviation.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#",
      category: "training",
      slug: "basic-training",
    },
    {
      title: "Advanced Training Program",
      description: "Course for experienced pilots who want to improve their skills.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#",
      category: "training",
      slug: "advanced-training",
    },
    {
      title: "SID/STAR Charts",
      description: "Standard departure and arrival procedures for major airports.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "#",
      category: "charts",
      slug: "sid-star-charts",
    },
    {
      title: "Peruvian Airports Guide",
      description: "Detailed information about all Peruvian airports available on the network.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#",
      category: "guides",
      slug: "peruvian-airports",
    },
    {
      title: "Navigation Tutorials",
      description: "Learn to use navigation systems such as VOR, ILS, RNAV and more.",
      icon: <Video className="h-8 w-8 text-primary" />,
      link: "#",
      category: "tutorials",
      slug: "navigation-tutorials",
    },
    {
      title: "Community Forum",
      description: "Join discussions with other AERO PERU virtual pilots.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "community",
      slug: "community-forum",
    },
    {
      title: "MSFS 2020 Scenery",
      description: "Enhanced Peruvian airport scenery for Microsoft Flight Simulator.",
      icon: <Download className="h-8 w-8 text-primary" />,
      link: "#",
      category: "downloads",
      slug: "msfs-scenery",
    },
    {
      title: "Mentorship Program",
      description: "Connect with experienced pilots who will guide you in your development as a virtual pilot.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#",
      category: "training",
      slug: "mentorship-program",
    },
  ],
}

// Actualizar los enlaces en la página de recursos
export function updateResourceLinks() {
  const updatedResourcesEs = resourcesData.es.map((resource) => {
    if (resource.slug) {
      return {
        ...resource,
        link: `/resources/${resource.slug}`,
      }
    }
    return resource
  })

  const updatedResourcesEn = resourcesData.en.map((resource) => {
    if (resource.slug) {
      return {
        ...resource,
        link: `/resources/${resource.slug}`,
      }
    }
    return resource
  })

  return {
    es: updatedResourcesEs,
    en: updatedResourcesEn,
  }
}

