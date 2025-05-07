"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Balloon {
  id: number
  x: number
  y: number
  scale: number
  rotation: number
  image: string
  speed: number
}

interface MermaidBalloonsProps {
  isVisible: boolean
}

export function MermaidBalloons({ isVisible }: MermaidBalloonsProps) {
  const [balloons, setBalloons] = useState<Balloon[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Inicializar los globos
  useEffect(() => {
    if (!isVisible) return

    // Actualizar el tamaño de la ventana
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const initialBalloons: Balloon[] = [
      {
        id: 1,
        x: 20 + Math.random() * 60,
        y: Math.random() * 50,
        scale: 0.5 + Math.random() * 0.3,
        rotation: -10 + Math.random() * 20,
        image: "/images/globo-estrella.png",
        speed: 0.4 + Math.random() * 0.4,
      },
      {
        id: 2,
        x: 20 + Math.random() * 60,
        y: 50 + Math.random() * 50,
        scale: 0.5 + Math.random() * 0.3,
        rotation: -10 + Math.random() * 20,
        image: "/images/globo-concha.png",
        speed: 0.4 + Math.random() * 0.4,
      },
      {
        id: 3,
        x: 20 + Math.random() * 60,
        y: Math.random() * 100,
        scale: 0.6 + Math.random() * 0.3,
        rotation: -5 + Math.random() * 10,
        image: "/images/globo-cola-sirena.png",
        speed: 0.3 + Math.random() * 0.3,
      },
    ]

    setBalloons(initialBalloons)

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isVisible])

  // Manejar el movimiento del mouse
  useEffect(() => {
    if (!isVisible) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isVisible])

  // Actualizar la posición de los globos basado en el mouse
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setBalloons((prevBalloons) =>
        prevBalloons.map((balloon) => {
          // Mover hacia arriba con un ligero movimiento lateral
          let newY = balloon.y - balloon.speed * 0.1
          let newX = balloon.x + Math.sin(newY * 0.05) * 0.5

          // Si el globo sale por arriba, reiniciarlo abajo
          if (newY < -20) {
            newY = 120
            newX = 20 + Math.random() * 60
          }

          // Calcular la distancia al mouse (en porcentaje de la ventana)
          const mouseXPercent = (mousePosition.x / windowSize.width) * 100
          const mouseYPercent = (mousePosition.y / windowSize.height) * 100

          const dx = mouseXPercent - newX
          const dy = mouseYPercent - newY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Si el mouse está cerca, alejar el globo
          if (distance < 20) {
            const angle = Math.atan2(dy, dx)
            newX -= Math.cos(angle) * (20 - distance) * 0.3
            newY -= Math.sin(angle) * (20 - distance) * 0.3
          }

          return {
            ...balloon,
            x: newX,
            y: newY,
            rotation: balloon.rotation + Math.sin(newY * 0.01) * 0.5,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [isVisible, mousePosition, windowSize])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.x}%`,
            top: `${balloon.y}%`,
            transform: `scale(${balloon.scale}) rotate(${balloon.rotation}deg)`,
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={balloon.image || "/placeholder.svg"}
            alt="Globo de sirena"
            width={150}
            height={150}
            className="h-auto w-auto max-w-[150px] select-none"
            priority
          />
        </motion.div>
      ))}
    </div>
  )
}
