import Button from "@/components/ui/Button"
import Link from "next/link"

export default function CTA({ dict, lang }: { dict?: any; lang?: string }) {
  const currentLang = lang || 'es'
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1CC8FF]/20 to-[#3B82F6]/20 border border-[#1CC8FF]/30 p-12 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHYtNGgydi0ySDI4djJoLTJ2NGgydjRoLTR2NGgydjJoLTJ2NGgydjRoLTR2NGgydjJoLTJWNnogTTM2IDI2aC0ydi00aDJ2LTJoLTR2LTRoMnYtMkgxOHYySC0xOHYtNGgydi0yaC00di00aDJ2LTJIMTJ2MmgtMnY0aDJ2NGgtNHY0aDJ2NGgtNHY0aDJ2MmgtMnY0aDJ2NGgtNHY0aDJ2MmgtMnY0aDJ2NGgtNHY0aDJ2MmgtMnY0aDJ2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              {dict?.title || "¿Listo para transformar tu idea?"}
            </h2>
            <p className="text-[#67E8F9]/80 text-lg mb-8 max-w-xl mx-auto">
              {dict?.desc || "Agenda una llamada gratuita y descubre cómo podemos ayudarte a construir tu producto digital soñado."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${currentLang}/contacto`}>
                <Button variant="primary" size="lg" className="glow-cyan">
                  {dict?.btn1 || "Contáctanos"}
                </Button>
              </Link>
              <Link href={`/${currentLang}/servicios`}>
                <Button variant="outline" size="lg" className="border-[#1CC8FF] text-[#1CC8FF] hover:bg-[#1CC8FF]/10">
                  {dict?.btn2 || "Ver Servicios"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
