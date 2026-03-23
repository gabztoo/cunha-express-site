import { Link } from "react-router-dom";
import { Mail, Phone, Shield } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-cunha-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <section>
          <div className="mb-5 flex items-center gap-4">
            <img
              src="/uploads/cunha-express-logo.webp"
              alt="Logo Cunha Express"
              width={120}
              height={120}
              className="h-16 w-auto rounded-md bg-white/5 p-1"
            />
            <div>
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.12em]">Cunha Express</p>
              <p className="text-sm text-white/70">Transporte inteligente para o seu negócio</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            Soluções em transporte logístico com operação dedicada, pontualidade e foco em continuidade das
            operações B2B.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl font-semibold uppercase tracking-[0.1em] text-white">Contato</h2>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">WhatsApp Principal</p>
                <a
                  className="hover:text-accent"
                  href="https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (22) 98100-5651
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Telefone / WhatsApp</p>
                <a className="hover:text-accent" href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                  (22) 99255-9327
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a className="break-all hover:text-accent" href="mailto:contato@cunhaexpresslog.com.br">
                  contato@cunhaexpresslog.com.br
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl font-semibold uppercase tracking-[0.1em] text-white">Credenciais</h2>
          <div className="panel-elevated rounded-2xl border-white/20 bg-white/10 p-5">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-white/80">Certificado ANTT</p>
                <p className="font-semibold text-white">RNTRC 053472755</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Transportador Autônomo de Cargas regularizado e com operação em conformidade com as normas
              brasileiras.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="mt-5 grid grid-cols-2 gap-2 text-sm">
            <Link className="rounded px-2 py-1 text-white/75 hover:bg-white/10 hover:text-white" to="/">
              Início
            </Link>
            <Link className="rounded px-2 py-1 text-white/75 hover:bg-white/10 hover:text-white" to="/servicos">
              Serviços
            </Link>
            <Link className="rounded px-2 py-1 text-white/75 hover:bg-white/10 hover:text-white" to="/sobre">
              Sobre Nós
            </Link>
            <Link className="rounded px-2 py-1 text-white/75 hover:bg-white/10 hover:text-white" to="/contato">
              Contato
            </Link>
          </nav>
        </section>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {year} Cunha Express. Todos os direitos reservados.</p>
          <p>Transportador Autônomo de Cargas - Gustavo Cunha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
