import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Award, Truck } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: "Legna Sostenibile",
      description: "Provenienza certificata da foreste gestite responsabilmente. Rispettiamo l'ambiente per garantirti un calore etico."
    },
    {
      icon: <Clock size={32} />,
      title: "Essiccazione Naturale",
      description: "Stagionatura all'aria aperta per almeno 18 mesi. Umidità ridotta per una combustione pulita ed efficiente."
    },
    {
      icon: <Truck size={32} />,
      title: "Consegna Rapida",
      description: "Portiamo il calore direttamente a casa tua. Servizio di scarico e posizionamento disponibile su richiesta."
    },
    {
      icon: <Award size={32} />,
      title: "Qualità Garantita",
      description: "Ogni pezzo è selezionato a mano. Garanzia soddisfatti o rimborsati sulla qualità del taglio e della stagionatura."
    }
  ];

  return (
    <section id="features" className="py-24 bg-wood-100 wood-texture relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-forest-700 uppercase tracking-widest font-bold mb-4">I Nostri Valori</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">Perché Scegliere Mariani</h2>
          <p className="text-wood-700 text-lg">Non vendiamo solo legna, vendiamo la tradizione e la sicurezza di un prodotto curato nei minimi dettagli.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-parchment p-8 rounded-sm border-2 border-wood-200 hover:border-ember-400 transition-all duration-300 group text-center shadow-md hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wood-200 text-wood-800 mb-6 group-hover:bg-ember-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-wood-900 mb-4">{feature.title}</h3>
              <p className="text-wood-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;