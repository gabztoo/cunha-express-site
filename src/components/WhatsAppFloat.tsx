import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <Button
          asChild
          size="lg"
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a 
            href="https://wa.me/5522992559327?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp className="h-9 w-9" />
          </a>
        </Button>
        
        {/* Tooltip */}
        <div 
          className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Fazer um orçamento no WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;