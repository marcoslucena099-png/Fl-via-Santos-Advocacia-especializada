import { motion } from 'motion/react';
import { MapPin, Clock, CalendarDays } from 'lucide-react';

export default function LocationInfo() {
  return (
    <section id="localizacao" className="relative py-20 bg-brand-surface overflow-hidden">
      {/* Decorative accent element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Onde nos encontrar
            </h2>
            <p className="text-brand-beige mb-8 text-lg">
              Estamos localizados no coração de Patos - PB, em um ambiente preparado para recebê-lo com todo o conforto e discrição que o seu caso exige.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-dark flex items-center justify-center border border-white/10 rounded-full">
                  <MapPin className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-lg mb-1">Endereço</h4>
                  <p className="text-brand-beige-dark">
                    Edifício Milindra Empresarial Center<br />
                    Avenida Dr. Pedro Firmino, 107 - Centro<br />
                    Sala comercial nº 208, 2º andar<br />
                    Patos - PB
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-dark flex items-center justify-center border border-white/10 rounded-full">
                  <Clock className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-lg mb-1">Horário de Funcionamento</h4>
                  <div className="text-brand-beige-dark space-y-1">
                    <span className="flex items-center gap-2"><span className="text-xs font-bold uppercase tracking-widest text-brand-beige-muted">Segunda a Quinta:</span> 08h às 18h</span>
                    <span className="flex items-center gap-2"><span className="text-xs font-bold uppercase tracking-widest text-brand-beige-muted">Sexta-feira:</span> 08h às 17h</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] w-full rounded-3xl overflow-hidden shadow-sm border border-white/10 p-2 bg-brand-dark"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Edif%C3%ADcio%20Milindra%20Empresarial%20Center,%20Avenida%20Dr.%20Pedro%20Firmino,%20107%20-%20Centro,%20Patos%20-%20PB&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do escritório Flávia Santos Advocacia"
              className="rounded-2xl"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
