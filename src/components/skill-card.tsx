"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import type React from "react"
import { useRef, useState } from "react"

interface SkillCardProps {
  name: string
  icon: string
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for card rotation
  const springConfig = { damping: 15, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  // Handle mouse move on card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate mouse position relative to card center (values between -0.5 and 0.5)
    const x = (e.clientX - rect.left - width / 2) / width
    const y = (e.clientY - rect.top - height / 2) / height

    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      className="relative h-32 w-full rounded-xl bg-gradient-to-br from-cyan-950/80 via-blue-950/80 to-purple-950/80 border border-white/10 p-4 shadow-xl flex flex-col items-center justify-center gap-2 cursor-pointer group"
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10",
        )}
      />

      <div className="relative flex items-center justify-center w-12 h-12 mb-2 z-10">
        <Image src={icon || "/placeholder.svg"} alt={name} width={48} height={48} className="object-contain" />

        {/* Glow effect */}
        <motion.div
          animate={{
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0,
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md -z-10"
        />
      </div>

      <p className="text-center text-sm font-medium text-white z-10">{name}</p>
    </motion.div>
  )
}

