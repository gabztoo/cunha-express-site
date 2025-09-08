import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Package
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cunha-navy via-primary to-cunha-navy py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/uploads/van-passageiros.png"
            alt="Frota Cunha Express"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cunha-navy/90 via-cunha-navy/70 to-cunha-navy/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-8">
            <Badge className="bg-accent text-accent-foreground font-medium px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Certificado ANTT: RNTRC 053472755
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat leading-tight">
              Transporte Inteligente para o seu 
              <span className="text-accent"> Negócio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Soluções rápidas e seguras em logística de cargas e transporte corporativo de passageiros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-3">
                <Link to="/contato">
                  Solicitar um Orçamento
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-black hover:bg-white hover:text-cunha-navy">
                <Link to="/servicos">
                  Nossos Serviços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-4">
              Nossa Solução de Transporte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos serviço especializado em logística de cargas para atender todas as necessidades do seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/src/uploads/montana 2024.jpg"
                    alt="Montana 2024 Cunha Express para transporte de cargas"
                    className="w-full h-80 object-cover"
                  />
                  <p className="text-xs text-muted-foreground text-center mt-2 px-4 pb-2">
                    *Veículo sujeito a alteração dependendo do serviço
                  </p>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/src/uploads/fiorino novo.jpg"
                    alt="Fiorino Novo Cunha Express para transporte"
                    className="w-full h-60 object-cover"
                  />
                  <p className="text-xs text-muted-foreground text-center mt-2 px-4 pb-2">
                    *Veículo sujeito a alteração dependendo do serviço
                  </p>
                </div>
                

              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="bg-accent/10 text-accent mb-4">
                <Truck className="h-4 w-4 mr-2" />
                Transporte de Cargas
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                Cunha Cargas
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Oferecemos um serviço completo de logística de cargas. Somos especialistas em 
                transporte de equipamentos, mudanças residenciais e comerciais, e fretes em geral, 
                operando com base em agendamentos para garantir a pontualidade.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Transporte de equipamentos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Mudanças residenciais e comerciais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Fretes em geral</span>
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
      </section>

      {/* Features */}
      <section className="py-20 bg-cunha-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-4">
              Por que escolher a Cunha Express?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-2">
                Segurança Garantida
              </h3>
              <p className="text-muted-foreground">
                Certificação ANTT e seguro completo para total tranquilidade
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-2">
                Pontualidade
              </h3>
              <p className="text-muted-foreground">
                Compromisso com horários e prazos estabelecidos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-2">
                Confiabilidade
              </h3>
              <p className="text-muted-foreground">
                Experiência e profissionalismo em cada operação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cunha-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Pronto para otimizar sua logística?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Entre em contato conosco e descubra como podemos atender às necessidades do seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-3">
              <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                (22) 99255-9327
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-black hover:bg-white hover:text-cunha-navy">
              <Link to="/contato">
                Formulário de Contato
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;