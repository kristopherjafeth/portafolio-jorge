import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


export function AboutSection() {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Sobre Mí</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Soy un diseñador gráfico apasionado con más de 8 años de experiencia creando identidades visuales
              memorables y experiencias digitales excepcionales.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Mi enfoque se centra en combinar creatividad con estrategia, asegurando que cada proyecto no solo sea
              visualmente impactante, sino que también cumpla con los objetivos comerciales de mis clientes.
            </p>

          
          </div>

          <div className="relative">
                <Image src="/sobremi.jpg" alt="Designer portrait" width={1000} height={1500} className="w-full h-[700px] rounded-2xl object-cover  object-left-bottom" />

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg shadow-lg text-black">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Proyectos Completados</div>
            </div>

            <div className="absolute -top-6 lg:-right-6 -right-1 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
