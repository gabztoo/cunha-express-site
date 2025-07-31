import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
    
    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      servico: "",
      mensagem: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-cunha-navy to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            Fale Conosco e Solicite seu Orçamento
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades de transporte logístico e corporativo
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-cunha-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* WhatsApp Principal */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-2">
                  WhatsApp Principal
                </h3>
                <p className="text-muted-foreground mb-4">Atendimento rápido e direto</p>
                <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                  <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    (22) 99255-9327
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Telefone/WhatsApp Secundário */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-2">
                  Telefone/WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">Linha alternativa</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://wa.me/5522981005651" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    (22) 98100-5651
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Horário de Atendimento */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="bg-cunha-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-cunha-navy" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-cunha-navy mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-muted-foreground mb-2">Segunda a Sexta</p>
                <p className="text-cunha-navy font-medium">07:00 às 18:00</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Emergências 24h via WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-cunha-navy mb-4">
              Solicite seu Orçamento
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato em breve
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-cunha-light-gray">
              <CardTitle className="text-2xl font-montserrat text-cunha-navy flex items-center">
                <Mail className="h-6 w-6 mr-3 text-accent" />
                Formulário de Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="servico">Serviço de Interesse</Label>
                    <Select value={formData.servico} onValueChange={(value) => handleInputChange("servico", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cunha-cargas">Cunha Cargas - Logística Empresarial</SelectItem>
                        <SelectItem value="cunha-corporativo">Cunha Corporativo - Transporte de Passageiros</SelectItem>
                        <SelectItem value="ambos">Ambos os serviços</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Conte-nos mais sobre suas necessidades de transporte..."
                    className="min-h-32"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange("mensagem", e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="bg-accent hover:bg-accent/90 flex-1">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                  
                  <Button asChild variant="outline" className="flex-1">
                    <a href="https://wa.me/5522992559327" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Direto
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificação Info */}
      <section className="py-16 bg-cunha-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-accent mr-4" />
            <div className="text-left">
              <h3 className="text-2xl font-bold font-montserrat text-white">
                Certificado ANTT
              </h3>
              <p className="text-gray-200">RNTRC 053472755</p>
            </div>
          </div>
          <p className="text-lg text-gray-200">
            Transportador Autônomo de Cargas regulamentado pela Agência Nacional de Transportes Terrestres
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;