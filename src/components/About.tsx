import React from 'react';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  type Feature = {
    icon: React.ElementType;
    title: string;
    description: string;
  };

  const features: Feature[] = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Cobertura completa contra danos e gestão de riscos'
    },
    {
      icon: TrendingUp,
      title: 'Lucro Maximizado',
      description: 'Estratégias de pricing inteligente para melhor rentabilidade'
    },
    {
      icon: Users,
      title: 'Experiência Premium',
      description: 'Atendimento excepcional que gera avaliações 5 estrelas'
    },
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description: 'Anos de experiência e centenas de clientes satisfeitos'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Especialistas em Transformar Imóveis em 
              <span className="text-yellow-500"> Fontes de Renda</span>
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A BlueKey Gestão é uma empresa especializada em transformar imóveis comuns 
              em fontes de renda passiva com gestão profissional e sem complicações. 
              Atuamos em todas as etapas do processo de locação por temporada, garantindo 
              tranquilidade, lucro e excelência na experiência dos hóspedes.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa missão é proporcionar aos proprietários a oportunidade de maximizar 
              seus investimentos imobiliários, enquanto oferecemos aos hóspedes experiências 
              memoráveis e confortáveis.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Apartamento elegante"
                className="rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Interior moderno"
                className="rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">R$ 8.500</div>
                <div className="text-sm text-gray-600">Renda média mensal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;