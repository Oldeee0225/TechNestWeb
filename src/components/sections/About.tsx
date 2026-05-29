"use client"

import { useEffect, useRef, useState } from "react"
import GlassCard from "@/components/ui/GlassCard"

export default function About({ dict }: { dict?: any }) {
  const logoRef = useRef<HTMLImageElement>(null)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const el = logoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowLogo(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071326]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1CC8FF]/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-white">{dict?.title_1 || "¿Por qué "}</span>
            <span className="gradient-text">{dict?.title_2 || "TechNest"}</span>
            <span className="text-white">{dict?.title_3 || "?"}</span>
          </h2>
          <p className="text-[#67E8F9]/60 max-w-2xl mx-auto text-lg">
            {dict?.subtitle || "No somos solo desarrolladores, somos artesanos digitales comprometidos con la excelencia y resultados tangibles."}
          </p>
          <div className="flex justify-center mt-8">
            <img ref={logoRef} src="/assets/LogoForm.png" alt="Logo Form" className={`w-48 h-auto ${showLogo ? "animate-slide-in-left" : "opacity-0"}`} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(dict?.cards || [
            {
              title: "Enfoque Humano",
              desc: "Cada proyecto comienza entendiendo tu visión, tus desafíos y tus objetivos de negocio."
            },
            {
              title: "Calidad Premium",
              desc: "Escribimos código limpio, escalable y bien documentado que facilita el mantenimiento."
            },
            {
              title: "Comunicación Clara",
              desc: "Updates semanales, documentación detallada y respuesta rápida a tus dudas."
            }
          ]).map((item: any, i: number) => {
            const icons = [
              <svg key={0} className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
              <svg key={1} className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
              <svg key={2} className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            ]
            return (
            <GlassCard key={i} className="text-center group hover:glow-cyan transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#1CC8FF]/20 to-[#3B82F6]/20 text-[#1CC8FF] mb-6 group-hover:scale-110 transition-transform">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[#67E8F9]/60">{item.desc || item.description}</p>
            </GlassCard>
          )})}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {dict?.more_title || "TechNest es más que una agencia"}
            </h3>
            <p className="text-[#67E8F9]/60 mb-4">
              {dict?.more_p1 || "Somos tu partner tecnológico. Nacimos en 2021 con una visión clara: democratizar el acceso a soluciones digitales de alta calidad para empresas y emprendedores."}
            </p>
            <p className="text-[#67E8F9]/60">
              {dict?.more_p2 || "Nuestro equipo combina experiencia en desarrollo frontend y backend, diseño UX/UI y estrategia digital para crear productos que no solo lucen increíbles, sino que generan resultados reales."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(dict?.stats || [
              { val: "3+", label: "Años de experiencia" },
              { val: "100%", label: "Proyectos entregados" },
              { val: "98%", label: "Satisfacción" },
              { val: "24/7", label: "Soporte disponible" }
            ]).map((stat: any, i: number) => (
              <GlassCard key={i} className="text-center hover:glow-cyan">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent mb-2">{stat.val}</div>
                <div className="text-[#67E8F9]/60">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
