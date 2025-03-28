"use client"

import { useLanguage } from "@/app/i18n/language-context"
import { FadeIn } from "@/components/animations/fade-in"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/aeroperu1.png",
    alt: "AERO PERU Cessna",
  },
  {
    src: "/images/aeroperu2.png",
    alt: "AERO PERU Aircraft on Runway",
  },
  {
    src: "/images/aeroperu3.png",
    alt: "AERO PERU Commercial Jet",
  },
  {
    src: "/images/aeroperu4.png",
    alt: "AERO PERU Aircraft at Gate",
  },
  {
    src: "/images/aeroperu5.png",
    alt: "AERO PERU Red-nosed Jet",
  },
  {
    src: "/images/aeroperu6.png",
    alt: "AERO PERU Regional Aircraft",
  },
]

export function GallerySection() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="container relative z-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-light mb-12 text-center">
            {language === "es" ? "Galería de Imágenes" : "Image Gallery"}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <FadeIn key={index} delay={0.3 + index * 0.05} direction="up">
              <div
                className="relative aspect-video overflow-hidden cursor-pointer hover-zoom"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl aspect-video">
              <Image src={selectedImage || "/placeholder.svg"} alt="Enlarged view" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

