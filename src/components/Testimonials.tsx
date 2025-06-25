import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Paula Santos',
      role: 'Proprietária - Copacabana',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Desde que entreguei meu apartamento para a BlueKey, não precisei me preocupar com nada. Lucro todo mês e hóspedes sempre satisfeitos! Minha renda aumentou 40% comparado à locação tradicional.',
      revenue: 'R$ 9.200/mês'
    },
    {
      name: 'Carlos Mendes',
      role: 'Investidor - Barra da Tijuca',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Profissionalismo exemplar! A equipe cuida de tudo nos mínimos detalhes. Meus três apartamentos sempre com alta ocupação e hóspedes elogiando o atendimento. Recomendo de olhos fechados!',
      revenue: 'R$ 23.500/mês'
    },
    {
      name: 'Mariana Costa',
      role: 'Proprietária - Ipanema',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Era cética no início, mas os resultados falam por si só. Apartamento sempre impecável, hóspedes felizes e eu recebendo minha renda sem stress. A BlueKey transformou meu investimento!',
      revenue: 'R$ 11.800/mês'
    },
    {
      name: 'Roberto Silva',
      role: 'Empresário - Leblon',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Como empresário, valorizo a eficiência. A BlueKey superou todas as expectativas! Gestão impecável, relatórios detalhados e rentabilidade acima do mercado. Parceria de longo prazo garantida.',
      revenue: 'R$ 15.600/mês'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Histórias reais de proprietários que transformaram seus imóveis em fontes de renda consistente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400"
                />
                <div className="ml-4">
                  <h4 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-200 text-sm">
                    {testimonial.role}
                  </p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-yellow-400/50 absolute -top-2 -left-2" />
                <p className="text-blue-100 text-lg leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 p-4 rounded-2xl border border-yellow-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 font-medium">Renda Mensal:</span>
                  <span className="text-yellow-400 font-bold text-xl">
                    {testimonial.revenue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer ser o próximo case de sucesso?
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Centenas de proprietários já descobriram como transformar seus imóveis em máquinas de lucro. 
              Chegou a sua vez!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-yellow-400/20 p-4 rounded-2xl border border-yellow-400/30">
                <div className="text-2xl font-bold text-yellow-400 mb-1">4.9/5</div>
                <div className="text-blue-200 text-sm">Avaliação média</div>
              </div>
              <div className="bg-yellow-400/20 p-4 rounded-2xl border border-yellow-400/30">
                <div className="text-2xl font-bold text-yellow-400 mb-1">250+</div>
                <div className="text-blue-200 text-sm">Clientes satisfeitos</div>
              </div>
              <div className="bg-yellow-400/20 p-4 rounded-2xl border border-yellow-400/30">
                <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                <div className="text-blue-200 text-sm">Taxa de renovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;