"use client"

import GlassCard from "@/components/ui/GlassCard"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web Premium",
    features: [
      "Landing pages modernas",
      "Sitios corporativos",
      "Dashboards administrativos",
      "Plataformas SaaS",
      "Portales de clientes",
      "Paneles en tiempo real",
      "Inteligencia Artificial",
    ],
    gradient: "from-[#1CC8FF] to-[#3B82F6]",
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    features: [
      "Chatbots IA personalizados",
      "Integración con OpenAI",
      "Asistentes virtuales",
      "Automatización con IA",
      "Generación de contenido",
      "Análisis inteligente de datos",
      "Sistemas RAG",
      "IA para atención al cliente",
    ],
    gradient: "from-[#22D3EE] to-[#67E8F9]",
  },
  {
    slug: "automatizacion",
    title: "Automatización Empresarial",
    features: [
      "Automatización de WhatsApp",
      "Flujos de trabajo",
      "Integración entre plataformas",
      "Bots empresariales",
      "CRM personalizados",
      "Automatización de correos",
      "Facturación automática",
    ],
    gradient: "from-[#3B82F6] to-[#1CC8FF]",
  },
  {
    slug: "sistemas",
    title: "Sistemas Empresariales",
    features: [
      "ERP personalizados",
      "Inventarios",
      "Sistemas de ventas",
      "POS",
      "Gestión de empleados",
      "Reservas",
      "Facturación",
      "Logística",
    ],
    gradient: "from-[#67E8F9] to-[#22D3EE]",
  },
  {
    slug: "apps-moviles",
    title: "Apps Móviles",
    features: [
      "React Native",
      "Flutter",
      "Apps internas",
      "Apps de clientes",
      "Delivery",
      "Tracking",
      "IA móvil",
    ],
    gradient: "from-[#8B5CF6] to-[#6366F1]",
  },
  {
    slug: "cloud-backend",
    title: "Cloud & Backend",
    features: [
      "APIs REST",
      "Arquitectura backend",
      "Microservicios",
      "Bases de datos",
      "DevOps",
      "Docker",
      "AWS / Vercel",
      "Escalabilidad",
    ],
    gradient: "from-[#1CC8FF] to-[#3B82F6]",
  },
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad Ligera",
    features: [
      "Auditorías simples",
      "Hardening",
      "Protección de APIs",
      "Autenticación",
    ],
    gradient: "from-[#EF4444] to-[#F59E0B]",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Services({ dict }: { dict?: any }) {
  const currentCategories = dict?.services?.items || categories
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#1CC8FF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-white">{dict?.services?.title1 || "Nuestros "}</span>
            <span className="gradient-text">{dict?.services?.title2 || "Servicios"}</span>
          </h2>
          <p className="text-[#67E8F9]/60 max-w-2xl mx-auto text-lg">
            {dict?.services?.subtitle || "Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel."}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{
            ...(inView
              ? {
                opacity: 1,
                transform: "translateY(0)",
                transition: "all 0.8s ease-out",
              }
              : {
                opacity: 0,
                transform: "translateY(30px)",
              }),
          }}
        >
          {categories.map((cat, i) => {
            const translation = currentCategories[i] || cat
            return (
            <GlassCard
              key={cat.slug}
              className="group hover:glow-cyan transition-all duration-300 flex flex-col"
              style={{
                ...(inView
                  ? {
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: `all 0.6s ease-out ${i * 0.08}s`,
                  }
                  : {
                    opacity: 0,
                    transform: "translateY(40px)",
                  }),
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(28,200,255,0.2)]`}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#1CC8FF] transition-colors">
                    {translation.title || cat.title}
                  </h3>
                  <span className="text-xs text-[#1CC8FF]/60 italic">{translation.desc}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {cat.features.map((f: string, j: number) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs rounded-full bg-[#1CC8FF]/10 text-[#67E8F9] border border-[#1CC8FF]/20"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={`/servicios/${cat.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(28,200,255,0.4)] transition-all duration-300 group/btn"
                >
                  Ver detalle
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </GlassCard>
          )})}
        </div>

        {/* About TechNest block */}
        <div 
          className="mt-32 relative glass rounded-3xl p-8 md:p-12 lg:p-16 border border-[#1CC8FF]/20 overflow-hidden"
          style={{
            ...(inView
              ? { opacity: 1, transform: "translateY(0)", transition: "all 0.8s ease-out 0.6s" }
              : { opacity: 0, transform: "translateY(30px)" }),
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CC8FF]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 text-[#67E8F9]/80 text-lg leading-relaxed">
              <p>
                <strong className="text-white">{dict?.services?.about?.p1_strong || "En TechNest"}</strong>{dict?.services?.about?.p1_rest || " desarrollamos soluciones tecnológicas modernas diseñadas para ayudar a empresas, emprendedores y marcas a crecer en un entorno digital cada vez más competitivo. Nos especializamos en el desarrollo de software personalizado, aplicaciones web, automatización de procesos, inteligencia artificial y experiencias digitales de alto impacto visual y funcional."}
              </p>
              <p>
                {dict?.services?.about?.p2 || "Nuestro objetivo no es solo crear software, sino construir herramientas inteligentes que impulsen resultados reales. Cada proyecto es desarrollado con un enfoque estratégico, combinando diseño moderno, rendimiento, escalabilidad y tecnologías de última generación para garantizar productos sólidos, rápidos y preparados para el futuro."}
              </p>
              <p>
                {dict?.services?.about?.p3 || "Trabajamos en la creación de plataformas web avanzadas, sistemas empresariales, dashboards administrativos, APIs, automatizaciones, soluciones impulsadas por IA y experiencias interactivas que permiten optimizar procesos, mejorar la productividad y ofrecer una experiencia superior a los usuarios."}
              </p>
              <p>
                {dict?.services?.about?.p4 || "En TechNest creemos que la calidad está en cada detalle. Por eso cuidamos desde la arquitectura del sistema hasta la experiencia visual, utilizando tecnologías modernas y estándares profesionales para asegurar seguridad, estabilidad y rendimiento en cada solución que entregamos."}
              </p>
              <p>
                {dict?.services?.about?.p5 || "Elegir TechNest significa trabajar con un equipo enfocado en la innovación, el compromiso y la excelencia tecnológica. Nos apasiona transformar ideas en productos digitales reales, funcionales y visualmente impactantes. Más que un proveedor, buscamos convertirnos en un aliado tecnológico capaz de acompañar el crecimiento de cada cliente a largo plazo."}
              </p>
              <p className="text-xl font-bold text-white pt-4">
                {dict?.services?.about?.p6 || "Creamos tecnología moderna para empresas que quieren evolucionar, automatizar y destacar en la nueva era digital."}
              </p>
            </div>
            
            <div className="relative shrink-0 flex items-center justify-center lg:w-1/3">
              <div className="absolute inset-0 bg-[#1CC8FF] blur-[80px] opacity-30 rounded-full scale-150 animate-pulse-glow" />
              <Image
                src="/assets/LogoForm.png"
                alt="TechNest Logo"
                width={320}
                height={320}
                className="object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_50px_rgba(28,200,255,0.6)]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
