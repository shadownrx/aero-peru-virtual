"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let attractionForce = false

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 500 // Altura fija para la sección hero
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor(window.innerWidth / 10) // Más partículas

      for (let i = 0; i < particleCount; i++) {
        const redShade = Math.floor(Math.random() * 100) + 155 // Tonos de rojo
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: `rgba(${redShade}, ${Math.floor(redShade / 10)}, ${Math.floor(redShade / 10)}, 0.7)`,
        })
      }
    }

    const trackMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const toggleAttraction = (e: MouseEvent) => {
      attractionForce = e.type === "mousedown"
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Actualizar posición
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Efecto de atracción/repulsión hacia el mouse
        if (attractionForce) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (150 - distance) / 150

            particle.speedX += forceDirectionX * force * 0.2
            particle.speedY += forceDirectionY * force * 0.2
          }
        }

        // Limitar velocidad
        const maxSpeed = 2
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed
          particle.speedY = (particle.speedY / speed) * maxSpeed
        }

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }
      })

      // Dibujar líneas entre partículas cercanas
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 70) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(227, 6, 19, ${0.1 * (1 - distance / 70)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", trackMouse)
    canvas.addEventListener("mousedown", toggleAttraction)
    canvas.addEventListener("mouseup", toggleAttraction)

    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", trackMouse)
      canvas.removeEventListener("mousedown", toggleAttraction)
      canvas.removeEventListener("mouseup", toggleAttraction)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-auto" />
}
