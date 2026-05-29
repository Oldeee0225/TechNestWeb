"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

type ContactFormProps = {
  dict: {
    name: string
    email: string
    phone: string
    company: string
    message: string
    btn: string
    submitting: string
  }
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@technest507.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "Nuevo Lead - TechNest Company",
          _template: "table"
        })
      })

      if (response.ok) {
        setIsSent(true)
        setTimeout(() => {
          setIsSent(false)
          // Reset form if needed, but maybe keep showing success state or just reset after 5 seconds
        }, 5000)
        e.currentTarget.reset()
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-[pulse_1s_ease-in-out]">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-400 animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
        <p className="text-[#67E8F9]/60">
          Gracias por contactarnos. Nuestro equipo te responderá pronto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      <input type="hidden" name="_subject" value="Nuevo Lead - TechNest Company" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#67E8F9]/80 mb-2">
            {dict.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1CC8FF]/20 rounded-xl text-white placeholder-[#67E8F9]/30 focus:outline-none focus:border-[#1CC8FF] focus:ring-1 focus:ring-[#1CC8FF] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#67E8F9]/80 mb-2">
            {dict.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1CC8FF]/20 rounded-xl text-white placeholder-[#67E8F9]/30 focus:outline-none focus:border-[#1CC8FF] focus:ring-1 focus:ring-[#1CC8FF] transition-colors"
            placeholder="john@empresa.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#67E8F9]/80 mb-2">
            {dict.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1CC8FF]/20 rounded-xl text-white placeholder-[#67E8F9]/30 focus:outline-none focus:border-[#1CC8FF] focus:ring-1 focus:ring-[#1CC8FF] transition-colors"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#67E8F9]/80 mb-2">
            {dict.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1CC8FF]/20 rounded-xl text-white placeholder-[#67E8F9]/30 focus:outline-none focus:border-[#1CC8FF] focus:ring-1 focus:ring-[#1CC8FF] transition-colors"
            placeholder="Tu Empresa S.A."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#67E8F9]/80 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1CC8FF]/20 rounded-xl text-white placeholder-[#67E8F9]/30 focus:outline-none focus:border-[#1CC8FF] focus:ring-1 focus:ring-[#1CC8FF] transition-colors resize-none"
          placeholder={dict.message}
        />
      </div>

      {error && (
        <div className="text-red-400 text-sm text-center">
          Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.
        </div>
      )}

      <Button
        variant="primary"
        className="w-full justify-center glow-cyan py-4 flex items-center gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {dict.submitting || "Enviando..."}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {dict.btn}
          </>
        )}
      </Button>
    </form>
  )
}
