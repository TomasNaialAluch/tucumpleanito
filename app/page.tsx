import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HomeContent from "@/components/home-content"

export const metadata: Metadata = {
  title: "Tucumpleañito.com - Combos para Cumpleaños",
  description: "Los mejores combos de productos para hacer tu cumpleaños inolvidable",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="logo-animation">
              <Image src="/logo.png" alt="Tucumpleañito Logo" width={60} height={60} style={{ objectFit: "contain" }} />
            </div>
            <span className="text-2xl font-bold text-primary">Tucumpleañito</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#combos" className="text-lg font-medium transition-colors hover:text-primary">
              Combos
            </Link>
            <Link href="#contacto" className="text-lg font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Button size="sm" className="rounded-full">
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
              Carrito
            </Button>
          </nav>
          
        </div>
      </header>
      <HomeContent />
      <section id="contacto" className="bg-gray-100 py-16 px-4 text-center">
  <h2 className="text-3xl font-bold mb-4 text-primary">¡Contactanos!</h2>
  <p className="mb-6 text-lg">Estamos para ayudarte por WhatsApp o mail:</p>
  <div className="flex justify-center gap-4 flex-wrap">
    <a
      href="https://wa.me/5491166246009"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg"
    >
      WhatsApp
    </a>
    <a
      href="mailto:contacto@tucumpleanito.com"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg"
    >
      Mandanos un Mail
    </a>
  </div>
</section>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Tucumpleañito Logo" width={40} height={40} style={{ objectFit: "contain" }} />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Tucumpleañito.com. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
