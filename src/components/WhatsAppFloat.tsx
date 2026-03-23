import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed z-50"
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        right: "calc(env(safe-area-inset-right, 0px) + 1rem)",
      }}
    >
      <div className="group relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-green-500/45 blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />

        <Button
          asChild
          size="icon"
          className="h-14 w-14 min-h-[44px] min-w-[44px] rounded-full bg-green-600 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:bg-green-500 focus-visible:ring-green-400"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a
            href="https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Cunha Express no WhatsApp"
          >
            <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
          </a>
        </Button>

        <div
          role="status"
          aria-live="polite"
          className={`pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-cunha-navy px-3 py-2 text-sm font-medium text-white shadow-lg transition-transform transition-opacity duration-200 ${
            isHovered ? "translate-x-0 opacity-100" : "translate-x-1 opacity-0 group-focus-within:translate-x-0 group-focus-within:opacity-100"
          }`}
        >
          Fazer um orçamento no WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
