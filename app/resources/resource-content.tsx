"use client"

import Image from "next/image"

// Componente para la Guía de Principiantes en español
export const GuiaPrincipiantesContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Introducción a la aviación virtual
    </h2>
    <p>
      Bienvenido al fascinante mundo de la aviación virtual con AERO PERU Virtual. Esta guía está diseñada para ayudarte
      a dar tus primeros pasos como piloto virtual, proporcionándote toda la información necesaria para comenzar tu
      viaje en los cielos virtuales de Perú y el mundo.
    </p>
    <p>
      La aviación virtual es una simulación realista de operaciones de vuelo utilizando software especializado. Como
      piloto de AERO PERU Virtual, tendrás la oportunidad de experimentar la emoción de volar aviones comerciales
      siguiendo procedimientos reales, comunicándote con controladores aéreos virtuales y formando parte de una
      comunidad apasionada por la aviación.
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
        <strong>Simulador de vuelo:</strong> Puedes utilizar Microsoft Flight Simulator (2020), Prepar3D, X-Plane 11 o
        X-Plane 12.
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
    <p>Una vez que tengas instalado tu simulador de vuelo preferido, estos son los primeros pasos que debes seguir:</p>

    <ol>
      <li>
        <strong>Familiarízate con los controles básicos:</strong> Dedica tiempo a aprender los controles básicos de tu
        simulador. La mayoría de los simuladores incluyen tutoriales integrados que te ayudarán a entender los conceptos
        fundamentales.
      </li>
      <li>
        <strong>Instala las libreas oficiales:</strong> Descarga e instala las libreas (pinturas) oficiales de AERO PERU
        Virtual para tu simulador desde nuestra sección de descargas.
      </li>
      <li>
        <strong>Configura tu ACARS:</strong> Instala y configura el software ACARS que utilizamos para rastrear tus
        vuelos. Encontrarás guías detalladas en nuestra sección de tutoriales.
      </li>
      <li>
        <strong>Únete a nuestro Discord:</strong> Conéctate con otros pilotos y obtén ayuda en tiempo real uniéndote a
        nuestro servidor de Discord.
      </li>
    </ol>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Cabina de avión virtual" fill className="object-cover" />
    </div>

    <h2 id="section-4" className="scroll-mt-20">
      Conceptos básicos de vuelo
    </h2>
    <p>Antes de realizar tu primer vuelo oficial, es importante que comprendas algunos conceptos básicos:</p>

    <h3>Fases de vuelo:</h3>
    <ol>
      <li>
        <strong>Planificación pre-vuelo:</strong> Incluye la selección de ruta, cálculo de combustible y verificación de
        condiciones meteorológicas.
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
      Utilizamos fraseología estándar para comunicarnos con ATC (Control de Tráfico Aéreo). Consulta nuestro Curso de
      Radiofonía para más detalles.
    </p>

    <h3>Procedimientos de navegación:</h3>
    <p>
      Seguimos rutas establecidas utilizando ayudas a la navegación como VOR, NDB, ILS y RNAV. Es importante
      familiarizarse con las cartas de navegación de los aeropuertos.
    </p>

    <h3>Procedimientos de emergencia:</h3>
    <p>
      Aunque esperamos que nunca los necesites, es importante conocer los procedimientos básicos para situaciones de
      emergencia como fallo de motor, despresurización o incendio.
    </p>

    <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
      <h3 className="text-lg font-medium mb-2">Consejo para principiantes</h3>
      <p>
        Comienza con aviones más pequeños y sencillos antes de pasar a jets comerciales complejos. Esto te permitirá
        familiarizarte con los conceptos básicos de vuelo sin sentirte abrumado por sistemas complejos.
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
      Recuerda que todos los pilotos comenzaron como principiantes. No tengas miedo de hacer preguntas y pedir ayuda.
      ¡Nuestra comunidad está aquí para apoyarte en cada paso de tu viaje como piloto virtual!
    </p>
  </>
)

// Componente para el Curso de Radiofonía en español
export const CursoRadiofoniaContent = () => (
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
      fraseología estándar y los procedimientos de comunicación utilizados por pilotos y controladores aéreos en todo el
      mundo.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=800"
        alt="Comunicaciones aeronáuticas"
        fill
        className="object-cover"
      />
    </div>

    {/* Resto del contenido... */}
  </>
)

// Componente para Herramientas de Planificación en español
export const HerramientasPlanificacionContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Introducción a la planificación de vuelo
    </h2>
    <p>
      La planificación de vuelo es un proceso fundamental en la aviación, tanto real como virtual. Una planificación
      adecuada garantiza que tu vuelo sea seguro, eficiente y realista. En esta guía, exploraremos las herramientas y
      recursos disponibles para ayudarte a planificar tus vuelos virtuales con AERO PERU Virtual.
    </p>
    <p>
      Una buena planificación de vuelo incluye la selección de rutas, cálculo de combustible, consideraciones
      meteorológicas, y la preparación de documentación necesaria como planes de vuelo y cartas de navegación.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Planificación de vuelo" fill className="object-cover" />
    </div>

    {/* Resto del contenido... */}
  </>
)

// Componentes para contenido en inglés
export const BeginnersGuideContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Introduction to virtual aviation
    </h2>
    <p>
      Welcome to the fascinating world of virtual aviation with AERO PERU Virtual. This guide is designed to help you
      take your first steps as a virtual pilot, providing you with all the necessary information to begin your journey
      in the virtual skies of Peru and beyond.
    </p>
    <p>
      Virtual aviation is a realistic simulation of flight operations using specialized software. As an AERO PERU
      Virtual pilot, you'll have the opportunity to experience the thrill of flying commercial aircraft following real
      procedures, communicating with virtual air traffic controllers, and being part of a community passionate about
      aviation.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Flight simulator" fill className="object-cover" />
    </div>

    {/* Resto del contenido... */}
  </>
)

export const RadioCommunicationContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Introduction to aeronautical communications
    </h2>
    <p>
      Aeronautical communications are an essential component of aviation, both real and virtual. Clear, concise, and
      standardized communication is fundamental to ensuring the safety and efficiency of air operations.
    </p>
    <p>
      In this course, you will learn the fundamentals of aeronautical radio communication, including the phonetic
      alphabet, standard phraseology, and communication procedures used by pilots and air traffic controllers worldwide.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=800"
        alt="Aeronautical communications"
        fill
        className="object-cover"
      />
    </div>

    {/* Resto del contenido... */}
  </>
)

export const FlightPlanningToolsContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Introduction to flight planning
    </h2>
    <p>
      Flight planning is a fundamental process in aviation, both real and virtual. Proper planning ensures that your
      flight is safe, efficient, and realistic. In this guide, we'll explore the tools and resources available to help
      you plan your virtual flights with AERO PERU Virtual.
    </p>
    <p>
      Good flight planning includes route selection, fuel calculation, weather considerations, and preparation of
      necessary documentation such as flight plans and navigation charts.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Flight planning" fill className="object-cover" />
    </div>

    {/* Resto del contenido... */}
  </>
)
