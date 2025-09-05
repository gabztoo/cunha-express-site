import { Phone, Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cunha-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/cunha-express-logo.png" 
              alt="Cunha Express"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              Soluções em Transporte Logístico e Corporativo. 
              Transporte inteligente para o seu negócio.
            </p>
          </div>

          {/* Contatos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-montserrat">Contatos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-gray-300">WhatsApp:</p>
                  <a 
                    href="https://wa.me/5522992559327" 
                    className="text-white hover:text-accent transition-colors"
                  >
                    (22) 99255-9327
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-gray-300">Telefone/WhatsApp:</p>
                  <a 
                    href="https://wa.me/5522981005651" 
                    className="text-white hover:text-accent transition-colors"
                  >
                    (22) 98100-5651
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-montserrat">Certificações</h3>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm text-gray-300">Certificado ANTT</p>
                <p className="text-white font-medium">RNTRC 053472755</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Cunha Express. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Transportador Autônomo de Cargas - Gustavo Cunha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;