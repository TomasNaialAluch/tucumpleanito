"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ProductType } from "@/types/product"

interface ProductCardProps {
  product: ProductType
  onExpand: (id: string | null) => void
  isExpanded: boolean
}

export function ProductCard({ product, onExpand, isExpanded }: ProductCardProps) {
  const toggleExpand = () => {
    onExpand(isExpanded ? null : product.id)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`relative w-full ${isExpanded ? "md:col-span-2 lg:col-span-3 xl:col-span-4" : ""}`}
    >
      <Card
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "shadow-xl" : "shadow-md hover:shadow-lg"
        } ${product.colors ? `bg-gradient-to-br ${product.colors.background}` : ""}`}
        onClick={!isExpanded ? toggleExpand : undefined}
      >
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={product.mainImage || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            {product.isNew && (
              <Badge
                className={`absolute right-2 top-2 text-white ${
                  product.colors ? product.colors.gradient : "bg-primary"
                }`}
              >
                Nuevo
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle
            className={`text-xl ${
              product.colors ? `bg-gradient-to-r ${product.colors.textGradient} bg-clip-text text-transparent` : ""
            }`}
          >
            {product.name}
          </CardTitle>
          <CardDescription className="mt-2">{product.shortDescription}</CardDescription>
          <div className="mt-2 flex items-center justify-between">
            <span
              className={`text-lg font-bold ${
                product.colors ? `bg-gradient-to-r ${product.colors.textGradient} bg-clip-text text-transparent` : ""
              }`}
            >
              ${product.price.toFixed(2)}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          {!isExpanded ? (
            <Button
              variant="outline"
              className={`w-full ${
                product.colors
                  ? `border-2 border-${product.colors.primary} text-${product.colors.tertiary} hover:bg-${product.colors.primary}/10`
                  : ""
              }`}
              onClick={toggleExpand}
            >
              Ver detalles
            </Button>
          ) : (
            <Button
              variant="outline"
              className={`w-full ${
                product.colors
                  ? `border-2 border-${product.colors.primary} text-${product.colors.tertiary} hover:bg-${product.colors.primary}/10`
                  : ""
              }`}
              onClick={toggleExpand}
            >
              Cerrar
            </Button>
          )}
        </CardFooter>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className={`border-t px-4 py-6 ${product.colors ? `bg-gradient-to-br ${product.colors.background}` : ""}`}
            >
              <div className="grid gap-6">
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      product.colors
                        ? `bg-gradient-to-r ${product.colors.textGradient} bg-clip-text text-transparent`
                        : ""
                    }`}
                  >
                    Descripción
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.fullDescription}</p>
                </div>

                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      product.colors
                        ? `bg-gradient-to-r ${product.colors.textGradient} bg-clip-text text-transparent`
                        : ""
                    }`}
                  >
                    Incluye
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    {product.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-4 w-4 ${product.colors ? `text-${product.colors.primary}` : "text-primary"}`}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {product.additionalImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative h-40 overflow-hidden rounded-md"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Imagen ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <Button className={`w-full ${product.colors ? product.colors.gradient : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Agregar al carrito
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
