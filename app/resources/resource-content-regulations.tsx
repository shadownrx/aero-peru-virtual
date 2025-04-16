"use client"

import Image from "next/image"


// Componente para las Regulaciones de VA en español
export const RegulacionesVAContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Regulaciones y Normas de AERO PERU Virtual
    </h2>
    <p>
      Como miembro de AERO PERU Virtual, es importante que conozcas y sigas nuestras regulaciones y normas. Estas han
      sido diseñadas para garantizar una experiencia de vuelo virtual realista, profesional y agradable para todos los
      miembros de nuestra comunidad.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Regulaciones de vuelo" fill className="object-cover" />
    </div>

    <h2 id="section-2" className="scroll-mt-20">
      Requisitos de Membresía
    </h2>
    <p>Para ser miembro activo de AERO PERU Virtual, debes cumplir con los siguientes requisitos:</p>

    <ul>
      <li>Tener al menos 16 años de edad</li>
      <li>Poseer una copia legal de un simulador de vuelo compatible</li>
      <li>Comprometerte a realizar al menos un vuelo cada 30 días</li>
      <li>Mantener un comportamiento profesional y respetuoso en todas las comunicaciones</li>
      <li>Seguir los procedimientos operativos estándar durante los vuelos</li>
    </ul>

    <h2 id="section-3" className="scroll-mt-20">
      Código de Conducta
    </h2>
    <p>
      En AERO PERU Virtual valoramos el respeto, la profesionalidad y el espíritu comunitario. Todos los miembros deben
      adherirse al siguiente código de conducta:
    </p>

    <ol>
      <li>
        <strong>Respeto mutuo:</strong> Tratar a todos los miembros con respeto y cortesía, independientemente de su
        nivel de experiencia, nacionalidad, género o cualquier otra característica personal.
      </li>
      <li>
        <strong>Profesionalismo:</strong> Mantener un comportamiento profesional durante los vuelos, eventos y en todas
        las comunicaciones oficiales.
      </li>
      <li>
        <strong>Honestidad:</strong> No falsificar registros de vuelo ni utilizar software no autorizado para obtener
        ventajas injustas.
      </li>
      <li>
        <strong>Colaboración:</strong> Ayudar a otros miembros cuando sea posible y contribuir positivamente a la
        comunidad.
      </li>
      <li>
        <strong>Representación:</strong> Recordar que representas a AERO PERU Virtual cuando participas en eventos
        externos o interactúas con otras comunidades virtuales.
      </li>
    </ol>

    <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
      <h3 className="text-lg font-medium mb-2">Importante</h3>
      <p>
        El incumplimiento del código de conducta puede resultar en acciones disciplinarias, desde advertencias hasta la
        expulsión permanente de AERO PERU Virtual, dependiendo de la gravedad de la infracción.
      </p>
    </div>

    <h2 id="section-4" className="scroll-mt-20">
      Regulaciones de Vuelo
    </h2>
    <p>
      Para mantener el realismo y la calidad de nuestras operaciones, todos los vuelos deben cumplir con las siguientes
      regulaciones:
    </p>

    <h3>Planificación de Vuelo</h3>
    <ul>
      <li>Todos los vuelos deben tener un plan de vuelo válido presentado a través de nuestro sistema ACARS</li>
      <li>Las rutas deben ser realistas y seguir las aerovías y procedimientos estándar</li>
      <li>El cálculo de combustible debe ser adecuado para la ruta, incluyendo reservas y alternativas</li>
    </ul>

    <h3>Operaciones de Vuelo</h3>
    <ul>
      <li>Seguir los procedimientos de la aerolínea para todas las fases del vuelo</li>
      <li>Mantener comunicaciones profesionales con ATC (si está disponible)</li>
      <li>Respetar las limitaciones de la aeronave y no realizar maniobras irrealistas</li>
      <li>Completar el vuelo en su totalidad, desde la puerta de salida hasta la puerta de llegada</li>
    </ul>

    <h3>Registro de Vuelos</h3>
    <ul>
      <li>Todos los vuelos deben ser registrados a través del sistema ACARS aprobado</li>
      <li>Los vuelos deben completarse en tiempo real (no se permite aceleración del tiempo mayor a 4x)</li>
      <li>Se permiten pausas razonables durante vuelos largos, pero deben ser minimizadas</li>
    </ul>

    <h2 id="section-5" className="scroll-mt-20">
      Sistema de Rangos y Promociones
    </h2>
    <p>
      AERO PERU Virtual utiliza un sistema de rangos basado en horas de vuelo y experiencia. Los rangos son los
      siguientes:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Piloto en Entrenamiento</h3>
        <p className="mb-2">0-50 horas de vuelo</p>
        <ul className="text-sm">
          <li>Acceso a aeronaves básicas</li>
          <li>Rutas domésticas</li>
          <li>Entrenamiento básico requerido</li>
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Segundo Oficial</h3>
        <p className="mb-2">50-100 horas de vuelo</p>
        <ul className="text-sm">
          <li>Acceso a aeronaves medianas</li>
          <li>Rutas regionales</li>
          <li>Entrenamiento intermedio disponible</li>
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Primer Oficial</h3>
        <p className="mb-2">100-250 horas de vuelo</p>
        <ul className="text-sm">
          <li>Acceso a la mayoría de aeronaves</li>
          <li>Rutas internacionales</li>
          <li>Posibilidad de ser mentor</li>
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Capitán</h3>
        <p className="mb-2">250+ horas de vuelo</p>
        <ul className="text-sm">
          <li>Acceso a todas las aeronaves</li>
          <li>Todas las rutas disponibles</li>
          <li>Elegible para posiciones de liderazgo</li>
        </ul>
      </div>
    </div>

    <h2 id="section-6" className="scroll-mt-20">
      Política de Inactividad
    </h2>
    <p>Para mantener una comunidad activa y comprometida, aplicamos la siguiente política de inactividad:</p>

    <ul>
      <li>Los pilotos deben completar al menos un vuelo cada 30 días para mantener el estado activo</li>
      <li>Después de 30 días sin actividad, el piloto recibirá una notificación de advertencia</li>
      <li>Después de 60 días sin actividad, el piloto será movido al estado inactivo</li>
      <li>Después de 90 días sin actividad, la cuenta puede ser eliminada</li>
    </ul>

    <p>
      Si sabes que estarás ausente por un período prolongado (estudios, trabajo, vacaciones, etc.), puedes solicitar una
      licencia de ausencia que congelará tu cuenta por hasta 6 meses.
    </p>

    <h2 id="section-7" className="scroll-mt-20">
      Actualizaciones y Modificaciones
    </h2>
    <p>
      AERO PERU Virtual se reserva el derecho de actualizar o modificar estas regulaciones según sea necesario. Los
      cambios importantes serán notificados a todos los miembros a través de nuestros canales oficiales de comunicación.
    </p>

    <p>
      Al unirte a AERO PERU Virtual, aceptas cumplir con todas estas regulaciones y normas. Si tienes alguna pregunta o
      necesitas aclaraciones, no dudes en contactar a nuestro equipo de administración.
    </p>
  </>
)

