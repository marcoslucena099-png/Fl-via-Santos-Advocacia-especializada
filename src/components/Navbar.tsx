import { LiquidMetalButton } from "./ui/liquid-metal-button";
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Sou Eu', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          <div className="flex items-center space-x-3">
            {!imgError ? (
              <img 
                src="/logo.png" 
                alt="Flávia Santos Advocacia Logo" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-surface flex items-center justify-center rounded-xl border border-gold-500/20">
                  <span className="text-gold-500 font-serif text-2xl font-bold">FS</span>
                </div>
                <div className="leading-none">
                  <span className="block text-white font-serif text-xl sm:text-2xl font-bold tracking-tight">FLÁVIA SANTOS</span>
                  <span className="block text-gold-500 text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">
                    Advocacia Especializada
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-beige">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-center">
              <LiquidMetalButton href="https://wa.me/558398759710" label="Agendar Consulta" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-gold-500/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-brand-beige hover:text-gold-400 hover:bg-gold-500/10 rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/558398759710"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 bg-gold-500 text-brand-dark px-5 py-3 rounded-full hover:bg-gold-400 transition-colors shadow-lg font-medium w-full"
              >
                <Phone size={18} />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
