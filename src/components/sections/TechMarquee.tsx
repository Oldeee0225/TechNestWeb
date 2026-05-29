"use client"

import React from "react"

import { Brain } from "lucide-react"

// A collection of icons using SimpleIcons, Devicon, and Lucide
const techIcons = [
  { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Docker", img: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git", img: "https://cdn.simpleicons.org/git/F05032" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Figma", img: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Tailwind", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Vercel", img: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "HTML5", img: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Kotlin", img: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  { name: "SwiftUI", img: "https://cdn.simpleicons.org/swift/F05138" },
  { name: "IA", icon: Brain, color: "text-purple-400" },
  { name: "WhatsApp", img: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "Facebook", img: "https://cdn.simpleicons.org/facebook/1877F2" },
  { name: "Linux", img: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Apple", img: "https://cdn.simpleicons.org/apple/FFFFFF" }
]

export default function TechMarquee() {
  return (
    <section className="py-12 bg-[#020617] relative border-b border-[#1CC8FF]/10 overflow-hidden">
      
      {/* Inline style for the animation since it's easier than touching tailwind.config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* The Marquee Container */}
      <div className="flex overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          
          {/* We duplicate the icons array inside the map twice to create an infinite loop effect */}
          {[...techIcons, ...techIcons].map((tech, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center mx-8 group cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <div className="p-4 rounded-2xl bg-[#0F172A]/80 border border-[#1CC8FF]/10 backdrop-blur-sm shadow-xl group-hover:border-[#1CC8FF]/40 group-hover:shadow-[0_0_20px_rgba(28,200,255,0.2)] transition-all duration-300 flex items-center justify-center w-20 h-20">
                {tech.img ? (
                  <img 
                    src={tech.img} 
                    alt={`${tech.name} icon`}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                ) : tech.icon ? (
                  <tech.icon className={`w-12 h-12 ${tech.color || 'text-white'}`} />
                ) : null}
              </div>
              <span className="mt-3 text-sm font-medium text-[#67E8F9]/50 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}
