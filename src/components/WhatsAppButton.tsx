import Image from "next/image";
import React from "react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/cbxi79"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-colors duration-200"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={40}
        height={40}
      />
    </a>
  );
}
