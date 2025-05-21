"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { FloatingBalloons } from "@/components/floating-balloons"
import { MermaidBalloons } from "@/components/mermaid-balloons"
import { products } from "@/data/products"
import emailjs from "emailjs-com"

export default function HomeContent() {
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null)
  const [activeColors, setActiveColors] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleExpand = (id: string | null) => {
    setExpandedProductId(id)

    if (id) {
      const product = products.find((p) => p.id === id)
      setActiveColors(product?.colors || null)
    } else {
      setActiveColors(null)
    }
  }

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { id, value } = e.target
  setFormData((prev) => ({
    ...prev,
    [id]: value,
  }))
}

const sendEmail = () => {
  emailjs
    .send(
        "tucumpleanito_gmail",
      "template_wfkkroh",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "eK0bneOLYPn9MyZCD"
    )
    .then(() => {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    })
    .catch((error) => {
      console.error("Error al enviar mensaje:", error)
    })
}


    const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    sendEmail()
  }


  // Verificar qué combos están expandidos
  const isAnimalComboExpanded = expandedProductId === "1"
  const isMermaidComboExpanded = expandedProductId === "2"

  // Generar estilos dinámicos basados en el producto expandido
  const heroStyle = activeColors
    ? {
        background: `linear-gradient(to bottom, ${activeColors.primary}10, ${activeColors.secondary}10, ${activeColors.tertiary}10)`,
        transition: "background 0.5s ease-in-out",
      }
    : {
        background: "linear-gradient(to bottom, #fdf2f810, #c7d2fe10, #bfdbfe10)",
        transition: "background 0.5s ease-in-out",
      }

  const heroTextStyle = activeColors
    ? {
        backgroundImage: `linear-gradient(to right, ${activeColors.primary}, ${activeColors.secondary}, ${activeColors.tertiary})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        transition: "all 0.5s ease-in-out",
      }
    : {
        backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        transition: "all 0.5s ease-in-out",
      }

  return (
    <main className="flex-1">
      {/* Globos flotantes que aparecen cuando se expande el combo de animales */}
      <FloatingBalloons isVisible={isAnimalComboExpanded} />

      {/* Globos de sirena que aparecen cuando se expande el combo de sirena */}
      <MermaidBalloons isVisible={isMermaidComboExpanded} />

      <section className="w-full py-12 md:py-24 lg:py-32" style={heroStyle}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                style={heroTextStyle}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                ¡Haz tu fiesta inolvidable!
              </motion.h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Los mejores combos de productos para cumpleaños con temáticas divertidas
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className={activeColors ? activeColors.gradient : "animate-pulse"}>
                Ver Combos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="combos" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={heroTextStyle}>
                Nuestros Combos
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Elige el combo perfecto para tu celebración
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8 mx-auto max-w-5xl">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onExpand={handleExpand}
                isExpanded={expandedProductId === product.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="w-full py-12 md:py-24 lg:py-32" style={heroStyle}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={heroTextStyle}>
                Contáctanos
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                ¿Tienes preguntas? Estamos aquí para ayudarte
              </p>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-2">
                Los mensajes se envían a: <span className="font-medium">tucumpleanito.ar@gmail.com</span>
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    className={`w-full ${activeColors ? activeColors.gradient : ""}`}
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? "¡Mensaje enviado!" : "Enviar mensaje"}
                  </Button>
                  <a href="https://wa.me/5491166246009" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Iniciar chat en WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
              {formSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                  ¡Gracias por tu mensaje! Te responderemos a la brevedad.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
