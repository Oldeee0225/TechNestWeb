import GlassCard from "@/components/ui/GlassCard"
import Button from "@/components/ui/Button"
import { getDictionary } from "@/lib/dictionaries"
import ContactForm from "@/components/ui/ContactForm"

export default async function ContactPage({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
  const dict = await getDictionary(lang)
  const contactDict = dict?.contacto || {
    title1: "Inicia tu ",
    title2: "Proyecto",
    subtitle: "Cuéntanos sobre tu idea. Nuestro equipo te contactará en menos de 24 horas.",
    form: {
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      company: "Empresa / Proyecto",
      message: "Cuéntanos sobre tu proyecto...",
      btn: "Enviar Mensaje",
      submitting: "Enviando..."
    },
    whatsapp: {
      title: "Chat Directo",
      desc: "¿Prefieres una respuesta inmediata? Escríbenos por WhatsApp y te atenderemos al instante.",
      btn: "Abrir WhatsApp"
    }
  }

  return (
    <div className="min-h-screen bg-[#071326] pt-32 pb-24 relative overflow-hidden">
      {/* Fondos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1CC8FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{contactDict.title1}</span>
            <span className="bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent">{contactDict.title2}</span>
          </h1>
          <p className="text-[#67E8F9]/60 max-w-2xl mx-auto text-lg">
            {contactDict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Formulario */}
          <GlassCard className="p-8">
            <ContactForm dict={contactDict.form} />
          </GlassCard>

          {/* Información de Contacto Alternativa */}
          <div className="space-y-6">
            <GlassCard className="p-8 hover:glow-cyan transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{contactDict.whatsapp.title}</h3>
              <p className="text-[#67E8F9]/60 mb-6">
                {contactDict.whatsapp.desc}
              </p>
              <a
                href="https://wa.me/50763224629?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full justify-center border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                  {contactDict.whatsapp.btn}
                </Button>
              </a>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-6">Información Directa</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1CC8FF]/10 flex items-center justify-center text-[#1CC8FF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#67E8F9]/60">Email</div>
                    <div className="text-white font-medium">contact@technest507.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1CC8FF]/10 flex items-center justify-center text-[#1CC8FF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#67E8F9]/60">Teléfono</div>
                    <div className="text-white font-medium">+507 6322-4629</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
