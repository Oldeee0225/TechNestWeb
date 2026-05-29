import GlassCard from "@/components/ui/GlassCard"
import Image from "next/image"
import { Metadata } from "next"
import { getDictionary } from "@/lib/dictionaries"

export const metadata: Metadata = {
  title: "Nuestro Equipo | TechNest",
  description: "Conoce a los expertos detrás de TechNest. Un equipo apasionado por la tecnología, el diseño y la innovación digital.",
}

const teamMembers = [
  {
    id: 1,
    name: "Oldemar Gonzalez",
    role: "CEO & Lead Architect",
    image: "/assets/team1.png",
    bio: "Especialista en arquitectura cloud y estrategia tecnológica con más de 5 años de experiencia escalando negocios digitales.",
  },
  {
    id: 2,
    name: "Yarelis Yanguez",
    role: "Directora de UX/UI",
    image: "/assets/team2.png",
    bio: "Diseñadora obsesionada con la creación de experiencias de usuario intuitivas, accesibles y visualmente extraordinarias.",
  },
  {
    id: 3,
    name: "Alan Gonzalez",
    role: "Lead Full Stack Developer",
    image: "/assets/team3.png",
    bio: "Experto en ecosistemas React, Node.js y arquitecturas serverless. Apasionado por el código limpio y el rendimiento extremo.",
  },
  {
    id: 4,
    name: "José Rivera",
    role: "Especialista en Inteligencia Artificial",
    image: "/assets/team6.png",
    bio: "Ingeniera de machine learning dedicada a implementar modelos generativos y automatizaciones inteligentes para nuestros clientes.",
  },
  {
    id: 5,
    name: "Page Edgar",
    role: "Mobile Engineering Lead",
    image: "/assets/team4.png",
    bio: "Desarrollador experto en React Native y Swift. Creador de aplicaciones móviles fluidas, nativas y de alta conversión.",
  },
  {
    id: 6,
    name: "Fabian Castillo",
    role: "Project Manager",
    image: "/assets/team5.png",
    bio: "El puente entre nuestra tecnología y los objetivos del cliente. Asegura entregas ágiles, a tiempo y con calidad insuperable.",
  },
]

export default async function TeamPage({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
  const dict = await getDictionary(lang)
  const equipoDict = dict?.equipo || {
    badge: "Nuestro Talento",
    title1: "Conoce al ",
    title2: "Equipo",
    subtitle: "Somos un grupo de mentes creativas, ingenieros apasionados y estrategas digitales dedicados a convertir tus visiones más ambiciosas en realidades tecnológicas.",
    members: teamMembers
  }
  const currentMembers = equipoDict.members || teamMembers

  return (
    <main className="min-h-screen bg-[#020617] pt-32 pb-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#1CC8FF] to-[#3B82F6] opacity-5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1CC8FF]/10 to-[#3B82F6]/10 border border-[#1CC8FF]/20 text-[#1CC8FF] text-sm font-semibold mb-4">
            {equipoDict.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {equipoDict.title1}<span className="bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent">{equipoDict.title2}</span>
          </h1>
          <p className="text-[#67E8F9]/70 max-w-2xl mx-auto text-lg">
            {equipoDict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {currentMembers.map((member: any, i: number) => {
            const originalMember = teamMembers[i] || teamMembers[0]
            return (
              <GlassCard
                key={i}
                className="group hover:border-[#1CC8FF]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(28,200,255,0.15)] flex flex-col items-center text-center p-8"
              >
                <div className="relative w-full aspect-square max-w-[280px] mb-6 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-[#1CC8FF] to-[#3B82F6] group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-[#050505] relative">
                    {/* Imagen de la persona */}
                    {/* Descomenta la siguiente línea y reemplaza las imágenes en tu carpeta public/assets cuando las tengas listas */}
                    <img src={originalMember.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover z-10" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#1CC8FF] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent mb-4 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-[#67E8F9]/60 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </main>
  )
}
