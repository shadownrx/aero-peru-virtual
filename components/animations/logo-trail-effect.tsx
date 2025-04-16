"use client"

import { useEffect, useRef } from "react"

interface LogoTrailEffectProps {
  color?: string
}

export function LogoTrailEffect({ color = "rgba(227, 6, 19, 0.2)" }: LogoTrailEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    const points: { x: number; y: number; age: number }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const trackMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const updateTrail = () => {
      // Add current mouse position to points array
      if (mouseX !== 0 && mouseY !== 0) {
        points.push({ x: mouseX, y: mouseY, age: 0 })
      }

      // Update and draw points
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        point.age++

        // Remove old points
        if (point.age > 50) {
          points.splice(i, 1)
          i--
          continue
        }

        // Draw point with fading opacity
        const opacity = 1 - point.age / 50
        ctx.beginPath()
        ctx.arc(point.x, point.y, 3 * opacity, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(")", `, ${opacity})`)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(updateTrail)
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", trackMouse)

    resizeCanvas()
    updateTrail()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", trackMouse)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
}
