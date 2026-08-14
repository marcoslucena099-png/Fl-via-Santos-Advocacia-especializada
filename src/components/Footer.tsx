import { Instagram, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-gold-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-brand-surface-2 pb-12">
          
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.6 }}
            className="md:pr-12 md:border-r border-brand-surface-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              {!imgError ? (
                <img 
                  src="/logo.png" 
                  alt="Flávia Santos Advocacia Logo" 
                  className="h-14 w-auto object-contain brightness-0 invert opacity-90"
                  onError={() => setImgError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-surface flex items-center justify-center rounded-xl border border-gold-500/20">
                    <span className="text-gold-500 font-serif text-2xl font-bold">FS</span>
                  </div>
                  <div className="leading-none">
                    <span className="block text-white font-serif text-xl font-bold tracking-tight">FLÁVIA SANTOS</span>
                    <span className="block text-gold-500 text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">
                      Advocacia Especializada
                    </span>
                  </div>
                </div>
              )}
            </div>
            <p className="text-brand-beige-dark leading-relaxed mb-6">
              Escritório de advocacia com atuação pautada na ética, transparência e na busca incansável pelos direitos dos nossos clientes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/eusouflaviasantos/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-surface border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-brand-dark hover:border-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-brand-dark hover:border-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/558398759710" className="w-10 h-10 rounded-full bg-brand-surface border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-brand-dark hover:border-gold-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:px-4"
          >
            <h4 className="text-gold-500 font-bold text-xs uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-sm text-brand-beige hover:text-gold-400 transition-colors uppercase tracking-wider">Início</a></li>
              <li><a href="#sobre" className="text-sm text-brand-beige hover:text-gold-400 transition-colors uppercase tracking-wider">Quem Sou Eu</a></li>
              <li><a href="#areas" className="text-sm text-brand-beige hover:text-gold-400 transition-colors uppercase tracking-wider">Áreas de Atuação</a></li>
              <li><a href="#localizacao" className="text-sm text-brand-beige hover:text-gold-400 transition-colors uppercase tracking-wider">Localização</a></li>
              <li><a href="https://wa.me/558398759710" className="text-sm text-brand-beige hover:text-gold-400 transition-colors uppercase tracking-wider">Agendar Consulta</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-gold-500 font-bold text-xs uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-brand-beige">
              <li>Edifício Milindra Empresarial Center</li>
              <li>Avenida Dr. Pedro Firmino, 107 - Centro</li>
              <li>Sala comercial nº 208, 2º andar</li>
              <li>Patos - PB</li>
              <li className="pt-4 mt-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-brand-beige-muted uppercase mb-1">Segunda a Quinta</span>
                    <span className="font-medium text-white">08:00h às 18:00h</span>
                  </div>
                  <div>
                    <span className="block text-brand-beige-muted uppercase mb-1">Sexta-feira</span>
                    <span className="font-medium text-white">08:00h às 17:00h</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>

        <div className="text-center text-brand-beige-muted text-xs flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Flávia Santos Advocacia. Todos os direitos reservados.</p>
          <p>OAB/PB 00.000</p>
        </div>
      </div>
    </footer>
  );
}
