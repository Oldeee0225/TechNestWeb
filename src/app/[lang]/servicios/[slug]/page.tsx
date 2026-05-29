import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

const servicesData = {
  "desarrollo-web": {
    title: "Desarrollo Web Premium",
    description:
      "Creamos experiencias web que cautivan, convierten y escalan. Desde landing pages hasta plataformas SaaS complejas.",
    features: [
      { name: "Landing pages modernas", desc: "Páginas de alto impacto diseñadas para convertir visitantes en clientes." },
      { name: "Sitios corporativos", desc: "Presencia digital profesional que refleja la identidad y valores de tu marca." },
      { name: "Dashboards administrativos", desc: "Paneles de control interactivos para gestionar tu negocio en tiempo real." },
      { name: "Plataformas SaaS", desc: "Arquitectura robusta y escalable para productos de software como servicio." },
      { name: "Portales de clientes", desc: "Espacios privados donde tus clientes gestionan sus servicios y datos." },
      { name: "Paneles en tiempo real", desc: "Visualización de datos en vivo con gráficos dinámicos y alertas inteligentes." },
      { name: "Inteligencia Artificial", desc: "Integración de modelos de IA para potenciar la funcionalidad de tu web." },
    ],
    gradient: "from-[#1CC8FF] to-[#3B82F6]",
    benefits: [
      "Carga ultrarrápida (Google Core Web Vitals)",
      "SEO optimizado desde el primer día",
      "Diseño responsive y accesible",
      "Escalabilidad para miles de usuarios",
    ],
    videoSection: {
      titleText: "¿Por qué confiar tu ",
      titleHighlight: "Website",
      titleEnd: " a nosotros?",
      description: "Tu sitio web es el vendedor estrella de tu negocio trabajando 24/7. No creamos plantillas genéricas; diseñamos experiencias digitales a medida que reflejan la verdadera calidad de tu marca. Con tiempos de carga ultrarrápidos, optimización SEO desde el día cero y un diseño mega premium, garantizamos que cada visitante se lleve la mejor impresión de tu empresa y se convierta en un cliente leal.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/Video1.mp4"
    }
  },
  "inteligencia-artificial": {
    title: "Inteligencia Artificial",
    description:
      "Potencia tu negocio con soluciones de IA de última generación. Automatización inteligente, chatbots y análisis predictivo.",
    features: [
      { name: "Chatbots IA personalizados", desc: "Asistentes conversacionales entrenados con tu propia base de conocimiento." },
      { name: "Integración con OpenAI", desc: "Conecta tu negocio con los modelos más avanzados de GPT y DALL-E." },
      { name: "Asistentes virtuales", desc: "Agentes inteligentes que automatizan tareas y responden consultas 24/7." },
      { name: "Automatización con IA", desc: "Procesos inteligentes que aprenden y se optimizan con cada interacción." },
      { name: "Generación de contenido", desc: "Creación automatizada de textos, imágenes y assets con IA generativa." },
      { name: "Análisis inteligente de datos", desc: "Extrae insights accionables de tus datos con machine learning." },
      { name: "Sistemas RAG", desc: "Recuperación y generación aumentada para respuestas precisas basadas en tus documentos." },
      { name: "IA para atención al cliente", desc: "Soporte automatizado con comprensión contextual y escalamiento humano." },
    ],
    gradient: "from-[#22D3EE] to-[#67E8F9]",
    benefits: [
      "Reducción de costos operativos hasta 60%",
      "Atención al cliente 24/7 sin interrupciones",
      "Escalabilidad sin contratar más personal",
      "Decisiones basadas en datos en tiempo real",
    ],
    videoSection: {
      titleText: "¿Por qué integrar ",
      titleHighlight: "Inteligencia Artificial",
      titleEnd: " con nosotros?",
      description: "La Inteligencia Artificial no es el futuro, es el presente que está definiendo el éxito de las empresas líderes. Implementamos soluciones a medida que automatizan tus operaciones, elevan la experiencia de tus clientes y optimizan procesos, dándote una ventaja competitiva sin precedentes en tu sector.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/14846846_1920_1080_30fps.mp4"
    }
  },
  automatizacion: {
    title: "Automatización Empresarial",
    description:
      "Elimina tareas repetitivas y optimiza tus flujos de trabajo con automatizaciones inteligentes.",
    features: [
      { name: "Automatización de WhatsApp", desc: "Mensajes automáticos, respuestas inteligentes y campañas desde tu negocio." },
      { name: "Flujos de trabajo", desc: "Automatización de procesos multi-paso sin intervención manual." },
      { name: "Integración entre plataformas", desc: "Conecta tus herramientas favoritas: CRMs, ERPs, email, calendarios y más." },
      { name: "Bots empresariales", desc: "Robots digitales que ejecutan tareas complejas de forma autónoma." },
      { name: "CRM personalizados", desc: "Gestión de clientes adaptada a tu modelo de negocio." },
      { name: "Automatización de correos", desc: "Secuencias de email marketing, recordatorios y notificaciones automáticas." },
      { name: "Facturación automática", desc: "Generación y envío automatizado de facturas, recibos y cobros." },
    ],
    gradient: "from-[#3B82F6] to-[#1CC8FF]",
    benefits: [
      "Ahorra cientos de horas al mes en tareas manuales",
      "Reduce errores humanos en procesos críticos",
      "Escala operaciones sin aumentar tu equipo",
      "Integración con tus herramientas actuales",
    ],
    videoSection: {
      titleText: "¿Por qué elegir nuestra ",
      titleHighlight: "Automatización",
      titleEnd: "?",
      description: "El tiempo es tu activo más valioso. Al automatizar tareas repetitivas y procesos clave, liberas a tu equipo para que se enfoque en lo que realmente importa: hacer crecer tu negocio. Construimos ecosistemas digitales eficientes que trabajan por ti las 24 horas del día sin margen de error.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/12680994_1920_1080_25fps.mp4"
    }
  },
  sistemas: {
    title: "Sistemas Empresariales",
    description:
      "Sistemas robustos y personalizados que centralizan y optimizan la gestión de tu empresa.",
    features: [
      { name: "ERP personalizados", desc: "Sistema integral que unifica finanzas, inventarios, ventas y más en un solo lugar." },
      { name: "Inventarios", desc: "Control de stock en tiempo real con alertas y reportes automatizados." },
      { name: "Sistemas de ventas", desc: "Pipeline completo desde cotización hasta cobro, con dashboards de rendimiento." },
      { name: "POS", desc: "Punto de venta moderno con integración a inventarios y facturación electrónica." },
      { name: "Gestión de empleados", desc: "Administración de personal, horarios, permisos y nóminas." },
      { name: "Reservas", desc: "Sistema de agendamiento y reservas con recordatorios automáticos." },
      { name: "Facturación", desc: "Facturación electrónica, seguimiento de pagos y reportes financieros." },
      { name: "Logística", desc: "Gestión de envíos, rutas y seguimiento de paquetes en tiempo real." },
    ],
    gradient: "from-[#67E8F9] to-[#22D3EE]",
    benefits: [
      "Todo en un solo sistema, sin herramientas dispersas",
      "Reportes en tiempo real para tomar mejores decisiones",
      "Escalable desde PYME hasta gran empresa",
      "Soporte y actualizaciones continuas",
    ],
    videoSection: {
      titleText: "¿Por qué potenciar tu empresa con nuestros ",
      titleHighlight: "Sistemas",
      titleEnd: "?",
      description: "Un negocio sin un sistema centralizado es un negocio con límites. Desarrollamos arquitecturas robustas y plataformas escalables hechas estrictamente a la medida de tus necesidades, garantizando control absoluto, máxima seguridad de la información y decisiones basadas en datos precisos en tiempo real.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/8348316-uhd_3840_2160_25fps.mp4"
    }
  },
  "apps-moviles": {
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y cross-platform que llevan tu negocio al bolsillo de tus clientes.",
    features: [
      { name: "React Native", desc: "Apps nativas para iOS y Android con un solo código base." },
      { name: "Flutter", desc: "Interfaces hermosas y alto rendimiento con el framework de Google." },
      { name: "Apps internas", desc: "Herramientas móviles privadas para optimizar operaciones de tu equipo." },
      { name: "Apps de clientes", desc: "Experiencias móviles que tus clientes amarán y usarán a diario." },
      { name: "Delivery", desc: "Sistema completo de pedidos, tracking y entregas con notificaciones." },
      { name: "Tracking", desc: "Seguimiento GPS en tiempo real para envíos, flotas o servicios." },
      { name: "IA móvil", desc: "Modelos de IA optimizados para correr directamente en dispositivos móviles." },
    ],
    gradient: "from-[#8B5CF6] to-[#6366F1]",
    benefits: [
      "Llega a iOS y Android sin duplicar esfuerzos",
      "Notificaciones push y funcionalidad offline",
      "Rendimiento casi nativo en ambos ecosistemas",
      "Actualizaciones sin pasar por las stores (OTA)",
    ],
    videoSection: {
      titleText: "¿Por qué desarrollar tu ",
      titleHighlight: "App Móvil",
      titleEnd: " con nosotros?",
      description: "Una aplicación móvil exitosa no es solo código, es la creación de experiencias irresistibles. Desarrollamos apps ultra rápidas, intuitivas y hermosas que conectan tu marca directamente con tus usuarios, generando un engagement masivo y multiplicando las interacciones valiosas diarias.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/14377147-uhd_3840_2160_30fps.mp4"
    }
  },
  "cloud-backend": {
    title: "Cloud & Backend",
    description:
      "Infraestructura robusta y escalable que mantiene tu negocio funcionando 24/7.",
    features: [
      { name: "APIs REST", desc: "Interfaces de programación rápidas, seguras y documentadas." },
      { name: "Arquitectura backend", desc: "Diseño de sistemas modulares y mantenibles que crecen contigo." },
      { name: "Microservicios", desc: "Arquitectura desacoplada para equipos ágiles y despliegues independientes." },
      { name: "Bases de datos", desc: "Modelado y optimización de bases relacionales y NoSQL." },
      { name: "DevOps", desc: "CI/CD, monitoreo y automatización de infraestructura." },
      { name: "Docker", desc: "Contenedores ligeros para entornos consistentes y portables." },
      { name: "AWS / Vercel", desc: "Despliegue en la nube con alta disponibilidad y escalado automático." },
      { name: "Escalabilidad", desc: "Sistemas preparados para pasar de 100 a 1 millón de usuarios." },
    ],
    gradient: "from-[#1CC8FF] to-[#3B82F6]",
    benefits: [
      "Disponibilidad 99.9% garantizada",
      "Escalado automático sin intervención manual",
      "Seguridad de nivel empresarial",
      "Costos optimizados con pago por uso",
    ],
    videoSection: {
      titleText: "¿Por qué modernizar tu ",
      titleHighlight: "Infraestructura",
      titleEnd: "?",
      description: "El crecimiento explosivo de tu negocio requiere una base tecnológica que jamás colapse bajo presión. Diseñamos arquitecturas cloud y sistemas backend ultra seguros y escalables, listos para soportar desde cientos hasta millones de usuarios de forma simultánea con un rendimiento espectacular y cero caídas.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/14522255_3840_2160_25fps.mp4"
    }
  },
  ciberseguridad: {
    title: "Ciberseguridad Ligera",
    description:
      "Protección esencial para tu negocio digital. Auditorías, hardening y autenticación robusta.",
    features: [
      { name: "Auditorías simples", desc: "Revisión de vulnerabilidades y buenas prácticas de seguridad." },
      { name: "Hardening", desc: "Endurecimiento de servidores y aplicaciones contra ataques comunes." },
      { name: "Protección de APIs", desc: "Seguridad en endpoints, rate limiting y validación de entrada." },
      { name: "Autenticación", desc: "Sistemas de login seguros con OAuth, 2FA y gestión de sesiones." },
    ],
    gradient: "from-[#EF4444] to-[#F59E0B]",
    benefits: [
      "Protección contra OWASP Top 10",
      "Auditoría gratuita inicial sin compromiso",
      "Implementación en días, no semanas",
      "Certificado SSL y cifrado de extremo a extremo",
    ],
    videoSection: {
      titleText: "¿Por qué priorizar la ",
      titleHighlight: "Ciberseguridad",
      titleEnd: " con nosotros?",
      description: "En el mundo digital actual, un solo fallo de seguridad puede destruir años de reputación y trabajo duro. Aseguramos tu activo más valioso, tu información, a través de rigurosos procesos de hardening y auditorías, blindando tus sistemas para prevenir ataques sofisticados antes de que sucedan.",
      videoUrl: "https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/6964235-hd_1920_1080_25fps.mp4"
    }
  },
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = servicesData[params.slug as keyof typeof servicesData]
  if (!service) return { title: "Servicio no encontrado | TechNest" }
  return {
    title: `${service.title} | TechNest`,
    description: service.description,
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]
  if (!service) notFound()

  return (
    <main className="min-h-screen bg-[#020617]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-[150px]`}
          />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1CC8FF]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-[#67E8F9]/60 hover:text-[#1CC8FF] mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Volver a servicios
          </Link>

          <div className="max-w-3xl relative">
            <span
              className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-xs font-semibold mb-4`}
            >
              {service.title}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 relative z-10">
              {service.title}
            </h1>

            {/* Logo posicionado libremente a la derecha y un poco más abajo */}
            <div className="absolute top-12 -right-4 sm:-right-24 md:-right-40 hidden sm:block pointer-events-none">
              <div className="absolute inset-0 bg-[#1CC8FF] blur-[40px] opacity-30 rounded-full scale-150" />
              <Image
                src="/assets/LogoForm.png"
                alt="TechNest Logo"
                width={160}
                height={160}
                className="object-contain relative z-0 hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(28,200,255,0.4)] pointer-events-auto"
              />
            </div>

            <p className="text-lg text-[#67E8F9]/70 max-w-2xl leading-relaxed relative z-10">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 border border-[#1CC8FF]/10 hover:border-[#1CC8FF]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,200,255,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feat.name}</h3>
                    <p className="text-[#67E8F9]/60 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 border border-[#1CC8FF]/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1CC8FF] to-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#67E8F9]/80">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Dynamic Video Section */}
      {service.videoSection && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12 border border-[#1CC8FF]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CC8FF]/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                  {service.videoSection.titleText}
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.videoSection.titleHighlight}
                  </span>
                  {service.videoSection.titleEnd}
                </h2>
                <p className="text-[#67E8F9]/80 mb-12 max-w-4xl mx-auto text-center text-lg leading-relaxed">
                  {service.videoSection.description}
                </p>
                <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-video border border-[#1CC8FF]/20 shadow-[0_0_50px_rgba(28,200,255,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
                  <video
                    src={service.videoSection.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-[#67E8F9]/60 mb-8 max-w-lg mx-auto">
            Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en 24 horas.
          </p>
          <Link
            href="/contacto"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold text-lg hover:shadow-[0_0_35px_rgba(28,200,255,0.4)] transition-all duration-300`}
          >
            Solicitar cotización
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
