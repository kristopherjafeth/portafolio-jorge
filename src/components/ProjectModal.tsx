// Slider de galería para el modal
import { useState } from "react";
function GallerySlider({ images, title }: { images: (string | StaticImageData)[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  if (total === 0) return null;

  return (
    <div className="mb-4 flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center py-12">
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <Image
          src={images[current]}
          alt={title + ' imagen ' + (current + 1)}
          width={1200}
          height={500}
          className="rounded-md object-contain min-w-[420px] h-auto mx-auto"
        />
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2"
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-2 justify-center">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-accent' : 'bg-muted-foreground/30'} transition-colors`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import SquareIcon from "../../public/square.svg";

export interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  item: {
    title: string;
    longDescription?: string;
    description: string;
    gallery?: (string | StaticImageData)[];
    tools?: string[];
  } | null;
}

export function ProjectModal({ open, onClose, item }: ProjectModalProps) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 shadow-lg">
      <div className="bg-[#1c1c1c] py-6 dark:bg-background rounded-lg shadow-xl max-w-2xl w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-muted-foreground hover:text-accent focus:outline-none"
          aria-label="Cerrar"
        >
          <Image src={SquareIcon} alt="Cerrar" width={24} height={24} className="cursor-pointer" />
        </button>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground mb-4">{item.longDescription || item.description}</p>
            {/* Galería de imágenes como slider */}
            {item.gallery && item.gallery.length > 0 && (
              <GallerySlider images={item.gallery} title={item.title} />
            )}


            {/* Programas utilizados */}
            {item.tools && item.tools.length > 0 && (
              <div className="mb-2">
                <span className="font-semibold text-foreground">Programas utilizados: </span>
                <span className="text-muted-foreground">{item.tools.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
