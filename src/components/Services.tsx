import React from 'react';
import { 
  Home, 
  HeadphonesIcon, 
  Sparkles, 
  KeyRound, 
  Package, 
  Wrench 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Gestão Completa Airbnb & Booking',
      description: 'Otimização de anúncios, gestão de reservas, precificação dinâmica e comunicação com hóspedes',
      features: ['Fotos profissionais', 'Descrições otimizadas', 'Calendário sincronizado']
    },
    {
      icon: HeadphonesIcon,
      title: 'Atendimento 24h aos Hóspedes',
      description: 'Suporte completo antes, durante e após a estadia para garantir a melhor experiência',
      features: ['Chat multiidioma', 'Suporte emergencial', 'Orientações detalhadas']
    },
    {
      icon: Sparkles,
      title: 'Limpeza & Lavanderia Profissional',
      description: 'Serviços de limpeza especializada e lavanderia de roupas de cama e banho',
      features: ['Produtos premium', 'Equipe treinada', 'Padrão hoteleiro']
    },
    {
      icon: KeyRound,
      title: 'Check-in/Check-out Inteligente',
      description: 'Sistema automatizado de entrada e saída com tecnologia smart locks e orientações digitais',
      features: ['Acesso por código', 'Instruções via app', 'Processo sem contato']
    },
    {
      icon: Package,
      title: 'Reposição de Insumos',
      description: 'Gerenciamento completo de amenities, produtos de limpeza, papel higiênico e itens essenciais',
      features: ['Estoque automático', 'Produtos de qualidade', 'Reposição programada']
    },
    {
      icon: Wrench,
      title: 'Manutenção & Administração de Danos',
      description: 'Cuidados preventivos, reparos emergenciais e gestão de seguros contra danos',
      features: ['Manutenção preventiva', 'Rede de parceiros', 'Seguro incluso']
    }
  ];

  return (
    <section id="serviços" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Oferecemos uma solução completa para transformar seu imóvel em uma fonte de renda consistente e lucrativa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-2xl w-fit mb-6">
                <service.icon className="h-8 w-8 text-blue-900" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-blue-200 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tudo isso sem você se preocupar com nada!
            </h3>
            <p className="text-blue-100 text-lg">
              Enquanto você recebe sua renda mensal, nós cuidamos de todos os detalhes para garantir a satisfação dos hóspedes e a proteção do seu patrimônio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;