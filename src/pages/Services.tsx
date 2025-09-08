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
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <Badge className="bg-accent/10 text-accent mb-6 px-4 py-2">
                    <Package className="h-4 w-4 mr-2" />
                    Logística Empresarial
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6 leading-tight">
                    Cunha Cargas
                    <span className="block text-accent text-2xl md:text-3xl mt-2">
                      Entrega Expressa de Cargas
                    </span>
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Na Cunha Cargas, sua entrega é tratada como <strong className="text-cunha-navy">prioridade</strong>. 
                      Realizamos o transporte de cargas, peças e equipamentos com agilidade máxima, 
                      sem abrir mão da segurança e pontualidade.
                    </p>
                    
                    <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-gray-700 flex items-start">
                        <span className="text-2xl mr-3">🚚</span>
                        <span>Coletamos no ponto de origem e entregamos no destino com rapidez, 
                        ideal para demandas urgentes e movimentação imediata entre bases, 
                        fornecedores e clientes.</span>
                      </p>
                    </div>
                    
                    <p className="text-lg font-semibold text-cunha-navy">
                      Com a gente, sua carga chega rápido, segura e no prazo certo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">Coleta e entrega programada</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">Transporte de peças e equipamentos</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">Movimentação entre bases empresariais</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">Rastreamento em tempo real</span>
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-lg">
                    <Link to="/contato">
                      Solicitar Orçamento
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="relative lg:min-h-[600px] flex items-center justify-center p-8">
                   <div className="w-full max-w-lg">
                     <img 
                       src="/src/uploads/kia bongo.jpg"
                       alt="Kia Bongo Cunha Express para transporte de cargas"
                       className="w-full h-80 object-cover rounded-xl shadow-lg"
                     />
                     <div className="mt-4 text-center">
                       <h3 className="font-bold text-cunha-navy text-lg">Kia Bongo</h3>
                       <p className="text-gray-600">Veículo especializado para transporte de cargas</p>
                     </div>
                   </div>
                 </div>
              </div>
            </Card>


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
            <a href="https://wa.me/5522992559327?text=Oi%2C%20tudo%20bem%3F%20Quero%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20passar%20uma%20proposta%3F" target="_blank" rel="noopener noreferrer">
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