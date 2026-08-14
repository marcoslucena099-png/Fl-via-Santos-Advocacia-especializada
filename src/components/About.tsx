import { motion } from 'framer-motion';
import { Instagram, Scale, BookOpen, Award } from 'lucide-react';
import { LiquidMetalButton } from "./ui/liquid-metal-button";

export default function About() {
  return (
    <section id="sobre" className="py-8 lg:py-12 bg-brand-surface relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] bg-gold-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[30%] h-[40%] bg-white/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8 }}
            className="relative max-h-[300px] md:max-h-[400px] lg:max-h-[500px] flex justify-center"
          >
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-none aspect-square lg:aspect-[4/5] max-h-[300px] md:max-h-[400px] lg:max-h-[500px] relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              {/* Overlay for a premium look */}
              <div className="absolute inset-0 bg-brand-dark/20 z-10 mix-blend-multiply"></div>
              <img 
                src="/flavia_apresentacao.png" 
                alt="Flávia Santos - Advogada" 
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-2 lg:-right-6 bg-brand-dark text-white p-3 lg:p-5 rounded-3xl shadow-xl hidden sm:block border-b-4 border-gold-500 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gold-500/20 rounded-full">
                  <Award className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xl lg:text-2xl font-serif font-bold text-gold-400 leading-none">Ética</span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-wider text-brand-beige-dark font-semibold mt-1 block">e Compromisso</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-4"
          >
            <div className="mb-4 lg:mb-6">
              <span className="flex items-center gap-2 lg:gap-3 text-gold-500 font-bold tracking-widest uppercase text-[10px] lg:text-xs mb-2 lg:mb-3">
                <span className="w-6 lg:w-8 h-px bg-gold-500"></span>
                Quem Sou Eu
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-2 lg:mb-4">
                Flávia Santos
              </h2>
              <h3 className="text-base md:text-lg text-brand-beige-dark font-serif italic mb-4 lg:mb-5">
                "A advocacia não é apenas uma profissão, é um instrumento de justiça social e transformação."
              </h3>
            </div>

            <div className="space-y-3 text-brand-beige text-sm leading-relaxed mb-6">
              <p>
                Como advogada atuante nas áreas <strong>Cível, Trabalhista e Previdenciária</strong>, meu propósito é oferecer um atendimento humanizado, estratégico e voltado para a resolução efetiva de conflitos. Compreendo que por trás de cada processo existe uma história de vida e direitos fundamentais que precisam ser resguardados.
              </p>
              <p>
                Minha trajetória é pautada pela transparência, proximidade com o cliente e constante atualização jurídica. Meu objetivo é proporcionar segurança e excelência em cada etapa do seu caso, garantindo que você tenha a melhor representação legal possível no estado da Paraíba.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center justify-center">
                <LiquidMetalButton
                  href="https://www.instagram.com/eusouflaviasantos/"
                  label="Siga no Instagram"
                  className="sm:w-auto w-full"
                />
              </div>
              <div className="flex items-center justify-center">
                <LiquidMetalButton
                  href="https://wa.me/558398759710"
                  label="Fale Comigo"
                  className="sm:w-auto w-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
