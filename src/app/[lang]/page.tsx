import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import TechStack from "@/components/sections/TechStack"
import TechMarquee from "@/components/sections/TechMarquee"
import { getDictionary } from "@/lib/dictionaries"

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
  const dict = await getDictionary(lang)
  
  return (
    <>
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <TechStack dict={dict.techstack} />
      <TechMarquee />
    </>
  )
}
