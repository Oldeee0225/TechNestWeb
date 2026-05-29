"use client"

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-gradient-to-r from-[#1CC8FF] to-[#3B82F6] text-[#020617] hover:shadow-[0_0_30px_rgba(28,200,255,0.4)]": variant === "primary",
            "bg-[#1CC8FF]/10 text-[#1CC8FF] hover:bg-[#1CC8FF]/20": variant === "secondary",
            "border border-[#1CC8FF]/50 text-[#1CC8FF] hover:bg-[#1CC8FF]/10": variant === "outline",
            "hover:bg-[#1CC8FF]/10 text-[#1CC8FF]": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export default Button
