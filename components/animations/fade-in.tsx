"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", duration = 0.5, className = "" }: FadeInProps) {
  let initial = { opacity: 0 }

  if (direction === "up") {
    initial = { ...initial, y: 20 }
  } else if (direction === "down") {
    initial = { ...initial, y: -20 }
  } else if (direction === "left") {
    initial = { ...initial, x: 20 }
  } else if (direction === "right") {
    initial = { ...initial, x: -20 }
  }

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

