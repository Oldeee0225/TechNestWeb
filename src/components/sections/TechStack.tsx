"use client"

import { useEffect, useRef, useState } from "react"
import GlassCard from "@/components/ui/GlassCard"
import { Globe, Database, Cpu, Cloud, Smartphone, Lock } from "lucide-react"

const defaultCategories = [
  { icon: Globe, gradient: "from-[#1CC8FF] to-[#3B82F6]" },
  { icon: Database, gradient: "from-[#10B981] to-[#059669]" },
  { icon: Cpu, gradient: "from-[#8B5CF6] to-[#6D28D9]" },
  { icon: Cloud, gradient: "from-[#0EA5E9] to-[#0284C7]" },
  { icon: Smartphone, gradient: "from-[#F43F5E] to-[#E11D48]" },
  { icon: Lock, gradient: "from-[#F59E0B] to-[#D97706]" },
]

export default function TechStack({ dict }: { dict?: any }) {
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

  const categories = dict?.categories || [
    { name: "Frontend", tools: "React, Next.js, Tailwind CSS" },
    { name: "Backend", tools: "Node.js, Python, PostgreSQL" },
    { name: "IA & Data", tools: "OpenAI, LangChain, PyTorch" },
    { name: "Cloud", tools: "AWS, Docker, Vercel" },
    { name: "Mobile", "tools": "React Native, Swift" },
    { name: "Seguridad", "tools": "OAuth, JWT, Cloudflare" }
  ]

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#1CC8FF]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20"
          style={{
            ...(inView
              ? { opacity: 1, transform: "translateY(0)", transition: "all 0.8s ease-out" }
              : { opacity: 0, transform: "translateY(30px)" }),
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1CC8FF]/10 border border-[#1CC8FF]/20 text-[#1CC8FF] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1CC8FF] animate-pulse" />
            {dict?.badge || "Nuestro Arsenal"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{dict?.title1 || "Tecnologías de "}</span>
            <span className="bg-gradient-to-r from-[#1CC8FF] to-[#8B5CF6] bg-clip-text text-transparent">
              {dict?.title2 || "Vanguardia"}
            </span>
          </h2>
          <p className="text-[#67E8F9]/60 max-w-2xl mx-auto text-lg">
            {dict?.subtitle || "Utilizamos las herramientas más avanzadas del mercado para construir soluciones robustas, escalables y preparadas para el futuro."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat: any, i: number) => {
            const Icon = defaultCategories[i]?.icon || Globe
            const gradient = defaultCategories[i]?.gradient || "from-[#1CC8FF] to-[#3B82F6]"

            return (
              <GlassCard
                key={i}
                className="p-8 group hover:glow-cyan transition-all duration-500"
                style={{
                  ...(inView
                    ? { opacity: 1, transform: "translateY(0)", transition: `all 0.6s ease-out ${i * 0.1}s` }
                    : { opacity: 0, transform: "translateY(40px)" }),
                }}
              >
                <div className="flex flex-col gap-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1CC8FF] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[#67E8F9]/60 text-sm leading-relaxed">
                      {cat.tools}
                    </p>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
