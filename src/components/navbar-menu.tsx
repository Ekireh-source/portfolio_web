"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface MenuItemProps {
  setActive: (item: string | null) => void
  active: string | null
  item: string
  className?: string
}

export const MenuItem: React.FC<MenuItemProps & Omit<HTMLMotionProps<"div">, keyof MenuItemProps>> = ({
  setActive,
  active,
  item,
  className,
  ...props
}) => {
  return (
    <motion.div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
        active === item ? "text-white" : "text-gray-300 hover:text-white",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{item}</span>
      {active === item && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.div>
  )
}

interface MenuProps {
  setActive: (item: string | null) => void
  children: React.ReactNode
  className?: string
}

export const Menu: React.FC<MenuProps & Omit<HTMLMotionProps<"nav">, keyof MenuProps>> = ({
  setActive,
  children,
  className,
  ...props
}) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative overflow-hidden rounded-full border border-white/10 bg-black/20 px-2 py-4 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/50 via-blue-950/50 to-purple-950/50 opacity-80" />
      <div className="relative z-10 flex items-center justify-center gap-2">{children}</div>
    </motion.nav>
  )
}

