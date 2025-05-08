"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageGalleryProps {
  images: string[]
  productName: string
  colors?: {
    textGradient: string
  }
}

export function ImageGallery({ images, productName, colors }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div>
      <h3
        className={`text-xl font-semibold mb-3 ${
          colors ? `bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent` : ""
        }`}
      >
        Galería
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} - Imagen ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden">
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={`${productName} - Imagen ampliada`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white/80 rounded-full p-1 hover:bg-white"
            >
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
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
