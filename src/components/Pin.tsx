"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function PinContainer({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
}) {
  const [transform, setTransform] = useState("translate(-50%, -50%) rotateX(0deg)")

  const [isPinned, setIsPinned] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = () => {
    if (!isPinned) {
      setIsPinned(true)
    }
  }

  const onMouseLeave = () => {
    if (isPinned) {
      setIsPinned(false)
    }
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    setTransform(`translate(-50%, -50%) rotateX(${-y}deg) rotateY(${x}deg)`)
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className={cn("relative group/pin h-full w-full", containerClassName)}
    >
      <div
        style={{
          perspective: "1000px",
          transform: isPinned ? "translateZ(0)" : "translateZ(0)",
        }}
        className="absolute left-1/2 top-1/2 h-full w-full"
      >
        <motion.div
          animate={{
            transform: isPinned ? transform : "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)",
            boxShadow: isPinned
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              : "0 0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="relative h-full w-full rounded-2xl bg-gradient-to-br from-cyan-950/90 via-blue-950/90 to-purple-950/90 border border-white/10 p-4 shadow-xl"
        >
          <div className={cn("h-full w-full", className)}>{children}</div>
        </motion.div>
      </div>
    </div>
  )
}

