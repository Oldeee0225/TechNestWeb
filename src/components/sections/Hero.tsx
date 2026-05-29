"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Button from "@/components/ui/Button"

export default function Hero({ dict }: { dict?: any }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1CC8FF]/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#22D3EE]/5 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1CC8FF08_1px,transparent_1px),linear-gradient(to_bottom,#1CC8FF08_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1CC8FF]/20 to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass">
            <span className="w-2 h-2 bg-[#1CC8FF] rounded-full animate-pulse" />
            <span className="text-[#67E8F9] text-sm">{dict?.badge || "Transformando el futuro digital"}</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">{dict?.title_1 || "Transformamos "}</span>
          <span className="gradient-text">{dict?.title_2 || "Ideas"}</span>
          <br />
          <span className="text-white">{dict?.title_3 || "en "}</span>
          <span className="gradient-text">{dict?.title_4 || "Realidad Digital"}</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#67E8F9]/60 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {dict?.description || "Somos un estudio de desarrollo web y diseño digital. Creamos experiencias que conectan marcas con personas a través de tecnología e innovación."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link href="/contacto">
            <Button variant="primary" size="lg" className="glow-cyan">
              {dict?.cta_primary || "Contactar Ahora"}
            </Button>
          </Link>
          <Link href="/servicios">
            <Button variant="outline" size="lg" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10">
              {dict?.cta_secondary || "Ver Servicios"}
            </Button>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { stat: "50+", label: "Proyectos" },
            { stat: "3+", label: "Años" },
            { stat: "30+", label: "Clientes" },
            { stat: "100%", label: "Compromiso" },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{item.stat}</div>
              <div className="text-[#67E8F9]/60 text-sm mt-2 group-hover:text-[#1CC8FF] transition-colors">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-[#3B82F6]/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-[#1CC8FF] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
