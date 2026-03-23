import { type FormEvent, useState } from "react";
import { CheckCircle, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "5522981005651";

const proposalOptions = [
  "Frete Dedicado Empresarial",
  "Transporte de Equipamentos",
  "Transferência entre Filiais",
  "Mudança Corporativa",
  "Entrega Expressa Empresarial",
  "Coleta Programada",
  "Coleta e Distribuição",
  "Abastecimento de Estoque",
  "Logística Recorrente B2B",
  "Fretes B2B em Geral",
  "Outro",
];

const deliveryTimeOptions = [
  "Até 2 horas",
  "Até 4 horas",
  "Mesmo dia",
  "24 horas",
  "48 horas",
  "A combinar",
];

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp Principal",
    text: "Atendimento rápido e direto",
    buttonLabel: "(22) 98100-5651",
    href: "https://wa.me/5522981005651?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F",
    buttonVariant: "default" as const,
    buttonClass: "bg-green-600 hover:bg-green-700 text-white",
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    text: "Linha alternativa",
    buttonLabel: "(22) 99255-9327",
    href: "https://wa.me/5522992559327",
    buttonVariant: "outline" as const,
    buttonClass: "border border-input bg-background text-cunha-navy hover:bg-secondary",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    text: "Segunda a Sexta",
    detail: "07:00 às 18:00",
    note: "Emergências 24h via WhatsApp",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    proposta: "",
    propostaOutro: "",
    tempoEntrega: "",
    mensagem: "",
  });
  const [error, setError] = useState("");

  const handleFieldChange = (
    field: "nome" | "proposta" | "propostaOutro" | "tempoEntrega" | "mensagem",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nome = formData.nome.trim();
    const proposta = formData.proposta.trim();
    const propostaOutro = formData.propostaOutro.trim();
    const tempoEntrega = formData.tempoEntrega.trim();
    const mensagem = formData.mensagem.trim();
    const propostaFinal = proposta === "Outro" ? `Outro: ${propostaOutro}` : proposta;

    if (!nome || !proposta || !tempoEntrega || !mensagem || (proposta === "Outro" && !propostaOutro)) {
      setError("Preencha Nome, Proposta, Tempo a ser entregue e Mensagem para enviar no WhatsApp.");
      return;
    }

    setError("");

    const whatsappText = [
      "Olá, equipe Cunha Express!",
      "",
      `Nome: ${nome}`,
      `Proposta: ${propostaFinal}`,
      `Tempo a ser entregue: ${tempoEntrega}`,
      "",
      "Mensagem:",
      mensagem,
      "",
      "Aguardo retorno. Obrigado!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <section className="hero-overlay py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Fale Conosco e Solicite seu Orçamento</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/85 sm:text-lg">
            Estamos prontos para atender suas necessidades de transporte logístico e corporativo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card key={card.title} className="panel-elevated rounded-2xl border-0">
                <CardContent className="p-5 text-center sm:p-7">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-semibold text-cunha-navy">{card.title}</h2>
                  <p className="mt-2 text-muted-foreground">{card.text}</p>

                  {card.href ? (
                    <Button asChild variant={card.buttonVariant} className={`mt-5 w-full ${card.buttonClass}`}>
                      <a href={card.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {card.buttonLabel}
                      </a>
                    </Button>
                  ) : (
                    <>
                      <p className="mt-4 text-lg font-semibold text-cunha-navy">{card.detail}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{card.note}</p>
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-cunha-navy sm:text-4xl">Solicite sua Proposta</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Preencha os campos abaixo para abrir sua solicitação empresarial direto no WhatsApp.
          </p>
        </div>

        <Card className="panel-elevated mt-8 overflow-hidden rounded-2xl border-0">
          <CardHeader className="border-b border-border bg-white/70">
            <CardTitle className="flex items-center text-2xl font-semibold text-cunha-navy">
              <Mail className="mr-3 h-6 w-6 text-accent" aria-hidden="true" />
              Formulário de Contato no WhatsApp
            </CardTitle>
          </CardHeader>

          <CardContent className="p-5 sm:p-7">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5" noValidate>
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-semibold text-cunha-navy">
                  Nome
                </label>
                <Input
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  placeholder="Digite seu nome completo…"
                  className="min-h-[44px]"
                  value={formData.nome}
                  onChange={(event) => handleFieldChange("nome", event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="proposta" className="text-sm font-semibold text-cunha-navy">
                  Proposta
                </label>
                <select
                  id="proposta"
                  name="proposta"
                  className="flex min-h-[44px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.proposta}
                  onChange={(event) => handleFieldChange("proposta", event.target.value)}
                >
                  <option value="">Selecione uma proposta</option>
                  {proposalOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {formData.proposta === "Outro" && (
                <div className="space-y-2">
                  <label htmlFor="proposta-outro" className="text-sm font-semibold text-cunha-navy">
                    Qual proposta?
                  </label>
                  <Input
                    id="proposta-outro"
                    name="proposta_outro"
                    autoComplete="off"
                    placeholder="Descreva a proposta desejada…"
                    className="min-h-[44px]"
                    value={formData.propostaOutro}
                    onChange={(event) => handleFieldChange("propostaOutro", event.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="tempo-entrega" className="text-sm font-semibold text-cunha-navy">
                  Tempo a ser entregue
                </label>
                <select
                  id="tempo-entrega"
                  name="tempo_entrega"
                  className="flex min-h-[44px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.tempoEntrega}
                  onChange={(event) => handleFieldChange("tempoEntrega", event.target.value)}
                >
                  <option value="">Selecione o prazo</option>
                  {deliveryTimeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-semibold text-cunha-navy">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva sua necessidade logística B2B…"
                  className="min-h-32"
                  value={formData.mensagem}
                  onChange={(event) => handleFieldChange("mensagem", event.target.value)}
                />
              </div>

              {error && (
                <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <Button type="submit" className="min-h-[44px] w-full bg-green-600 text-white hover:bg-green-700">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Enviar no WhatsApp
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Ao clicar em enviar, abriremos o WhatsApp com sua solicitação preenchida.
              </p>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="hero-overlay py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CheckCircle className="h-12 w-12 text-accent" aria-hidden="true" />
            <div>
              <h3 className="text-3xl font-semibold">Certificado ANTT</h3>
              <p className="text-white/85">RNTRC 053472755</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-white/85">
            Transportador Autônomo de Cargas regulamentado pela Agência Nacional de Transportes Terrestres.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

