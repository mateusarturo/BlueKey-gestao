import React from "react";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Apartamento moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-white/90 text-sm">Avaliação 5 estrelas</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme seu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              {" "}
              imóvel{" "}
            </span>
            em renda passiva
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Gestão profissional completa para Airbnb e Booking. Lucro garantido,
            sem complicações, sem dor de cabeça.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/SEUNUMERO?text=Oi%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Falar com Especialista</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => scrollToSection("sobre")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Saiba Mais
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                100+
              </div>
              <div className="text-white/80">Imóveis Gerenciados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-white/80">Taxa de Ocupação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-white/80">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
