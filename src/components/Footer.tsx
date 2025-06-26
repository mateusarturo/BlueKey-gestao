import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Shield,
  FileText
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
            </div>
            
            <p className="text-blue-100 text-lg leading-relaxed mb-6 max-w-md">
              Especialistas em transformar imóveis em fontes de renda passiva. 
              Gestão completa para Airbnb e Booking com máxima rentabilidade e zero preocupação.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <div className="font-semibold text-yellow-400">Licenciado & Segurado</div>
                <div className="text-blue-200 text-sm">CNPJ: -----------------</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 p-4 rounded-2xl border border-yellow-400/30">
              <div className="text-yellow-400 font-bold mb-2">🏆 Certificações</div>
              <div className="text-blue-100 text-sm">
                • Superhost Partner Airbnb<br/>
                • Booking.com Preferred Partner<br/>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contato</h3>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/------------"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-100 hover:text-yellow-400 transition-colors group"
              >
                <div className="bg-blue-800 p-2 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm">--------------</div>
                </div>
              </a>

              <a
                href="tel:------------"
                className="flex items-center space-x-3 text-blue-100 hover:text-yellow-400 transition-colors group"
              >
                <div className="bg-blue-800 p-2 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Telefone</div>
                  <div className="text-sm">----------------</div>
                </div>
              </a>

              <a
                href="mailto:contato@bluekeygestao.com.br"
                className="flex items-center space-x-3 text-blue-100 hover:text-yellow-400 transition-colors group"
              >
                <div className="bg-blue-800 p-2 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">E-mail</div>
                  <div className="text-sm">bluekeygestoes@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-blue-100">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Endereço</div>
                  <div className="text-sm">Volta Redonda, RJ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>

            <h4 className="font-semibold mb-4 text-yellow-400">Links Importantes</h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center text-blue-100 hover:text-yellow-400 transition-colors text-sm">
                <FileText className="h-4 w-4 mr-2" />
                Política de Privacidade
              </a>
              <a href="#" className="flex items-center text-blue-100 hover:text-yellow-400 transition-colors text-sm">
                <FileText className="h-4 w-4 mr-2" />
                Termos de Serviço
              </a>
              <a href="#" className="flex items-center text-blue-100 hover:text-yellow-400 transition-colors text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Certificações
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section in Footer */}
        <div className="border-t border-blue-800 pt-12 mt-12">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-8 rounded-3xl border border-yellow-400/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar a lucrar com seu imóvel?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Entre em contato agora e receba uma análise gratuita do potencial de rentabilidade do seu imóvel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/-------?text=Olá! Quero uma análise gratuita do meu imóvel."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all"
              >
                Análise Gratuita via WhatsApp
              </a>
              <a
                href="mailto:bluekeygestoes@gmail.com?subject=Solicitar Análise de Rentabilidade"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                Solicitar por E-mail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
            <div className="mb-4 md:mb-0">
              © {currentYear} BlueKey Gestão. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <span>CNPJ: --------</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;