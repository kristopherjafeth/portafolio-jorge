"use client";

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
            {/* Galería de imágenes */}
            {item.gallery && item.gallery.length > 0 && (
              <div className="flex gap-2 overflow-x-auto mb-4">
                {item.gallery.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={item.title + ' imagen ' + (idx + 1)}
                    width={420}
                    height={320}
                    className="rounded-md object-contain min-w-[420px] h-80"
                  />
                ))}
              </div>
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
