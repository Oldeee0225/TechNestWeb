import GlassCard from "@/components/ui/GlassCard"

export default function PoliciesPage({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
  const isEn = lang === 'en';
  return (
    <div className="min-h-screen bg-[#071326] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1CC8FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{isEn ? "Legal " : "Política "}</span>
            <span className="bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] bg-clip-text text-transparent">{isEn ? "Policy" : "Legal"}</span>
          </h1>
          <p className="text-[#67E8F9]/60 text-lg">
            {isEn ? "Privacy Policy and Terms of Use" : "Política de Privacidad y Términos de Uso"}
          </p>
          <p className="text-[#1CC8FF]/80 text-sm mt-4 font-medium">
            {isEn ? "Last updated: May 2026" : "Última actualización: Mayo 2026"}
          </p>
        </div>

        <GlassCard className="p-8 md:p-12 prose prose-invert prose-p:text-[#67E8F9]/70 prose-headings:text-white prose-li:text-[#67E8F9]/70 max-w-none">
          <p className="lead text-lg text-white/80">
            {isEn 
              ? "Welcome to TechNesst. By accessing and using our services, website, or digital platforms, you accept the following terms and conditions. We recommend reading this Legal Policy carefully before using our services." 
              : "Bienvenido a TechNesst. Al acceder y utilizar nuestros servicios, sitio web o plataformas digitales, aceptas los siguientes términos y condiciones. Te recomendamos leer cuidadosamente esta Política Legal antes de utilizar nuestros servicios."}
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#1CC8FF]/20 pb-4">{isEn ? "1. General Information" : "1. Información General"}</h2>
          <p>
            {isEn 
              ? "TechNesst is a company focused on software development, digital solutions, automation, artificial intelligence, and technologies aimed at businesses and digital projects." 
              : "TechNesst es una empresa enfocada en el desarrollo de software, soluciones digitales, automatización, inteligencia artificial y tecnologías orientadas a empresas y proyectos digitales."}
          </p>
          <p>{isEn ? "Our services include, but are not limited to:" : "Nuestros servicios incluyen, pero no se limitan a:"}</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            {isEn ? (
              <>
                <li>Custom software development</li>
                <li>Web and mobile applications</li>
                <li>Artificial intelligence-based solutions</li>
                <li>Process automation</li>
                <li>APIs and enterprise systems</li>
                <li>Technology consulting</li>
              </>
            ) : (
              <>
                <li>Desarrollo de software personalizado</li>
                <li>Aplicaciones web y móviles</li>
                <li>Soluciones basadas en inteligencia artificial</li>
                <li>Automatización de procesos</li>
                <li>APIs y sistemas empresariales</li>
                <li>Consultoría tecnológica</li>
              </>
            )}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#1CC8FF]/20 pb-4">{isEn ? "2. Privacy Policy" : "2. Política de Privacidad"}</h2>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1CC8FF]">{isEn ? "Information Collection" : "Recolección de Información"}</h3>
          <p>{isEn ? "We may collect information provided directly by the user, including:" : "Podemos recopilar información proporcionada directamente por el usuario, incluyendo:"}</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>{isEn ? "Name" : "Nombre"}</li>
            <li>{isEn ? "Email" : "Correo electrónico"}</li>
            <li>{isEn ? "Phone number" : "Número telefónico"}</li>
            <li>{isEn ? "Business information" : "Información empresarial"}</li>
            <li>{isEn ? "Data sent through contact forms" : "Datos enviados mediante formularios de contacto"}</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1CC8FF]">{isEn ? "Use of Information" : "Uso de la Información"}</h3>
          <p>{isEn ? "The collected information is used to:" : "La información recopilada se utiliza para:"}</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>{isEn ? "Provide support and assistance" : "Brindar soporte y atención"}</li>
            <li>{isEn ? "Improve our services" : "Mejorar nuestros servicios"}</li>
            <li>{isEn ? "Contact potential clients" : "Contactar clientes potenciales"}</li>
            <li>{isEn ? "Develop custom solutions" : "Desarrollar soluciones personalizadas"}</li>
            <li>{isEn ? "Optimize user experience" : "Optimizar la experiencia del usuario"}</li>
            <li>{isEn ? "Analyze performance and security" : "Analizar rendimiento y seguridad"}</li>
          </ul>
          <p className="font-semibold text-white bg-[#1CC8FF]/10 p-4 rounded-lg border border-[#1CC8FF]/20 my-6">
            {isEn ? "TechNesst does not sell personal information to third parties." : "TechNesst no vende información personal a terceros."}
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#1CC8FF]/20 pb-4">{isEn ? "3. Terms of Use" : "3. Términos de Uso"}</h2>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1CC8FF]">{isEn ? "Use of the Site" : "Uso del Sitio"}</h3>
          <p>{isEn ? "The user agrees to use this site solely for lawful and legitimate purposes." : "El usuario acepta utilizar este sitio únicamente con fines legales y legítimos."}</p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1CC8FF]">{isEn ? "Intellectual Property" : "Propiedad Intelectual"}</h3>
          <p>{isEn ? "All content present on TechNesst, including logos, designs, code, graphics, texts, interfaces, animations, trademarks, and visual elements, is the property of TechNesst or its respective owners and is protected by intellectual property laws." : "Todo el contenido presente en TechNesst, incluyendo logos, diseños, código, gráficos, textos, interfaces, animaciones, marcas y elementos visuales, es propiedad de TechNesst o de sus respectivos propietarios y está protegido por leyes de propiedad intelectual."}</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#1CC8FF]/20 pb-4">{isEn ? "4. Acceptance" : "7. Aceptación"}</h2>
          <p className="text-lg font-medium text-white mb-8">
            {isEn ? "By using this website or our services, you accept this Privacy Policy and Terms of Use in their entirety." : "Al utilizar este sitio web o nuestros servicios, aceptas esta Política de Privacidad y Términos de Uso en su totalidad."}
          </p>
        </GlassCard>
      </div>
    </div>
  )
}
