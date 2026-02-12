import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1522256795027-a0709b0222a7?q=80&w=2069&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-wood-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-900 via-transparent to-wood-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-wood-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-wood-500/30 mb-6"
        >
            <Flame className="text-ember-500" size={18} />
            <span className="text-wood-100 text-sm font-bold uppercase tracking-widest">Dal Bosco al Tuo Camino</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-wood-100 leading-tight mb-6 drop-shadow-lg"
        >
          Legna di Qualità. <br />
          <span className="text-ember-500">Calore Naturale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-wood-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Solo legna certificata, essiccata naturalmente e pronta per riscaldare la tua casa. Sostenibilità e tradizione italiana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalogo"
            className="px-8 py-4 bg-ember-600 text-white font-bold text-lg rounded-sm shadow-wood hover:bg-ember-500 hover:shadow-wood-hover hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider"
          >
            Acquista Ora
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-wood-100 text-wood-900 font-bold text-lg rounded-sm shadow-wood border-2 border-wood-300 hover:bg-white hover:shadow-wood-hover hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider"
          >
            Ordina all'Ingrosso
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer"
        onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest text-wood-300">Scopri</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="text-ember-500" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;