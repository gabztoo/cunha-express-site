import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Users, 
  Target, 
  Heart, 
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-cunha-navy to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            Confiança e Profissionalismo em Cada Trajeto
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conheça nossa história e os valores que nos guiam na prestação de serviços de excelência
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent/10 text-accent mb-4">
                <Heart className="h-4 w-4 mr-2" />
                Nossa História
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                Nascemos da paixão por logística
              </h2>
              
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  A Cunha Express nasceu da paixão por logística e do compromisso em oferecer 
                  um serviço de transporte diferenciado. Liderada por <strong>Gustavo Cunha</strong>, 
                  transportador autônomo de cargas com registro na ANTT, nossa missão é ser o 
                  parceiro que sua empresa pode confiar.
                </p>
                
                <p>
                  Entendemos que cada entrega e cada viagem são cruciais para o seu negócio, 
                  por isso tratamos cada operação com a máxima prioridade e cuidado. 
                  Não somos apenas uma transportadora, somos uma extensão da sua equipe.
                </p>
                
                <p>
                  Nossa experiência no mercado de transporte, combinada com o conhecimento 
                  das necessidades específicas de cada empresa, nos permite oferecer soluções 
                  personalizadas e eficientes para cada cliente.
                </p>
              </div>
            </div>

            <div className="bg-cunha-light-gray rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-24 w-24 text-accent mx-auto mb-4" />
                <p className="text-cunha-dark-gray">
                  Imagem: Gustavo Cunha e equipe em frente aos veículos da empresa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-cunha-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e nos conectam com nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-3">
                  Confiabilidade
                </h3>
                <p className="text-muted-foreground">
                  Construímos relacionamentos baseados na confiança e no cumprimento de compromissos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-3">
                  Excelência
                </h3>
                <p className="text-muted-foreground">
                  Buscamos a perfeição em cada operação, superando expectativas constantemente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-3">
                  Comprometimento
                </h3>
                <p className="text-muted-foreground">
                  Tratamos cada cliente como parceiro, dedicando atenção especial às suas necessidades
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificações e Diferenciais */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-cunha-light-gray rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Award className="h-24 w-24 text-accent mx-auto mb-4" />
                <p className="text-cunha-dark-gray">
                  Imagem: Certificado ANTT e outras credenciais da empresa
                </p>
              </div>
            </div>

            <div>
              <Badge className="bg-accent/10 text-accent mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Certificações
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-6">
                Regulamentação e Segurança
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-cunha-navy">Certificado ANTT</h4>
                    <p className="text-muted-foreground">RNTRC 053472755 - Registro Nacional de Transportadores Rodoviários de Cargas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-cunha-navy">Seguro Completo</h4>
                    <p className="text-muted-foreground">Cobertura total para cargas e passageiros durante o transporte</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-cunha-navy">Documentação em Dia</h4>
                    <p className="text-muted-foreground">Todos os documentos e licenças sempre atualizados</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-cunha-navy">Frota Própria</h4>
                    <p className="text-muted-foreground">Veículos próprios com manutenção preventiva regular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-cunha-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-4">Missão</h3>
              <p className="text-gray-200">
                Ser o parceiro logístico de confiança das empresas, oferecendo soluções 
                de transporte seguras, eficientes e personalizadas.
              </p>
            </div>
            
            <div>
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-4">Visão</h3>
              <p className="text-gray-200">
                Ser reconhecida como referência em transporte logístico e corporativo, 
                expandindo nossa atuação e mantendo a excelência.
              </p>
            </div>
            
            <div>
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-4">Compromisso</h3>
              <p className="text-gray-200">
                Tratar cada operação com dedicação máxima, construindo parcerias 
                duradouras baseadas na confiança mútua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cunha-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-montserrat text-cunha-navy mb-4">
            Quer conhecer melhor nossos serviços?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato conosco e descubra como podemos ser o parceiro ideal para sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contato">
                Formulário de Contato
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;