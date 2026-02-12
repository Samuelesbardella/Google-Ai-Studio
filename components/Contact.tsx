import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Facebook, Instagram, TreePine } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-wood-900 pt-24 pb-8 relative overflow-hidden text-wood-200">
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-5/12">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-wood-800 border border-wood-600 rounded-sm flex items-center justify-center text-ember-500">
                  <TreePine size={24} />
               </div>
               <div>
                 <h2 className="text-3xl font-serif font-bold text-white">Mariani</h2>
                 <p className="text-xs uppercase tracking-widest text-ember-500">Legna e Fresca</p>
               </div>
            </div>
            
            <p className="text-wood-400 text-lg mb-10 leading-relaxed font-light">
              Porta il calore naturale a casa tua. Siamo a disposizione per consigliarti il prodotto migliore per la tua stufa o il tuo camino.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <MapPin className="text-ember-500 mt-1" size={20} />
                <div>
                  <h5 className="text-white font-bold mb-1">Magazzino</h5>
                  <p className="text-wood-400">Via dei Boschi 45, 22100 Como (CO)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <Phone className="text-ember-500 mt-1" size={20} />
                <div>
                  <h5 className="text-white font-bold mb-1">Telefono</h5>
                  <p className="text-wood-400 hover:text-white transition-colors">+39 031 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="text-ember-500 mt-1" size={20} />
                <div>
                  <h5 className="text-white font-bold mb-1">Email</h5>
                  <p className="text-wood-400 hover:text-white transition-colors">info@marianilegna.it</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a href="#" className="p-3 bg-wood-800 rounded-sm hover:bg-ember-600 hover:text-white transition-colors">
                  <Facebook size={20} />
               </a>
               <a href="#" className="p-3 bg-wood-800 rounded-sm hover:bg-ember-600 hover:text-white transition-colors">
                  <Instagram size={20} />
               </a>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            className="lg:w-7/12 bg-wood-800 p-8 md:p-12 border border-wood-700 rounded-sm shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Richiedi un Preventivo</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-wood-400 uppercase tracking-wider">Nome</label>
                  <input type="text" className="w-full bg-wood-900 border border-wood-600 p-3 text-white focus:border-ember-500 focus:outline-none transition-colors rounded-sm" placeholder="Il tuo nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-wood-400 uppercase tracking-wider">Cognome</label>
                  <input type="text" className="w-full bg-wood-900 border border-wood-600 p-3 text-white focus:border-ember-500 focus:outline-none transition-colors rounded-sm" placeholder="Il tuo cognome" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-wood-400 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-wood-900 border border-wood-600 p-3 text-white focus:border-ember-500 focus:outline-none transition-colors rounded-sm" placeholder="email@esempio.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-wood-400 uppercase tracking-wider">Messaggio</label>
                <textarea rows={4} className="w-full bg-wood-900 border border-wood-600 p-3 text-white focus:border-ember-500 focus:outline-none transition-colors resize-none rounded-sm" placeholder="Di quanta legna hai bisogno?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-ember-600 hover:bg-ember-500 text-white font-bold py-4 uppercase tracking-widest rounded-sm shadow-wood hover:shadow-wood-hover hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-3">
                Invia Messaggio <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-6 pt-8 border-t border-wood-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-wood-500 font-sans">
        <p>© 2024 Mariani Legna e Fresca. P.IVA: 12345678901. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ember-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-ember-500 transition-colors">Cookie</a>
          <a href="#" className="hover:text-ember-500 transition-colors">Termini</a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;