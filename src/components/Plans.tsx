import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Básico',
      percentage: '15%',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Gestão de anúncios Airbnb/Booking',
        'Atendimento aos hóspedes',
        'Limpeza básica entre estadias',
        'Check-in/out automatizado',
        'Relatórios mensais',
        'Suporte via WhatsApp'
      ],
      description: 'Ideal para quem está começando no aluguel por temporada',
      popular: false
    },
    {
      name: 'Intermediário',
      percentage: '20%',
      icon: Star,
      color: 'from-yellow-400 to-yellow-500',
      features: [
        'Tudo do plano Básico',
        'Limpeza profissional premium',
        'Reposição de amenities',
        'Fotos profissionais anuais',
        'Otimização de preços dinâmica',
        'Seguro contra danos incluso',
        'Manutenção preventiva',
        'Suporte 24/7'
      ],
      description: 'O mais escolhido! Perfeito equilíbrio entre custo e benefício',
      popular: true
    },
    {
      name: 'Premium',
      percentage: '25%',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Tudo do plano Intermediário',
        'Decoração e mobiliário consultivo',
        'Lavanderia premium inclusa',
        'Amenities de luxo personalizados',
        'Concierge para hóspedes VIP',
        'Marketing avançado',
        'Relatórios analíticos detalhados',
        'Gestor dedicado exclusivo'
      ],
      description: 'Para proprietários que buscam máxima rentabilidade e exclusividade',
      popular: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Escolha Seu Plano
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Planos flexíveis que se adaptam ao seu perfil e objetivos. 
            Você só paga uma porcentagem do que realmente faturar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular 
                  ? 'border-yellow-400 ring-4 ring-yellow-400/20' 
                  : 'border-gray-200 hover:border-yellow-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Pacote {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-blue-900">
                      {plan.percentage}
                    </span>
                    <span className="text-gray-600 ml-2">do faturamento</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('contato')}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  Quero este plano
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-gray-700 mb-6">
              Nossa equipe está pronta para te ajudar a encontrar o plano ideal para o seu imóvel
            </p>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;