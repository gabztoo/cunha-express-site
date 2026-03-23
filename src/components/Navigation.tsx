import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const WHATSAPP_HREF =
  "https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F";

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
            <picture>
              <source
                type="image/webp"
                srcSet="/uploads/cunha-express-logo-96.webp 96w, /uploads/cunha-express-logo-160.webp 160w"
                sizes="56px"
              />
              <img
                src="/uploads/cunha-express-logo-160.webp"
                alt="Logo Cunha Express"
                width={160}
                height={160}
                className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-12 md:h-14"
              />
            </picture>
            <div className="hidden lg:block">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-cunha-navy">
                Cunha Express
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Soluções B2B em transporte
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
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
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-border bg-white/70 text-xl leading-none text-cunha-navy md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span aria-hidden="true">{isOpen ? "x" : "|||"}</span>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-border/80 pb-4 pt-2 md:hidden">
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

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Falar no WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
