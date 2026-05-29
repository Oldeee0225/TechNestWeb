import Services from "@/components/sections/Services"
import CTA from "@/components/sections/CTA"
import { getDictionary } from "@/lib/dictionaries"

export default async function ServicesPage({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
  const dict = await getDictionary(lang)
  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16">
      <Services dict={dict} />
      <CTA dict={dict.cta} lang={lang} />
    </div>
  )
}