// Componente para la Política GDPR de IVAO en español
export const PoliticaGDPRContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      Política GDPR de IVAO y AERO PERU Virtual
    </h2>
    <p>
      En AERO PERU Virtual, respetamos tu privacidad y nos comprometemos a proteger tus datos personales de acuerdo con
      el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y otras leyes de privacidad aplicables.
      Esta política explica cómo recopilamos, utilizamos y protegemos tu información personal, así como tus derechos
      respecto a estos datos.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Protección de datos" fill className="object-cover" />
    </div>

    <h2 id="section-2" className="scroll-mt-20">
      Información que Recopilamos
    </h2>
    <p>
      Como parte de nuestras operaciones y para proporcionar nuestros servicios, podemos recopilar y procesar los
      siguientes tipos de información personal:
    </p>

    <ul>
      <li>
        <strong>Información de identificación:</strong> Nombre, apellidos, nombre de usuario, contraseña.
      </li>
      <li>
        <strong>Información de contacto:</strong> Dirección de correo electrónico, país de residencia.
      </li>
      <li>
        <strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo, datos de conexión.
      </li>
      <li>
        <strong>Información de actividad:</strong> Registros de vuelo, participación en eventos, comunicaciones en foros
        y Discord.
      </li>
    </ul>

    <h2 id="section-3" className="scroll-mt-20">
      Cómo Utilizamos tu Información
    </h2>
    <p>Utilizamos la información personal recopilada para los siguientes propósitos:</p>

    <ul>
      <li>Gestionar tu cuenta y proporcionar nuestros servicios</li>
      <li>Comunicarnos contigo sobre actualizaciones, eventos y noticias</li>
      <li>Mejorar nuestros servicios y desarrollar nuevas características</li>
      <li>Garantizar el cumplimiento de nuestras regulaciones y políticas</li>
      <li>Resolver disputas y solucionar problemas</li>
    </ul>

    <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
      <h3 className="text-lg font-medium mb-2">Base Legal</h3>
      <p>Procesamos tu información personal basándonos en las siguientes bases legales:</p>
      <ul className="mt-2">
        <li>Tu consentimiento explícito al registrarte</li>
        <li>La necesidad de ejecutar nuestro contrato contigo (Términos de Servicio)</li>
        <li>Nuestros intereses legítimos, siempre que no prevalezcan sobre tus derechos y libertades</li>
        <li>El cumplimiento de obligaciones legales cuando sea aplicable</li>
      </ul>
    </div>

    <h2 id="section-4" className="scroll-mt-20">
      Compartir Información con Terceros
    </h2>
    <p>
      AERO PERU Virtual opera en colaboración con IVAO (International Virtual Aviation Organisation) y puede compartir
      cierta información con ellos para facilitar la integración de servicios. Además, podemos compartir información
      con:
    </p>

    <ul>
      <li>
        <strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro sitio web, como proveedores
        de alojamiento y servicios en la nube.
      </li>
      <li>
        <strong>Socios de la comunidad:</strong> Otras organizaciones de aviación virtual con las que colaboramos para
        eventos conjuntos.
      </li>
      <li>
        <strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales.
      </li>
    </ul>

    <p>No vendemos, alquilamos ni comercializamos tu información personal a terceros para fines de marketing.</p>

    <h2 id="section-5" className="scroll-mt-20">
      Tus Derechos bajo el GDPR
    </h2>
    <p>
      Como residente de la Unión Europea o de un país con leyes de privacidad similares, tienes los siguientes derechos
      respecto a tus datos personales:
    </p>

    <ol>
      <li>
        <strong>Derecho de acceso:</strong> Puedes solicitar una copia de la información personal que tenemos sobre ti.
      </li>
      <li>
        <strong>Derecho de rectificación:</strong> Puedes solicitar que corrijamos información inexacta o incompleta.
      </li>
      <li>
        <strong>Derecho al olvido:</strong> Puedes solicitar que eliminemos tu información personal en determinadas
        circunstancias.
      </li>
      <li>
        <strong>Derecho a la limitación del tratamiento:</strong> Puedes solicitar que restrinjamos el procesamiento de
        tu información.
      </li>
      <li>
        <strong>Derecho a la portabilidad de los datos:</strong> Puedes solicitar una copia de tus datos en un formato
        estructurado y legible por máquina.
      </li>
      <li>
        <strong>Derecho de oposición:</strong> Puedes oponerte al procesamiento de tus datos personales en determinadas
        circunstancias.
      </li>
      <li>
        <strong>Derecho a no ser objeto de decisiones automatizadas:</strong> Puedes solicitar que no se tomen
        decisiones significativas basadas únicamente en el procesamiento automatizado.
      </li>
    </ol>

    <p>
      Para ejercer cualquiera de estos derechos, por favor contacta con nuestro Delegado de Protección de Datos a través
      de privacy@aeroperuvirtual.com.
    </p>

    <h2 id="section-6" className="scroll-mt-20">
      Seguridad de los Datos
    </h2>
    <p>
      Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra
      el acceso no autorizado, la pérdida accidental o la alteración. Estas medidas incluyen:
    </p>

    <ul>
      <li>Encriptación de datos sensibles</li>
      <li>Acceso restringido a la información personal</li>
      <li>Monitoreo regular de nuestros sistemas para detectar vulnerabilidades</li>
      <li>Formación en protección de datos para nuestro personal</li>
    </ul>

    <h2 id="section-7" className="scroll-mt-20">
      Retención de Datos
    </h2>
    <p>
      Conservamos tu información personal solo durante el tiempo necesario para los fines para los que fue recopilada,
      incluyendo el cumplimiento de requisitos legales, contables o de informes. Los períodos de retención específicos
      dependen del tipo de información y su propósito.
    </p>

    <p>
      Si solicitas la eliminación de tu cuenta, eliminaremos o anonimizaremos tu información personal, excepto cuando
      necesitemos conservarla por razones legales o legítimas.
    </p>

    <h2 id="section-8" className="scroll-mt-20">
      Cookies y Tecnologías Similares
    </h2>
    <p>
      Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y
      personalizar el contenido. Puedes gestionar tus preferencias de cookies a través de la configuración de tu
      navegador.
    </p>

    <h2 id="section-9" className="scroll-mt-20">
      Cambios a esta Política
    </h2>
    <p>
      Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por
      otros motivos operativos, legales o regulatorios. Te notificaremos cualquier cambio material a través de un aviso
      destacado en nuestro sitio web o por correo electrónico.
    </p>

    <h2 id="section-10" className="scroll-mt-20">
      Contacto
    </h2>
    <p>
      Si tienes preguntas, comentarios o solicitudes relacionadas con esta política de privacidad o el procesamiento de
      tus datos personales, por favor contacta con:
    </p>

    <div className="bg-gray-50 dark:bg-gray-900 p-6 my-6 rounded-sm">
      <p>
        <strong>Delegado de Protección de Datos</strong>
      </p>
      <p>Email: privacy@aeroperuvirtual.com</p>
      <p>AERO PERU Virtual</p>
    </div>

    <p>
      También tienes derecho a presentar una reclamación ante una autoridad de protección de datos si consideras que el
      procesamiento de tu información personal infringe las leyes de protección de datos.
    </p>
  </>
)

