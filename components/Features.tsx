import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
    {
        id: 1,
        author: "Marco Rossi",
        rating: 5,
        text: "Legna eccellente, secca al punto giusto. Il rovere brucia per ore. Servizio di consegna impeccabile, il ragazzo è stato gentilissimo."
    },
    {
        id: 2,
        author: "Giulia Bianchi",
        rating: 5,
        text: "Finalmente un fornitore serio! I bancali sono pieni zeppi, niente spazi vuoti. Il faggio per il forno della pizza è spettacolare."
    },
    {
        id: 3,
        author: "Alessandro Verdi",
        rating: 4,
        text: "Ho preso il misto per il camino. Ottimo rapporto qualità prezzo. Unica pecca: bisogna prenotare con un po' di anticipo in inverno."
    }
];

const Features: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-wood-200 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
             <h2 className="text-4xl font-serif font-bold text-wood-900 mb-4">Cosa Dicono i Clienti</h2>
             <div className="flex justify-center gap-1 text-ember-600 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
             </div>
             <p className="text-wood-700">La soddisfazione dei nostri clienti è la nostra migliore pubblicità.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
                <motion.div
                    key={review.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-parchment p-8 rounded-sm shadow-wood border border-wood-300 relative mt-6"
                >
                    <div className="absolute -top-6 left-8 bg-ember-500 text-white p-3 rounded-full shadow-md">
                        <Quote size={20} />
                    </div>
                    
                    <div className="flex gap-1 text-ember-500 mb-4 mt-2">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    
                    <p className="text-wood-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                    
                    <div className="border-t border-wood-200 pt-4">
                        <span className="font-bold text-wood-900 uppercase tracking-wide text-sm">{review.author}</span>
                        <span className="text-wood-500 text-xs block">Cliente Verificato</span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;