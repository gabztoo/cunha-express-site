import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        <a 
          href="https://wa.me/5522992559327" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;