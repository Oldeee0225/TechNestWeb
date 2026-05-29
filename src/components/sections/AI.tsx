"use client"

import { Suspense, useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Cloud, Line, Trail } from "@react-three/drei"
import { extend, useThree } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function CinematicCamera() {
  useFrame((state) => {
    // Cámara flotante lenta y cinematográfica
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.2
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

function MovingNode({ curve, speed, color, offset = 0 }: { curve: THREE.CatmullRomCurve3, speed: number, color: string, offset?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const t = ((state.clock.elapsedTime * speed) + offset) % 1
      const point = curve.getPoint(t)
      meshRef.current.position.copy(point)
    }
  })

  return (
    <Trail width={1.5} length={15} color={color} attenuation={(t) => t * t}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </Trail>
  )
}

function ElegantOrbits() {
  const orbits = useMemo(() => {
    const arr = []
    const ringCount = 8
    for (let i = 0; i < ringCount; i++) {
      const points = []
      const radius = 1.4 + (i * 0.15)

      // Circulo perfecto sin distorsión para un look estructurado y premium
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0))
      }

      const curve = new THREE.CatmullRomCurve3(points, true)

      // Distribución esférica elegante (Fibonacci sphere algorithm style)
      const phi = Math.acos(-1 + (2 * i) / ringCount)
      const theta = Math.sqrt(ringCount * Math.PI) * phi

      arr.push({
        curve,
        points: curve.getPoints(64),
        color: i % 2 === 0 ? "#ff9900" : "#ff5500",
        speed: 0.05 + (i * 0.01),
        rotation: [phi, theta, 0] as [number, number, number]
      })
    }
    return arr
  }, [])

  return (
    <>
      {orbits.map((orbit, i) => (
        <group key={i} rotation={orbit.rotation}>
          <Line
            points={orbit.points}
            color={orbit.color}
            lineWidth={1}
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
          />
          <MovingNode curve={orbit.curve} speed={orbit.speed} color={orbit.color} />
          <MovingNode curve={orbit.curve} speed={orbit.speed} color="#ffffff" offset={0.5} />
        </group>
      ))}
    </>
  )
}

function ElegantCore() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.005
      groupRef.current.rotation.z -= 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Plasma Central con Additive Blending */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ff7700"
          emissive="#ff5500"
          emissiveIntensity={5}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>

      {/* Corazón Puro Blanco */}
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>

      {/* Grid de Datos Alámbrico Fino */}
      <mesh>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={1}
          wireframe
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#ff5500", 5, 20]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ff9900" />

      <Suspense fallback={null}>
        <ElegantCore />
        <ElegantOrbits />

        {/* Humo volumétrico para darle profundidad a la luz */}
        {/* @ts-ignore - Cloud props mismatch with current drei version */}
        <Cloud opacity={0.15} speed={0.2} width={10} depth={2} segments={20} color="#ff3300" position={[0, 0, -2]} />

        {/* BLOOM CRÍTICO */}
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Suspense>

      <CinematicCamera />
    </>
  )
}

export default function AI({ dict }: { dict?: any }) {
  const aiDict = dict?.ai || {
    badge: "TechNest Generation",
    title1: "Artificial",
    title2: "Intelligence",
    subtitle: "Potenciamos tu negocio con soluciones de IA de última generación. Desde chatbots inteligentes hasta análisis predictivo avanzado.",
    stats: [
      { value: "95%", label: "Precisión" },
      { value: "50ms", label: "Latencia" },
      { value: "24/7", label: "Disponibilidad" },
      { value: "99.9%", label: "Uptime" },
    ],
    features: [
      { title: "Machine Learning", description: "Modelos predictivos personalizados para optimizar tus procesos de negocio en tiempo real." },
      { title: "Natural Language", description: "Procesamiento de lenguaje natural para chatbots y asistentes virtuales hiper-realistas." },
      { title: "Computer Vision", description: "Análisis de imágenes y video con redes neuronales de detección avanzada y baja latencia." }
    ]
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1CC8FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-[#1CC8FF]/30">
              <div className="w-2 h-2 bg-[#1CC8FF] rounded-full animate-pulse shadow-[0_0_8px_#1CC8FF]" />
              <span className="text-[#67E8F9] text-sm font-medium tracking-wide">{aiDict.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">{aiDict.title1}</span>
              <br />
              <span className="bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-md">{aiDict.title2}</span>
            </h1>

            <p className="text-[#67E8F9]/70 text-lg mb-8 max-w-lg leading-relaxed">
              {aiDict.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {aiDict.stats.map((stat: any, i: number) => (
                <div key={i} className="glass rounded-xl p-4 text-center border border-[#1CC8FF]/10 hover:border-[#1CC8FF]/30 transition-colors">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[#67E8F9]/60 text-sm mt-1 uppercase tracking-wider text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[400px] lg:h-[500px]">
            {mounted && (
              <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Scene />
              </Canvas>
            )}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiDict.features.map((item: any, i: number) => {
            const icons = [
              (
                <svg key="1" className="w-8 h-8 drop-shadow-[0_0_8px_rgba(28,200,255,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              (
                <svg key="2" className="w-8 h-8 drop-shadow-[0_0_8px_rgba(28,200,255,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              ),
              (
                <svg key="3" className="w-8 h-8 drop-shadow-[0_0_8px_rgba(28,200,255,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )
            ]
            return (
            <div key={i} className="glass rounded-2xl p-6 group hover:shadow-[0_0_30px_rgba(28,200,255,0.15)] hover:border-[#1CC8FF]/30 transition-all duration-300 border border-[#1CC8FF]/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1CC8FF]/20 to-[#3B82F6]/20 flex items-center justify-center text-[#1CC8FF] mb-4 group-hover:scale-110 transition-transform border border-[#1CC8FF]/20 group-hover:border-[#1CC8FF]/50">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-[#67E8F9]/60 leading-relaxed">{item.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
