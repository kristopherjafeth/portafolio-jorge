"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CoffeRootImage from "../../public/cofferoot.jpg"
import Image, { StaticImageData } from "next/image"
import ShampooCanavisImage from "../../public/shampoocanavis.jpg"
import BloomiotImage from "../../public/bloomiot.jpg"
import GrekImage from "../../public/grek.jpg"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string | StaticImageData;
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Coffee Root",
    category: "branding",
    image: CoffeRootImage,
    description: "Una marca de café  que conecta con lo natural, lo auténtico, lo que viene de la tierra.",
  },
    {
    id: 2,
    title: "Shampoo Canavis",
    category: "branding",
    image: ShampooCanavisImage,
    description: "Una marca de shampoo que destaca la frescura y naturalidad de sus ingredientes.",
  },
    {
    id: 3,
    title: "Bloomiot",
    category: "branding",
    image: BloomiotImage,
    description: "Una marca de tecnología para invernaderos que resalta innovación y crecimiento.",
  },
     {
    id: 4,
    title: "Grek",
    category: "branding",
    image: GrekImage,
    description: "Una marca de confección que combina tradición y modernidad.",
  },
]

const categories = [
  { id: "all", label: "Todos" },
  { id: "branding", label: "Branding" },
  { id: "webdesign", label: "Diseño Web" },
  { id: "packaging", label: "Packaging" },
  { id: "print", label: "Diseño Impreso" },

]

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Mi Portafolio</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Una selección de mis mejores trabajos en diseño gráfico, branding y experiencia digital
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-accent text-black font-bold shadow-lg"
                : "hover:bg-accent/10 hover:border-accent"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-0"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
