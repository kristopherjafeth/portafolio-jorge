import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const words = [
    "Inspira",
    "Transforma",
    "Conecta",
    "Emociona",
    "Comunica",
    "Evoluciona",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 120;
    const currentWord = words[wordIndex];

    if (isDeleting) typingSpeed = 60;

    const handleTyping = () => {
      if (!isDeleting && typedText.length < currentWord.length) {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentWord.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, words]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner.jpg"
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Diseño que
          <span className="block text-accent">
            {typedText}
            <span
              className="border-r-2 border-accent  animate-pulse"
              style={{ display: "inline-block", width: "1ch", height: "1em" }}
            ></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Creo experiencias visuales únicas que conectan marcas con sus
          audiencias a través del poder del diseño
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.link/cbxi79"
            className="bg-accent hover:bg-accent/90 text-black  px-8 py-2 font-semibold  text-lg rounded-full cursor-pointer"
          >
            Ver Mi Trabajo
          </Link>
          <Link
            href="https://wa.link/cbxi79"
            className="border-white font-bold border text-white hover:bg-white hover:text-primary px-8 py-2 text-lg rounded-full bg-transparent"
          >
            Contactar
          </Link>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
