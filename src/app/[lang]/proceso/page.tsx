import Process from "@/components/sections/Process"
import CTA from "@/components/sections/CTA"
import { getDictionary } from "@/lib/dictionaries"

export default async function ProcessPage({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
  const dict = await getDictionary(lang)
  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16">
      <Process dict={dict} />
      <CTA dict={dict.cta} lang={lang} />
    </div>
  )
}
