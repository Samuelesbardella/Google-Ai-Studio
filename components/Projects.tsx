import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Truck, Flame, PackageCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Scegli la Legna",
      description: "Sfoglia il nostro catalogo e seleziona il tipo di legna o pellet più adatto alle tue esigenze di riscaldamento.",
      icon: <MousePointerClick size={40} />
    },
    {
      id: 2,
      title: "Seleziona Quantità",
      description: "Decidi quanto te ne serve. Vendiamo a bancali, a sacchi o a metri cubi sfusi per la massima flessibilità.",
      icon: <PackageCheck size={40} />
    },
    {
      id: 3,
      title: "Prenota Consegna",
      description: "Inserisci il tuo indirizzo e scegli la data. Il nostro camion arriverà puntuale direttamente a casa tua.",
      icon: <Truck size={40} />
    },
    {
      id: 4,
      title: "Goditi il Calore",
      description: "Ricevi la merce, accendi il camino e rilassati. Al resto abbiamo pensato noi con la nostra qualità garantita.",
      icon: <Flame size={40} />
    }
  ];

  return (
    <section id="howto" className="py-24 bg-wood-800 text-wood-100 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 wood-texture mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-wood-600 pb-8">
          <div>
            <span className="text-ember-500 uppercase tracking-[0.2em] font-bold text-sm mb-2 block">Semplice e Veloce</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Come Funziona</h2>
          </div>
          <div className="mt-6 md:mt-0">
             <p className="text-wood-300 max-w-md text-right md:text-left">
                Dal nostro magazzino al tuo camino in 4 semplici passaggi. Ordinare legna online non è mai stato così facile.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-wood-600 z-0 border-t-2 border-dashed border-wood-500"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-wood-700 border-4 border-wood-500 rounded-full flex items-center justify-center text-ember-500 shadow-xl mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-wood-100 text-wood-900 font-bold rounded-full flex items-center justify-center border-2 border-wood-500">
                    {step.id}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-3">{step.title}</h3>
              <p className="text-wood-300 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;