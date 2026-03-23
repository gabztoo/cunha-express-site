import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] md:h-20">
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
            aria-label="Voltar para a página inicial"
          >
            <img
              src="/uploads/CUNHA_EXPRESS.png"
              alt="Logo Cunha Express"
              width={136}
              height={58}
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-12 md:h-14"
            />
            <div className="hidden lg:block">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-cunha-navy">
                Cunha Express
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Soluções B2B em transporte
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "bg-cunha-navy text-white"
                      : "text-cunha-dark-gray hover:bg-secondary hover:text-cunha-navy"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a
                href="https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border/80 pb-4 pt-2">
            <nav className="space-y-1" aria-label="Navegação mobile">
              {navItems.map((item) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? "bg-cunha-navy text-white"
                        : "text-cunha-dark-gray hover:bg-secondary hover:text-cunha-navy"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <Button asChild className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <a
                href="https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
