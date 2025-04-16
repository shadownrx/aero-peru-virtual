"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedLogoProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedLogo({ src, alt, className = "" }: AnimatedLogoProps) {
  const [mounted, setMounted] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`relative h-[300px] md:h-[400px] ${className}`}>
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" priority />
      </div>
    )
  }

  return (
    <div
      className={`relative h-[300px] md:h-[400px] ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ y: 0 }}
        animate={{
          y: hover ? [0, -20, 0] : [0, -15, 0, -10, 0],
          rotate: hover ? [0, 2, 0, -2, 0] : [0, 1, 0, -1, 0],
          scale: hover ? 1.05 : 1,
        }}
        transition={{
          duration: hover ? 2 : 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" priority />
      </motion.div>

      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: [0, 0.3, 0],
          x: ["-100%", "200%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          repeatDelay: 5,
        }}
      />
    </div>
  )
}