// Componentes para contenido en inglés
export const VARegulationsContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      AERO PERU Virtual Regulations and Rules
    </h2>
    <p>
      As a member of AERO PERU Virtual, it is important that you know and follow our regulations and rules. These have
      been designed to ensure a realistic, professional, and enjoyable virtual flight experience for all members of our
      community.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Flight regulations" fill className="object-cover" />
    </div>

    <h2 id="section-2" className="scroll-mt-20">
      Membership Requirements
    </h2>
    <p>To be an active member of AERO PERU Virtual, you must meet the following requirements:</p>

    <ul>
      <li>Be at least 16 years old</li>
      <li>Own a legal copy of a compatible flight simulator</li>
      <li>Commit to completing at least one flight every 30 days</li>
      <li>Maintain professional and respectful behavior in all communications</li>
      <li>Follow standard operating procedures during flights</li>
    </ul>

    <h2 id="section-3" className="scroll-mt-20">
      Code of Conduct
    </h2>
    <p>
      At AERO PERU Virtual, we value respect, professionalism, and community spirit. All members must adhere to the
      following code of conduct:
    </p>

    <ol>
      <li>
        <strong>Mutual respect:</strong> Treat all members with respect and courtesy, regardless of their level of
        experience, nationality, gender, or any other personal characteristic.
      </li>
      <li>
        <strong>Professionalism:</strong> Maintain professional behavior during flights, events, and in all official
        communications.
      </li>
      <li>
        <strong>Honesty:</strong> Do not falsify flight records or use unauthorized software to gain unfair advantages.
      </li>
      <li>
        <strong>Collaboration:</strong> Help other members when possible and contribute positively to the community.
      </li>
      <li>
        <strong>Representation:</strong> Remember that you represent AERO PERU Virtual when participating in external
        events or interacting with other virtual communities.
      </li>
    </ol>

    <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
      <h3 className="text-lg font-medium mb-2">Important</h3>
      <p>
        Failure to comply with the code of conduct may result in disciplinary actions, from warnings to permanent
        expulsion from AERO PERU Virtual, depending on the severity of the infraction.
      </p>
    </div>

    <h2 id="section-4" className="scroll-mt-20">
      Flight Regulations
    </h2>
    <p>To maintain realism and quality in our operations, all flights must comply with the following regulations:</p>

    <h3>Flight Planning</h3>
    <ul>
      <li>All flights must have a valid flight plan submitted through our ACARS system</li>
      <li>Routes must be realistic and follow standard airways and procedures</li>
      <li>Fuel calculation must be adequate for the route, including reserves and alternates</li>
    </ul>

    <h3>Flight Operations</h3>
    <ul>
      <li>Follow airline procedures for all phases of flight</li>
      <li>Maintain professional communications with ATC (if available)</li>
      <li>Respect aircraft limitations and do not perform unrealistic maneuvers</li>
      <li>Complete the flight in its entirety, from departure gate to arrival gate</li>
    </ul>

    <h3>Flight Logging</h3>
    <ul>
      <li>All flights must be logged through the approved ACARS system</li>
      <li>Flights must be completed in real-time (time acceleration greater than 4x is not allowed)</li>
      <li>Reasonable pauses during long flights are permitted but should be minimized</li>
    </ul>

    <h2 id="section-5" className="scroll-mt-20">
      Rank System and Promotions
    </h2>
    <p>AERO PERU Virtual uses a rank system based on flight hours and experience. The ranks are as follows:</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Trainee Pilot</h3>
        <p className="mb-2">0-50 flight hours</p>
        <ul className="text-sm">
          <li>Access to basic aircraft</li>
          <li>Domestic routes</li>
          <li>Basic training required</li>
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Second Officer</h3>
        <p className="mb-2">50-100 flight hours</p>
        <ul className="text-sm">
          <li>Access to medium aircraft</li>
          <li>Regional routes</li>
          <li>Intermediate training available</li>
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">First Officer</h3>
        <p className="mb-2">100-250 flight hours</p>
        <ul className="text-sm">
          <li>Access to most aircraft</li>
          <li>International routes</li>
          <li>Possibility to become a mentor</li>
        </ul>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Captain</h3>
        <p className="mb-2">250+ flight hours</p>
        <ul className="text-sm">
          <li>Access to all aircraft</li>
          <li>All routes available</li>
          <li>Eligible for leadership positions</li>
        </ul>
      </div>
    </div>

    <h2 id="section-6" className="scroll-mt-20">
      Inactivity Policy
    </h2>
    <p>To maintain an active and engaged community, we apply the following inactivity policy:</p>

    <ul>
      <li>Pilots must complete at least one flight every 30 days to maintain active status</li>
      <li>After 30 days of inactivity, the pilot will receive a warning notification</li>
      <li>After 60 days of inactivity, the pilot will be moved to inactive status</li>
      <li>After 90 days of inactivity, the account may be deleted</li>
    </ul>

    <p>
      If you know you will be absent for an extended period (studies, work, vacation, etc.), you can request a leave of
      absence that will freeze your account for up to 6 months.
    </p>

    <h2 id="section-7" className="scroll-mt-20">
      Updates and Modifications
    </h2>
    <p>
      AERO PERU Virtual reserves the right to update or modify these regulations as needed. Significant changes will be
      notified to all members through our official communication channels.
    </p>

    <p>
      By joining AERO PERU Virtual, you agree to comply with all these regulations and rules. If you have any questions
      or need clarification, please don't hesitate to contact our administration team.
    </p>
  </>
)

