"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface MenuItemProps {
  setActive: (item: string | null) => void
  active: string | null
  item: string
  className?: string
}

export const MenuItem: React.FC<MenuItemProps & React.HTMLAttributes<HTMLDivElement>> = ({
  setActive,
  active,
  item,
  className,
  ...props
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer",
        active === item ? "text-white" : "text-gray-300 hover:text-white",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{item}</span>
      {active === item && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 backdrop-blur-sm" />
      )}
    </div>
  )
}

interface MenuProps {
  setActive: (item: string | null) => void
  children: React.ReactNode
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ setActive, children, className }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative overflow-hidden rounded-full border border-white/10 bg-black/20 px-2 py-4 backdrop-blur-md",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/50 via-blue-950/50 to-purple-950/50 opacity-80" />
      <div className="relative z-10 flex items-center justify-center gap-2">{children}</div>
    </nav>
  )
}

