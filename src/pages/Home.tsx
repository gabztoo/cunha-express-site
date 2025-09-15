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
            src="/uploads/kia bongo.jpg"
            alt="Transporte de cargas Cunha Express - Frota especializada"
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
              Transporte de Cargas 
              <span className="text-accent"> Especializado</span>
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
              Transporte de Cargas Profissional
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
                    src="/uploads/mitsubishi-l200-triton-sport-2017-1.webp"
                    alt="Transporte de cargas Montana 2024 Cunha Express - Veículo especializado"
                    className="w-full h-80 object-cover"
                  />
                  <p className="text-xs text-muted-foreground text-center mt-2 px-4 pb-2">
                    *Veículo sujeito a alteração dependendo do serviço
                  </p>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/uploads/fiorino novo.jpg"
                    alt="Transporte de cargas Fiorino Novo Cunha Express - Logística especializada"
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
              
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                Cunha Express - Transporte de Cargas
              </h3>
              
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
                  <span>Frete dedicado</span>
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

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                Especialistas em Transporte de Cargas
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Cunha Express é uma empresa especializada em transporte de cargas que atua no mercado 
                oferecendo soluções completas em logística. Nossa experiência no setor de transporte de cargas 
                nos permite atender desde pequenas empresas até grandes corporações, sempre com o mesmo 
                compromisso de qualidade e pontualidade.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso serviço de transporte de cargas abrange mudanças residenciais e comerciais, 
                transporte de equipamentos industriais, fretes expressos e logística programada. 
                Contamos com uma frota moderna e motoristas experientes para garantir que sua carga 
                chegue ao destino com total segurança.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                O transporte de cargas da Cunha Express é certificado pela ANTT (Agência Nacional de 
                Transportes Terrestres) sob o registro RNTRC 053472755, garantindo que todos os nossos 
                serviços estejam em conformidade com as normas brasileiras de transporte de cargas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-cunha-navy mb-6">
                Nossos Diferenciais no Transporte de Cargas
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-cunha-navy mb-2">Agendamento Programado</h4>
                  <p className="text-muted-foreground">
                    Nosso sistema de transporte de cargas funciona com agendamento prévio, 
                    garantindo pontualidade e organização em todas as operações.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-cunha-navy mb-2">Seguro Completo</h4>
                  <p className="text-muted-foreground">
                    Todo transporte de cargas realizado pela Cunha Express conta com seguro 
                    completo, oferecendo tranquilidade total aos nossos clientes.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-cunha-navy mb-2">Frota Especializada</h4>
                  <p className="text-muted-foreground">
                    Nossa frota para transporte de cargas é composta por veículos modernos e 
                    bem conservados, adequados para diferentes tipos de carga e distâncias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-cunha-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-4">
              Por que escolher nosso Transporte de Cargas?
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
              <a href="https://wa.me/5522981005651" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                (22) 98100-5651
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