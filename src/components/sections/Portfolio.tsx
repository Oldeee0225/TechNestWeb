import GlassCard from "@/components/ui/GlassCard"
import Button from "@/components/ui/Button"
import Image from "next/image"

const projects = [
  {
    title: "Electric APP",
    category: "Electronica",
    description: "Aplicacion para la administracion local de una tienda de electronica con sistema de facturacion y control de inventario.",
    tags: ["Swift", "C#", "Firebase"],
    color: "from-[#22D3EE] to-[#1CC8FF]",
    image: "/assets/Proyectos/ElectricApp.png",
  },
  {
    title: "Restaurant System",
    category: "SaaS",
    description: "Sistema de gestión de restaurante con sistema de pedidos, facturación y control de inventario.",
    tags: ["React", "Socket.io", "MongoDB"],
    color: "from-[#3B82F6] to-[#67E8F9]",
    image: "/assets/Proyectos/RestaurantSystem.png",
  },
  {
    title: "HealthTrack",
    category: "Healthcare",
    description: "App móvil para seguimiento de salud con integración de wearables y reportes médicos.",
    tags: ["React Native", "HealthKit", "Firebase"],
    color: "from-[#1CC8FF] to-[#22D3EE]",
    image: "/assets/Proyectos/Healtrack.png",
  },
  {
    title: "CryptoWatch",
    category: "Fintech",
    description: "Dashboard de monitoreo de criptomonedas con alertas personalizadas y portafolio digital.",
    tags: ["Next.js", "Web3", "D3.js"],
    color: "from-[#67E8F9] to-[#3B82F6]",
    image: "/assets/Proyectos/Crypto.png",
  },
  {
    title: "AI Support Hub",
    category: "Artificial Intelligence",
    description: "Plataforma inteligente de atención al cliente con chatbots IA, automatización de tickets y análisis conversacional en tiempo real.",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    color: "from-[#22D3EE] to-[#3B82F6]",
    image: "/assets/Proyectos/IASupport.png",
  },
  {
    title: "LogiFlow",
    category: "Logistics",
    description: "Sistema de logística y rastreo en tiempo real para gestión de entregas, monitoreo GPS y optimización de rutas.",
    tags: ["React", "Node.js", "Socket.io"],
    color: "from-[#1CC8FF] to-[#67E8F9]",
    image: "/assets/Proyectos/LogiFlow.png",
  },
]

export default function Portfolio({ dict }: { dict?: any }) {
  const currentProjects = dict?.portfolio?.projects || projects

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071326]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1CC8FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-white">{dict?.portfolio?.title1 || "Nuestros "}</span>
            <span className="gradient-text">{dict?.portfolio?.title2 || "Proyectos"}</span>
          </h2>
          <p className="text-[#67E8F9]/60 max-w-2xl mx-auto text-lg">
            {dict?.portfolio?.subtitle || "Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a empresas a crecer. Estos son algunos de los proyectos desarrollados en technest:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project: any, i: number) => {
            const originalProject = projects[i] || projects[0]
            return (
            <GlassCard
              key={i}
              className="group cursor-pointer overflow-hidden p-0 hover:glow-blue transition-all duration-500"
            >
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60 z-10" />
                <Image
                  src={originalProject.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#1CC8FF] font-medium mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#1CC8FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#67E8F9]/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {originalProject.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full bg-[#1CC8FF]/10 text-[#67E8F9] border border-[#1CC8FF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          )})}
        </div>
      </div>
    </section>
  )
}
