import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Package, 
  Users, 
  Truck, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Phone
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-cunha-navy to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            Nossas Soluções de Transporte
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Oferecemos serviços especializados para atender todas as necessidades logísticas da sua empresa
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            
            {/* Cunha Cargas */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-accent/10 text-accent mb-4">
                  <Package className="h-4 w-4 mr-2" />
                  Logística Empresarial
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                  Cunha Cargas
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Realizamos o transporte de suas cargas, peças e equipamentos com a máxima eficiência. 
                  Coletamos no seu ponto de origem e entregamos no destino com total segurança e pontualidade. 
                  Ideal para movimentação de materiais entre bases, fornecedores e clientes.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Coleta e entrega programada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Transporte de peças e equipamentos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Movimentação entre bases empresariais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Rastreamento em tempo real</span>
                  </div>
                </div>

                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/caminhao-bongo.png"
                  alt="Caminhão Cunha Express para transporte de cargas e equipamentos"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Cunha Corporativo */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/van-fiorino.png"
                    alt="Van Fiat Fiorino Cunha Express para transporte corporativo de passageiros"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <Badge className="bg-accent/10 text-accent mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  Transporte Executivo
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                  Cunha Corporativo
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Oferecemos um serviço de transporte executivo para seus colaboradores. 
                  Somos especialistas em traslados para aeroportos, viagens de negócios e transporte 
                  para eventos corporativos, operando com base em agendamentos para garantir a pontualidade.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Traslados para aeroportos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Viagens de negócios</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Transporte para eventos corporativos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Agendamento programado</span>
                  </div>
                </div>

                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-cunha-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna a escolha ideal para suas necessidades de transporte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold font-montserrat text-cunha-navy mb-2">
                  Certificação ANTT
                </h3>
                <p className="text-sm text-muted-foreground">
                  RNTRC 053472755 - Regularizado e autorizado
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold font-montserrat text-cunha-navy mb-2">
                  Pontualidade
                </h3>
                <p className="text-sm text-muted-foreground">
                  Compromisso com horários e prazos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold font-montserrat text-cunha-navy mb-2">
                  Rastreamento
                </h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe sua carga em tempo real
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold font-montserrat text-cunha-navy mb-2">
                  Agendamento
                </h3>
                <p className="text-sm text-muted-foreground">
                  Planejamento flexível conforme sua necessidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cunha-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-montserrat text-white mb-4">
            Precisa de uma solução personalizada?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Entre em contato conosco e vamos encontrar a melhor solução para o seu negócio
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
              <Phone className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;