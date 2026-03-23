import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle, Clock, MapPin, Package, Phone, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Shield,
    title: "Certificação ANTT",
    text: "RNTRC 053472755 - Regularizado e autorizado.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    text: "Compromisso com horários e prazos.",
  },
  {
    icon: MapPin,
    title: "Rastreamento",
    text: "Acompanhe sua carga em tempo real.",
  },
  {
    icon: Calendar,
    title: "Agendamento",
    text: "Planejamento flexível conforme sua necessidade.",
  },
];

const Services = () => {
  return (
    <div>
      <section className="hero-overlay py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Nossas Soluções de Transporte</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/85 sm:text-lg">
            Oferecemos serviços especializados para atender todas as necessidades logísticas da sua empresa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <article className="panel-elevated overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-5 sm:p-10">
              <Badge className="bg-accent/10 text-accent">
                <Package className="mr-2 h-4 w-4" aria-hidden="true" />
                Logística Empresarial
              </Badge>

              <h2 className="mt-5 text-3xl font-semibold text-cunha-navy sm:text-4xl">
                Cunha Cargas
                <span className="mt-2 block text-2xl text-accent sm:text-3xl">Entrega Expressa de Cargas</span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Na Cunha Cargas, sua entrega é tratada como prioridade. Realizamos o transporte de cargas, peças e
                equipamentos com agilidade máxima, sem abrir mão da segurança e pontualidade.
              </p>

              <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4 text-muted-foreground">
                Coletamos no ponto de origem e entregamos no destino com rapidez, ideal para demandas urgentes e
                movimentação imediata entre bases, fornecedores e clientes.
              </div>

              <p className="mt-5 text-lg font-semibold text-cunha-navy">
                Com a gente, sua carga chega rápido, segura e no prazo certo.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Coleta e entrega programada",
                  "Transporte de peças e equipamentos",
                  "Movimentação entre bases empresariais",
                  "Rastreamento em tempo real",
                ].map((item) => (
                  <p
                    key={item}
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-cunha-navy"
                  >
                    <CheckCircle className="mr-2 inline h-4 w-4 text-accent" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contato">
                  Solicitar Orçamento
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="hero-overlay relative flex items-center justify-center p-8">
              <img
                src="/uploads/kia bongo.jpg"
                alt="Kia Bongo Cunha Express para transporte de cargas"
                width={960}
                height={720}
                className="h-80 w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </article>
      </section>

      <section className="bg-white/70 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-cunha-navy sm:text-4xl">Nossos Diferenciais</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            O que nos torna a escolha ideal para suas necessidades de transporte.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="panel-elevated rounded-2xl border-0">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-cunha-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="hero-overlay rounded-3xl p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Precisa de uma solução personalizada?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Entre em contato conosco e vamos encontrar a melhor solução para o seu negócio.
          </p>
          <Button asChild size="lg" className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90">
            <a
              href="https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
