"use client"

import { useState } from "react"
import Image from "next/image"

export default function Process({ dict }: { dict?: any }) {
  const [activeStep, setActiveStep] = useState(1)

  const processSteps = dict?.process?.steps || [
    {
      id: 1,
      title: "Discovery",
      description: "Analizamos tu visión y definimos los objetivos clave.",
    },
    {
      id: 2,
      title: "Diseño",
      description: "Creamos prototipos interactivos y experiencias visuales únicas.",
    },
    {
      id: 3,
      title: "Desarrollo",
      description: "Construimos tu producto con código robusto y escalable.",
    },
    {
      id: 4,
      title: "Lanzamiento",
      description: "Desplegamos tu proyecto y aseguramos su éxito en producción.",
    },
  ]
  
  const images = [
    "/assets/Discovery.png",
    "/assets/Diseno.png",
    "/assets/Desarrollo.png",
    "/assets/Lanzamiento.png"
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Sección principal interactiva (Timeline + Imágenes PNG) */}
      <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
        {/* Fondos decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#1CC8FF] to-[#3B82F6] opacity-10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">

          {/* Columna Izquierda: Timeline Vertical */}
          <div className="lg:col-span-4 flex flex-col justify-center relative">
            <h1 className="text-4xl sm:text-5xl font-bold mb-12">
              <span className="text-white">{dict?.process?.title1 || "Nuestro "}</span>
              <span className="bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent">{dict?.process?.title2 || "Proceso"}</span>
            </h1>

            <div className="relative">
              {/* Línea vertical de conexión */}
              <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-[#1CC8FF]/10" />

              <div className="space-y-6">
                {processSteps.map((step: any, index: number) => {
                  const actualId = step.id || (index + 1)
                  const isActive = activeStep === actualId
                  return (
                    <div
                      key={actualId}
                      onClick={() => setActiveStep(actualId)}
                      className={`relative flex items-center gap-6 p-4 cursor-pointer rounded-2xl transition-all duration-300 ${isActive
                          ? "bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(28,200,255,0.05)]"
                          : "hover:bg-white/5"
                        }`}
                    >
                      {/* Número circular */}
                      <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-lg font-bold relative z-10 transition-all duration-500 ${isActive
                          ? "bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] text-white shadow-[0_0_20px_rgba(28,200,255,0.5)] scale-110"
                          : "bg-[#020617] border border-[#1CC8FF]/30 text-[#67E8F9] hover:border-[#1CC8FF]"
                        }`}>
                        {actualId}
                      </div>

                      {/* Texto */}
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#67E8F9]/50'}`}>
                          {step.title}
                        </h3>
                        {isActive && (
                          <p className="text-[#67E8F9]/70 text-sm mt-2 animate-fade-in">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Visor de Imágenes PNG */}
          <div className="lg:col-span-8 relative flex items-center justify-center min-h-[400px]">
            {processSteps.map((step: any, index: number) => {
              const actualId = step.id || (index + 1)
              const isActive = activeStep === actualId
              return (
                <div 
                  key={actualId}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
                    isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#0F172A]/40 backdrop-blur-sm shadow-2xl flex items-center justify-center p-4">
                    {/* Brillo sutil de fondo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1CC8FF]/10 to-transparent opacity-50" />
                    
                    <Image
                      src={images[index]}
                      alt={step.title}
                      fill
                      className="object-contain drop-shadow-xl"
                      priority={actualId === 1}
                    />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Separador sutil */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1CC8FF]/20 to-transparent my-12" />

      {/* Sección final con Video de Lanzamiento */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            {dict?.process?.videoText || "Te acompañamos en cada momento del desarrollo de tú proyecto."}
          </h2>
          <p className="text-xl text-[#67E8F9]/70 mt-6">
            {dict?.process?.videoSubtext || "Nuestra prioridad es garantizar calidad, rendimiento y un resultado final que supere tus expectativas."}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass border border-[#1CC8FF]/30 shadow-[0_0_80px_rgba(28,200,255,0.2)] p-2 group">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-30 z-10 pointer-events-none" />
              <video
                src="https://fslzdwaovjmeojugazrv.supabase.co/storage/v1/object/public/Videos/Lanzamiento.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
