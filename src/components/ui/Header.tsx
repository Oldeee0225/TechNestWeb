"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Button from "./Button"

export default function Header({ dict, lang }: { dict?: any; lang?: 'en' | 'es' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Safe default for lang if not provided
  const currentLang = lang || 'es'
  const toggleLang = currentLang === 'es' ? 'en' : 'es'
  
  // Build new path when switching language
  const switchPath = () => {
    if (!pathname) return `/${toggleLang}`
    const segments = pathname.split('/')
    segments[1] = toggleLang
    return segments.join('/')
  }

  const NAV_LINKS = [
    { name: currentLang === 'en' ? "Home" : "Inicio", path: `/${currentLang}` },
    { name: dict?.header?.servicios || "Servicios", path: `/${currentLang}/servicios` },
    { name: dict?.header?.portafolio || "Portafolio", path: `/${currentLang}/portafolio` },
    { name: dict?.header?.proceso || "Proceso", path: `/${currentLang}/proceso` },
    { name: dict?.header?.equipo || "Equipo", path: `/${currentLang}/equipo` },
    { name: dict?.header?.ia || "IA", path: `/${currentLang}/ia` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-[#050505]/80 backdrop-blur-lg border-b border-[#3B82F6]/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3" 
          : "bg-gradient-to-b from-[#050505]/80 to-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#1CC8FF] blur-[16px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
              <Image 
                src="/assets/LogoForm.png" 
                alt="TechNest Logo" 
                width={40} 
                height={40}
                className="object-contain relative z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-white leading-none tracking-wide drop-shadow-sm">
                TechNest
              </span>
              <span className="text-[0.65rem] font-bold bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent leading-tight tracking-[0.2em] uppercase mt-1">
                Software Development
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              // Ensure we handle trailing slashes robustly for isActive
              const isActive = pathname === link.path || pathname === `${link.path}/`
              return (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`relative group px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#67E8F9]/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] transition-transform duration-300 ease-out origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-[8px] blur-sm bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] opacity-40 rounded-full" />
                  )}
                </Link>
              )
            })}
            
            {/* Language Switcher */}
            <Link 
              href={switchPath()} 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1CC8FF]/30 transition-all duration-300"
              title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <span className="text-xl leading-none">{currentLang === 'es' ? '🇺🇸' : '🇪🇸'}</span>
            </Link>
            
            <Link href={`/${currentLang}/contacto`} className="ml-2">
              <Button variant="primary" size="sm" className="glow-cyan relative overflow-hidden group shadow-[0_0_15px_rgba(28,200,255,0.3)] hover:shadow-[0_0_25px_rgba(28,200,255,0.5)] transition-all duration-300">
                <span className="relative z-10 font-semibold tracking-wide">
                  {dict?.header?.contacto || "Contactar"}
                </span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Language Switcher Mobile */}
            <Link 
              href={switchPath()} 
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10"
            >
              <span className="text-lg leading-none">{currentLang === 'es' ? '🇺🇸' : '🇪🇸'}</span>
            </Link>
            <button
              className="relative w-10 h-10 flex items-center justify-center text-[#1CC8FF] rounded-xl hover:bg-[#3B82F6]/10 active:scale-95 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[5px] w-[22px]">
                <span className={`block h-[2px] w-full bg-current rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 translate-x-3" : ""}`} />
                <span className={`block h-[2px] w-full bg-current rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-6 px-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path || pathname === `${link.path}/`
              return (
                <Link 
                  key={link.path}
                  href={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-[#1CC8FF]/15 to-[#3B82F6]/15 text-white border border-[#1CC8FF]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                      : "text-[#67E8F9]/70 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link href={`/${currentLang}/contacto`} onClick={() => setIsOpen(false)} className="mt-4">
              <Button variant="primary" className="w-full justify-center glow-cyan shadow-[0_0_15px_rgba(28,200,255,0.3)] font-semibold py-3.5">
                {dict?.header?.contacto || "Contactar"}
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
