import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quer transformar seu imóvel em uma
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              {" "}
              máquina de lucro{" "}
            </span>
            sem dor de cabeça?
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Fale com a BlueKey agora e descubra como podemos maximizar a
            rentabilidade do seu investimento!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                Grátis
              </div>
              <div className="text-blue-100">
                Consulta inicial sem compromisso
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24h</div>
              <div className="text-blue-100">Resposta para sua proposta</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">0%</div>
              <div className="text-blue-100">Taxa de setup inicial</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5521999999999?text=Olá! Tenho interesse em saber mais sobre a gestão de imóveis da BlueKey."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 min-w-[280px] justify-center"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => scrollToSection("contato")}
              className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 flex items-center space-x-3 min-w-[280px] justify-center"
            >
              <Phone className="h-6 w-6" />
              <span>Solicitar Ligação</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
