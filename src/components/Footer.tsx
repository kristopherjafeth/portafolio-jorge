import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
            <Image src="/logojorge.svg" alt="Logo" width={100} height={100} className="py-2 h-16" />
            </div>
            <p className="text-primary-foreground/80 text-pretty">
              Creando experiencias visuales que conectan marcas con sus audiencias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="https://wa.link/cbxi79" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Conecta Conmigo</h3>
            <div className="flex space-x-4 mb-4">       
              <Link href="https://www.instagram.com/arte_jaspe/" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
           
            </div>
            <p className="text-primary-foreground/80 text-sm">jorgerv919@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">© 2025 Jorge Rodriguez Diseñador Gráfico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
