"use client";

import { useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CoffeRootImage from "../../public/cofferoot.jpg";
import Image, { StaticImageData } from "next/image";
import ShampooCanavisImage from "../../public/shampoocanavis.jpg";
import BloomiotImage from "../../public/bloomiot.jpg";
import { BloomiotPage, CoffePage, GrekPage, ShampooPage } from "@/lib/data";
import GrekImage from "../../public/grek.jpg";
import MenuGoImage from "../../public/logomenugo.png";
import ArteJaspeImage from "../../public/artejaspe.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  categories: string[];
  image: string | StaticImageData;
  description: string;
  longDescription?: string;
  gallery?: (string | StaticImageData)[];
  tools?: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Coffee Root",
    categories: ["branding"],
    image: CoffeRootImage,
    description:
      "Una marca de café  que conecta con lo natural, lo auténtico, lo que viene de la tierra.",
    longDescription:
      "Coffee Root es un proyecto de branding que busca transmitir la esencia natural y auténtica del café artesanal. El diseño se inspira en la tierra y la conexión con el origen del producto.",
    gallery: CoffePage[0].images,
    tools: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 2,
    title: "Fuerte y Poderoso",
    categories: ["branding", "packaging", "print"],
    image: ShampooCanavisImage,
    description:
      "Una marca de shampoo que destaca la frescura y naturalidad de sus ingredientes.",
    longDescription:
      "Proyecto de identidad visual para una marca de shampoo natural. Se trabajó en la creación de un empaque atractivo y una imagen fresca.",
    gallery: ShampooPage[0].images,
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: 3,
    title: "Bloomiot",
    categories: ["branding", "webdesign"],
    image: BloomiotImage,
    description:
      "Una marca de tecnología para invernaderos que resalta innovación y crecimiento.",
    longDescription:
      "Bloomiot es una marca enfocada en soluciones tecnológicas para el sector agrícola. El branding refleja innovación y crecimiento sostenible.",
    gallery: BloomiotPage[0].images,
    tools: ["Figma", "Illustrator"],
  },
  {
    id: 4,
    title: "Grek",
    categories: ["branding", "print"],
    image: GrekImage,
    description: "Una marca de confección que combina tradición y modernidad.",
    longDescription:
      "Grek es una marca de moda que fusiona la tradición textil con tendencias modernas. El proyecto incluyó branding y diseño de etiquetas.",
    gallery: GrekPage[0].images,
    tools: ["Illustrator", "InDesign"],
  },
  {
    id: 5,
    title: "MenuGo",
    categories: ["branding", "webdesign"],
    image: MenuGoImage,
    description:
      "Una marca para una app de tiendas online con pedidos en whatsapp.",
    longDescription:
      "MenuGo es una aplicación que facilita la gestión de pedidos en línea para tiendas y restaurantes. Se desarrolló la identidad visual y la interfaz de usuario.",
    gallery: [MenuGoImage],
    tools: ["Figma", "Photoshop"],
  },
  {
    id: 6,
    title: "Arte Jaspe",
    categories: ["branding"],
    image: ArteJaspeImage,
    description: "Una marca para una Agencia de Publicidad y Diseño Gráfico.",
    longDescription:
      "Arte Jaspe es una agencia creativa dedicada al diseño gráfico y la publicidad. El proyecto incluyó branding, papelería y presencia digital.",
    gallery: [ArteJaspeImage],
    tools: ["Illustrator", "Photoshop", "Figma"],
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "branding", label: "Branding" },
  { id: "webdesign", label: "Diseño Web" },
  { id: "packaging", label: "Packaging" },
  { id: "print", label: "Diseño Impreso" },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.categories.includes(activeCategory)
        );

  const handleCardClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
          Mi Portafolio
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Una selección de mis mejores trabajos en diseño gráfico, branding y
          experiencia digital
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all cursor-pointer duration-300 ${
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
            className="group overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-0 cursor-pointer"
            onClick={() => handleCardClick(item)}
            tabIndex={0}
            role="button"
            aria-label={`Ver detalles de ${item.title}`}
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
                <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal de detalle del proyecto */}
      <ProjectModal
        open={modalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </section>
  );
}
