import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, CheckCircle, Heart, Phone, Shield, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InstitutionalSlides = lazy(() => import("@/components/InstitutionalSlides"));

const values = [
  {
    icon: Shield,
    title: "Confiabilidade",
    text: "Construímos relacionamentos baseados na confiança e no cumprimento de compromissos.",
  },
  {
    icon: Target,
    title: "Excelência",
    text: "Buscamos a perfeição em cada operação, superando expectativas constantemente.",
  },
  {
    icon: Heart,
    title: "Comprometimento",
    text: "Tratamos cada cliente como parceiro, com atenção especial às suas necessidades.",
  },
];

const About = () => {
  const [shouldRenderSlides, setShouldRenderSlides] = useState(false);
  const slidesTriggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRenderSlides || !slidesTriggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRenderSlides(true);
        observer.disconnect();
      },
      { rootMargin: "450px 0px" }
    );

    observer.observe(slidesTriggerRef.current);

    return () => observer.disconnect();
  }, [shouldRenderSlides]);

  return (
    <div>
      <section className="hero-overlay py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Confiança e Profissionalismo em Cada Trajeto</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/85 sm:text-lg">
            Conheça nossa história e os valores que nos guiam na prestação de serviços de excelência.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-14">
        <article>
          <Badge className="bg-accent/10 text-accent">
            <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
            Nossa História
          </Badge>

          <h2 className="mt-5 text-3xl font-semibold text-cunha-navy sm:text-4xl">Nascemos da paixão por logística</h2>

          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Cunha Express nasceu da paixão por logística e do compromisso em oferecer um serviço de transporte
              diferenciado. Liderada por <strong className="text-cunha-navy">Gustavo Cunha</strong>, transportador
              autônomo de cargas com registro na ANTT, nossa missão é ser o parceiro em que sua empresa pode confiar.
            </p>
            <p>
              Entendemos que cada entrega e cada viagem são cruciais para o seu negócio, por isso tratamos cada
              operação com máxima prioridade e cuidado. Não somos apenas uma transportadora, somos uma extensão da sua
              equipe.
            </p>
            <p>
              Nossa experiência no mercado de transporte, combinada com o conhecimento das necessidades específicas de
              cada empresa, nos permite oferecer soluções personalizadas e eficientes para cada cliente.
            </p>
          </div>
        </article>

        <aside className="panel-elevated rounded-2xl p-5">
          <img
            src="/uploads/certificado-rntrc-960.webp"
            alt="Certificado ANTT da Cunha Express"
            width={960}
            height={679}
            loading="lazy"
            className="h-72 w-full rounded-xl object-cover"
          />
          <h3 className="mt-5 text-3xl font-semibold text-cunha-navy">Regulamentação e Segurança</h3>
          <div className="mt-5 space-y-4">
            {[
              "Certificado ANTT - RNTRC 053472755",
              "Seguro completo para cargas",
              "Documentação em dia",
              "Frota própria com manutenção preventiva",
            ].map((item) => (
              <p key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </aside>
      </section>

      <section className="bg-white/70 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-cunha-navy sm:text-4xl">Nossos Valores</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Os princípios que guiam nossa atuação e nos conectam com nossos clientes.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card key={value.title} className="panel-elevated rounded-2xl border-0">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-cunha-navy">{value.title}</h3>
                    <p className="mt-3 text-muted-foreground">{value.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div ref={slidesTriggerRef}>
        {shouldRenderSlides ? (
          <Suspense
            fallback={
              <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="panel-elevated rounded-3xl p-6">
                  <p className="text-sm font-semibold text-muted-foreground">Carregando apresentação institucional...</p>
                </div>
              </section>
            }
          >
            <InstitutionalSlides />
          </Suspense>
        ) : (
          <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="panel-elevated rounded-3xl p-6">
              <p className="text-sm font-semibold text-muted-foreground">
                Role a página para carregar a apresentação institucional.
              </p>
            </div>
          </section>
        )}
      </div>

      <section className="hero-overlay py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 text-center sm:px-6 md:grid-cols-3 lg:px-8">
          <article>
            <Target className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-3xl font-semibold">Missão</h3>
            <p className="mt-3 text-white/85">
              Ser o parceiro logístico de confiança das empresas, oferecendo soluções de transporte seguras,
              eficientes e personalizadas.
            </p>
          </article>
          <article>
            <Award className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-3xl font-semibold">Visão</h3>
            <p className="mt-3 text-white/85">
              Ser reconhecida como referência em transporte logístico e corporativo, expandindo nossa atuação com
              excelência.
            </p>
          </article>
          <article>
            <Heart className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-3xl font-semibold">Compromisso</h3>
            <p className="mt-3 text-white/85">
              Tratar cada operação com dedicação máxima, construindo parcerias duradouras baseadas na confiança mútua.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="panel-elevated rounded-3xl p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-cunha-navy sm:text-4xl">Quer conhecer melhor nossos serviços?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Entre em contato conosco e descubra como podemos ser o parceiro ideal para sua empresa.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a
                href="https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contato">
                Formulário de Contato
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
