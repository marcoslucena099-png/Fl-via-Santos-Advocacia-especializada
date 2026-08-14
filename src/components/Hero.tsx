import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

import { LiquidMetalButton } from "./ui/liquid-metal-button";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-brand-dark min-h-screen pt-24 pb-20 lg:pt-24 lg:pb-32 flex items-center overflow-hidden">
      {/* Elegant background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=2000" 
          alt="Balança da Justiça" 
          className="w-full h-full object-cover object-right mix-blend-overlay opacity-30"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-brand-dark"></div>
      </div>
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl border-l-4 border-gold-500 pl-6 sm:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <Scale className="text-gold-500" size={24} />
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Escritório de Advocacia</span>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Excelência jurídica para proteger seus <span className="italic text-gold-400">direitos</span>.
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl mb-10 text-brand-beige-dark leading-relaxed font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Atendimento personalizado e focado na solução estratégica de conflitos jurídicos nas esferas cível, trabalhista e previdenciária.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex items-center justify-center">
              <LiquidMetalButton href="https://wa.me/558398759710" label="Falar com Especialista" />
            </div>
            <div className="flex items-center justify-center">
              <LiquidMetalButton href="#areas" label="Nossas Áreas" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
