import { motion } from 'motion/react';
import { Landmark, Briefcase, ShieldCheck } from 'lucide-react';

import imgCivel from '../assets/images/direito_civel_1782919045915.jpg';
import imgTrabalhista from '../assets/images/direito_trabalhista_1782919061352.jpg';
import imgPrevidenciario from '../assets/images/direito_previdenciario_1782919074112.jpg';

export default function Services() {
  const services = [
    {
      title: 'Direito Cível',
      icon: Landmark,
      description: 'Atuação em contratos, responsabilidade civil, direito de família, sucessões, cobranças e litígios cíveis em geral, sempre buscando a proteção do seu patrimônio e dos seus direitos fundamentais.',
      image: imgCivel,
    },
    {
      title: 'Direito Trabalhista',
      icon: Briefcase,
      description: 'Defesa especializada dos direitos do trabalhador, atuando em casos de rescisão indireta, horas extras, assédio moral, reconhecimento de vínculo empregatício e acidentes de trabalho.',
      image: imgTrabalhista,
    },
    {
      title: 'Direito Previdenciário',
      icon: ShieldCheck,
      description: 'Assessoria completa para aposentadorias, pensão por morte, auxílio-doença, BPC/LOAS e revisões de benefícios. Garantimos que você receba o que é seu por direito perante o INSS.',
      image: imgPrevidenciario,
    },
  ];

  return (
    <section id="areas" className="relative py-16 lg:py-24 bg-brand-dark overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block"
          >
            Nossa Especialidade
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white"
          >
            Áreas de Atuação
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gold-500 mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className="bg-brand-surface border border-white/5 shadow-sm rounded-3xl flex flex-col items-start hover:border-gold-500 transition-colors group overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/20 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 z-20 w-10 h-10 bg-brand-surface border border-white/10 flex items-center justify-center rounded-full shadow-md">
                  <service.icon className="w-5 h-5 text-gold-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-white text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-beige-dark text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