// Componente para la Política GDPR de IVAO en inglés
export const GDPRPolicyContent = () => (
  <>
    <h2 id="section-1" className="scroll-mt-20">
      IVAO and AERO PERU Virtual GDPR Policy
    </h2>
    <p>
      At AERO PERU Virtual, we respect your privacy and are committed to protecting your personal data in accordance
      with the European Union's General Data Protection Regulation (GDPR) and other applicable privacy laws. This policy
      explains how we collect, use, and protect your personal information, as well as your rights regarding this data.
    </p>

    <div className="relative w-full h-64 my-8 rounded-sm overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=800" alt="Data protection" fill className="object-cover" />
    </div>

    <h2 id="section-2" className="scroll-mt-20">
      Information We Collect
    </h2>
    <p>
      As part of our operations and to provide our services, we may collect and process the following types of personal
      information:
    </p>

    <ul>
      <li>
        <strong>Identification information:</strong> First name, last name, username, password.
      </li>
      <li>
        <strong>Contact information:</strong> Email address, country of residence.
      </li>
      <li>
        <strong>Technical information:</strong> IP address, browser type, operating system, connection data.
      </li>
      <li>
        <strong>Activity information:</strong> Flight logs, event participation, communications in forums and Discord.
      </li>
    </ul>

    <h2 id="section-3" className="scroll-mt-20">
      How We Use Your Information
    </h2>
    <p>We use the personal information collected for the following purposes:</p>

    <ul>
      <li>Managing your account and providing our services</li>
      <li>Communicating with you about updates, events, and news</li>
      <li>Improving our services and developing new features</li>
      <li>Ensuring compliance with our regulations and policies</li>
      <li>Resolving disputes and troubleshooting problems</li>
    </ul>

    <div className="bg-primary-light dark:bg-gray-800 p-6 my-8 rounded-sm">
      <h3 className="text-lg font-medium mb-2">Legal Basis</h3>
      <p>We process your personal information based on the following legal grounds:</p>
      <ul className="mt-2">
        <li>Your explicit consent when registering</li>
        <li>The necessity to perform our contract with you (Terms of Service)</li>
        <li>Our legitimate interests, as long as they don't override your rights and freedoms</li>
        <li>Compliance with legal obligations when applicable</li>
      </ul>
    </div>

    <h2 id="section-4" className="scroll-mt-20">
      Sharing Information with Third Parties
    </h2>
    <p>
      AERO PERU Virtual operates in collaboration with IVAO (International Virtual Aviation Organisation) and may share
      certain information with them to facilitate the integration of services. Additionally, we may share information
      with:
    </p>

    <ul>
      <li>
        <strong>Service providers:</strong> Companies that help us operate our website, such as hosting providers and
        cloud services.
      </li>
      <li>
        <strong>Community partners:</strong> Other virtual aviation organizations with which we collaborate for joint
        events.
      </li>
      <li>
        <strong>Legal authorities:</strong> When required by law or to protect our legal rights.
      </li>
    </ul>

    <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

    <h2 id="section-5" className="scroll-mt-20">
      Your Rights under GDPR
    </h2>
    <p>
      As a resident of the European Union or a country with similar privacy laws, you have the following rights
      regarding your personal data:
    </p>

    <ol>
      <li>
        <strong>Right of access:</strong> You can request a copy of the personal information we hold about you.
      </li>
      <li>
        <strong>Right to rectification:</strong> You can request that we correct inaccurate or incomplete information.
      </li>
      <li>
        <strong>Right to erasure:</strong> You can request that we delete your personal information in certain
        circumstances.
      </li>
      <li>
        <strong>Right to restriction of processing:</strong> You can request that we restrict the processing of your
        information.
      </li>
      <li>
        <strong>Right to data portability:</strong> You can request a copy of your data in a structured,
        machine-readable format.
      </li>
      <li>
        <strong>Right to object:</strong> You can object to the processing of your personal data in certain
        circumstances.
      </li>
      <li>
        <strong>Right not to be subject to automated decision-making:</strong> You can request that significant
        decisions not be made based solely on automated processing.
      </li>
    </ol>

    <p>To exercise any of these rights, please contact our Data Protection Officer at privacy@aeroperuvirtual.com.</p>

    <h2 id="section-6" className="scroll-mt-20">
      Data Security
    </h2>
    <p>
      We implement appropriate technical and organizational security measures to protect your personal data against
      unauthorized access, accidental loss, or alteration. These measures include:
    </p>

    <ul>
      <li>Encryption of sensitive data</li>
      <li>Restricted access to personal information</li>
      <li>Regular monitoring of our systems to detect vulnerabilities</li>
      <li>Data protection training for our staff</li>
    </ul>

    <h2 id="section-7" className="scroll-mt-20">
      Data Retention
    </h2>
    <p>
      We retain your personal information only for as long as necessary for the purposes for which it was collected,
      including compliance with legal, accounting, or reporting requirements. Specific retention periods depend on the
      type of information and its purpose.
    </p>

    <p>
      If you request deletion of your account, we will delete or anonymize your personal information, except when we
      need to retain it for legal or legitimate reasons.
    </p>

    <h2 id="section-8" className="scroll-mt-20">
      Cookies and Similar Technologies
    </h2>
    <p>
      Our website uses cookies and similar technologies to enhance your experience, analyze traffic, and personalize
      content. You can manage your cookie preferences through your browser settings.
    </p>

    <h2 id="section-9" className="scroll-mt-20">
      Changes to this Policy
    </h2>
    <p>
      We may update this privacy policy periodically to reflect changes in our practices or for other operational,
      legal, or regulatory reasons. We will notify you of any material changes through a prominent notice on our website
      or by email.
    </p>

    <h2 id="section-10" className="scroll-mt-20">
      Contact
    </h2>
    <p>
      If you have questions, comments, or requests regarding this privacy policy or the processing of your personal
      data, please contact:
    </p>

    <div className="bg-gray-50 dark:bg-gray-900 p-6 my-6 rounded-sm">
      <p>
        <strong>Data Protection Officer</strong>
      </p>
      <p>Email: aeroperuinfo@gmail.com</p>
      <p>AERO PERU Virtual</p>
    </div>

    <p>
      You also have the right to lodge a complaint with a data protection authority if you believe that the processing
      of your personal information infringes data protection laws.
    </p>
  </>
)
