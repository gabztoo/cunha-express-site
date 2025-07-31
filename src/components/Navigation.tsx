import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background shadow-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b3b7492d-9d20-415b-8ef1-bbe205ecb4a3.png" 
              alt="Cunha Express"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(item.path) 
                    ? "text-cunha-navy border-b-2 border-accent" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
              <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-cunha-navy bg-accent/10"
                      : "text-muted-foreground hover:text-cunha-navy hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;