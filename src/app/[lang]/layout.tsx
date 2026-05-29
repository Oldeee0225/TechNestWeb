import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

const inter = Inter({ subsets: ["latin"] })

import { getDictionary } from "@/lib/dictionaries"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technest507.com"),
  title: "TechNest - Transformamos Ideas en Realidad Digital",
  description: "Estudio de desarrollo web y diseño digital que transforma tus ideas en experiencias digitales extraordinarias.",
  openGraph: {
    title: "TechNest - Transformamos Ideas en Realidad Digital",
    description: "Estudio de desarrollo web y diseño digital que transforma tus ideas en experiencias digitales extraordinarias.",
    type: "website",
    images: [
      {
        url: "/assets/OpenGraph.jpeg",
        width: 1200,
        height: 630,
        alt: "TechNest Preview",
      },
    ],
  },
}

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params: { lang }
}: Readonly<{
  children: React.ReactNode
  params: { lang: 'en' | 'es' }
}>) {
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header dict={dict} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict.footer} lang={lang} />
      </body>
    </html>
  )
}
