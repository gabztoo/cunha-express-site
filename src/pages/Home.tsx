import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Phone, Shield, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trustItems = [
  "Certificado ANTT RNTRC 053472755",
  "Seguro completo para cargas",
  "Atendimento rápido via WhatsApp",
];

const serviceHighlights = [
  "Transporte de equipamentos",
  "Frete dedicado",
  "Fretes em geral",
  "Agendamento programado",
];

const featureCards = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Certificação ANTT e seguro completo para total tranquilidade.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Compromisso com horários e prazos estabelecidos.",
  },
  {
    icon: CheckCircle,
    title: "Confiabilidade",
    description: "Experiência e profissionalismo em cada operação.",
  },
];

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-overlay absolute inset-0" />

        <img
          src="/uploads/kia bongo.jpg"
          alt="Frota Cunha Express em operação"
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 md:pb-20 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:pb-24">
          <div className="text-white">
            <Badge className="mb-5 border border-white/30 bg-white/10 px-3 py-1 text-white hover:bg-white/15">
              <Shield className="mr-2 h-4 w-4" aria-hidden="true" />
              Certificado ANTT: RNTRC 053472755
            </Badge>

            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              Entregas Express <span className="text-accent">no Rio de Janeiro</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-xl">
              Entregas express rápidas e seguras. Logística especializada com pontualidade garantida.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contato">
                  Solicitar um Orçamento
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              >
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <p key={item} className="metric-chip">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-white/20 bg-cunha-navy/85 p-5 text-white shadow-2xl backdrop-blur-sm">
            <img
              src="/uploads/mitsubishi-l200-triton-sport-2017-1.webp"
              alt="Veículo especializado para transporte de cargas"
              width={960}
              height={720}
              className="h-64 w-full rounded-xl object-cover"
            />
            <p className="mt-3 text-xs text-white/80">*Veículo sujeito a alteração dependendo do serviço.</p>

            <div className="mt-5 space-y-3">
              <p className="section-kicker border-white/25 bg-white/10 text-white">Operação Programada</p>
              <h2 className="text-3xl font-semibold leading-tight">Cunha Express - Entregas Express</h2>
              <p className="text-sm leading-relaxed text-white/80">
                Especialistas em entregas urgentes, transporte rápido de equipamentos e fretes expressos para empresas.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-4 md:grid-cols-4">
          <article className="panel-elevated rounded-2xl p-5">
            <p className="section-kicker">Credencial</p>
            <h2 className="mt-3 text-2xl font-semibold text-cunha-navy">ANTT Ativo</h2>
            <p className="mt-2 text-sm text-muted-foreground">RNTRC 053472755 com regularização em dia.</p>
          </article>

          <article className="panel-elevated rounded-2xl p-5">
            <p className="section-kicker">Tempo de Resposta</p>
            <h2 className="mt-3 text-2xl font-semibold text-cunha-navy">Atendimento Direto</h2>
            <p className="mt-2 text-sm text-muted-foreground">Contato rápido pelo WhatsApp para operações urgentes.</p>
          </article>

          <article className="panel-elevated rounded-2xl p-5">
            <p className="section-kicker">Modelo</p>
            <h2 className="mt-3 text-2xl font-semibold text-cunha-navy">Frete Dedicado</h2>
            <p className="mt-2 text-sm text-muted-foreground">Atendimento orientado por agendamento e prioridade de carga.</p>
          </article>

          <article className="panel-elevated rounded-2xl p-5">
            <p className="section-kicker">Cobertura</p>
            <h2 className="mt-3 text-2xl font-semibold text-cunha-navy">Logística RJ</h2>
            <p className="mt-2 text-sm text-muted-foreground">Operação de entregas express no Rio de Janeiro.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <div className="order-2 mt-8 space-y-4 lg:order-1 lg:mt-0">
          <div className="panel-elevated rounded-2xl p-3">
            <img
              src="/uploads/fiorino novo.jpg"
              alt="Frota de apoio para cargas urbanas"
              width={960}
              height={640}
              loading="lazy"
              className="h-64 w-full rounded-xl object-cover"
            />
            <p className="px-2 pb-1 pt-3 text-xs text-muted-foreground">*Veículo sujeito a alteração dependendo do serviço.</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-kicker">
            <Truck className="mr-2 h-4 w-4" aria-hidden="true" />
            Transporte de Cargas Profissional
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-cunha-navy sm:text-4xl">Logística especializada para seu negócio</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Oferecemos entregas express com agilidade e segurança. Somos especialistas em entregas urgentes,
            transporte rápido de equipamentos e fretes expressos, operando com base em agendamentos
            para garantir a pontualidade.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <p key={item} className="panel-elevated flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-cunha-navy">
                <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>

          <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contato">
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-white/70 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article>
            <h2 className="text-3xl font-semibold text-cunha-navy sm:text-4xl">Especialistas em Entregas Express</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A Cunha Express é uma empresa especializada em entregas express que atua no mercado oferecendo
              soluções rápidas em logística. Nossa experiência no setor de entregas express nos permite atender
              desde pequenas empresas até grandes corporações, sempre com o mesmo compromisso de agilidade e
              pontualidade.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Nosso serviço de entregas express abrange transporte urgente de equipamentos industriais, transferências
              entre unidades, entregas expressas e logística programada. Contamos com uma frota moderna e motoristas
              experientes para garantir que suas operações cheguem ao destino com total segurança e agilidade.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              As entregas express da Cunha Express são certificadas pela ANTT sob o registro RNTRC 053472755,
              garantindo que todos os nossos serviços estejam em conformidade com as normas brasileiras de transporte.
            </p>
          </article>

          <article className="panel-elevated rounded-2xl p-6">
            <h2 className="text-3xl font-semibold text-cunha-navy">Nossos Diferenciais em Entregas Express</h2>
            <div className="mt-6 space-y-5">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold text-cunha-navy">Agendamento Programado</h3>
                <p className="mt-1 text-muted-foreground">
                  Nosso sistema de transporte de cargas funciona com agendamento prévio, garantindo pontualidade e
                  organização em todas as operações.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold text-cunha-navy">Seguro Completo</h3>
                <p className="mt-1 text-muted-foreground">
                  Todo transporte de cargas realizado pela Cunha Express conta com seguro completo, oferecendo
                  tranquilidade total aos nossos clientes.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold text-cunha-navy">Frota Especializada</h3>
                <p className="mt-1 text-muted-foreground">
                  Nossa frota para transporte de cargas é composta por veículos modernos e bem conservados, adequados
                  para diferentes tipos de carga e distâncias.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-3xl font-semibold text-cunha-navy sm:text-4xl">Por que escolher nossas Entregas Express?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="panel-elevated rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-cunha-navy">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mb-4 max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-10">
        <div className="hero-overlay rounded-3xl p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Pronto para otimizar sua logística?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/85">
            Entre em contato conosco e descubra como podemos atender às necessidades do seu negócio.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/5522981005651" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" aria-hidden="true" />
                (22) 98100-5651
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 bg-white/5 text-white hover:bg-white/15 hover:text-white">
              <Link to="/contato">Formulário de Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
