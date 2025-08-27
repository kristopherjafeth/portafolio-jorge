"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">
            <Image src="/logojorge.svg" alt="Logo" width={100} height={100} className="py-2 h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors duration-200 text-white font-bold"
              >
                {item.label}
              </Link>
             
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent text-black  hover:bg-accent/90  rounded-full px-6">
              Trabajemos Juntos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full mt-4">
                Trabajemos Juntos
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
