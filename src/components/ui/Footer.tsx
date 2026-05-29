import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export default function Footer({ dict, lang }: { dict?: any; lang?: string }) {
  const currentLang = lang || 'es'
  return (
    <footer className="bg-[#020617] border-t border-[#1CC8FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${currentLang}`} className="flex items-center gap-3">
              <Image 
                src="/assets/LogoForm.png" 
                alt="TechNest Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent leading-tight">
                  TechNest
                </span>
                <span className="text-xs text-white/60 font-normal leading-tight">Software Development</span>
              </div>
            </Link>
            <p className="mt-4 text-[#67E8F9]/60 max-w-md">
              {dict?.subtitle || "Transformamos ideas en experiencias digitales extraordinarias. Especialistas en desarrollo web, diseño UI/UX y soluciones tecnológicas innovadoras."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{dict?.services || "Servicios"}</h4>
            <ul className="space-y-2">
              {(dict?.links || [
                { name: "Desarrollo Web Premium", url: "/servicios/desarrollo-web" },
                { name: "Inteligencia Artificial", url: "/servicios/inteligencia-artificial" },
                { name: "Automatización Empresarial", url: "/servicios/automatizacion" }
              ]).map((link: any, i: number) => (
                <li key={i}>
                  <Link href={`/${currentLang}${link.url}`} className="text-[#67E8F9]/60 hover:text-[#1CC8FF] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{dict?.contact || "Contacto"}</h4>
            <ul className="space-y-2 mb-8">
              <li className="text-[#67E8F9]/60">contact@technest507.com</li>
              <li className="text-[#67E8F9]/60">+507 6322-4629</li>
              <li className="text-[#67E8F9]/60">Panamá City</li>
            </ul>

            <h4 className="font-semibold text-white mb-4">{dict?.socials || "Redes Sociales"}</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/technestd?igsh=MXJtNHl6c3RqcDI4dw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#1CC8FF]/10 flex items-center justify-center text-[#1CC8FF] hover:bg-[#1CC8FF]/20 hover:scale-110 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@technest507?_r=1&_t=ZS-96lrbAb1LjG" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#1CC8FF]/10 flex items-center justify-center text-[#1CC8FF] hover:bg-[#1CC8FF]/20 hover:scale-110 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.15 1.53.81 3.01 1.95 4.04 1.14 1.02 2.67 1.63 4.21 1.74v4.06c-1.42-.05-2.81-.5-4-1.3v5.8c-.02 2.37-.9 4.67-2.45 6.43-1.54 1.75-3.72 2.8-6.05 2.95-2.33.14-4.66-.56-6.47-1.94-1.81-1.38-3.05-3.34-3.48-5.5-.42-2.17.02-4.4 1.25-6.22 1.22-1.83 3.03-3.15 5.12-3.75 2.08-.6 4.34-.43 6.31.48v4.2c-1.25-.56-2.65-.63-3.95-.2-1.3.42-2.4 1.34-3.04 2.54-.64 1.2-.7 2.6-.17 3.86.53 1.25 1.55 2.22 2.83 2.67 1.28.46 2.68.28 3.84-.48 1.16-.76 1.93-2.02 2.1-3.4.02-.12.02-.25.02-.37V.02h-1.92z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1CC8FF]/10 flex flex-col md:flex-row items-center justify-between text-[#67E8F9]/40 text-sm">
          <p>&copy; {new Date().getFullYear()} {dict?.rights || "TechNest. Todos los derechos reservados."}</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href={`/${currentLang}/politicas`} className="hover:text-[#1CC8FF] transition-colors">
              {dict?.legal || "Política Legal y Privacidad"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
