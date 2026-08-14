import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  // Replace with actual WhatsApp number
  const phoneNumber = "558398759710"; 
  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta online.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-3">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden sm:block bg-brand-surface px-4 py-2 rounded-full shadow-xl text-xs font-bold border border-white/10 text-slate-300"
      >
        Como podemos ajudar?
      </motion.div>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="contato"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform relative group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        aria-label="Falar conosco pelo WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
}
