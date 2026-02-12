import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ServicesProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Legna di Rovere",
    price: 180,
    unit: "al bancale (10q)",
    image: "https://images.unsplash.com/photo-1574577546993-9c447c2a7db7?q=80&w=2070&auto=format&fit=crop",
    description: "Legna dura a lenta combustione. Ideale per camini aperti e stufe che devono scaldare tutta la notte.",
    badges: ["Best Seller", "Lunga Durata"]
  },
  {
    id: 2,
    name: "Legna di Faggio",
    price: 165,
    unit: "al bancale (10q)",
    image: "https://images.unsplash.com/photo-1545607028-2f88a9a2022e?q=80&w=2070&auto=format&fit=crop",
    description: "La scelta classica per pizzerie e forni. Fiamma vivace, alto potere calorifico e poca cenere.",
    badges: ["Fiamma Viva", "Poca Cenere"]
  },
  {
    id: 3,
    name: "Misto Stagionato",
    price: 140,
    unit: "al bancale (10q)",
    image: "https://images.unsplash.com/photo-1605110495818-47345688587d?q=80&w=2070&auto=format&fit=crop",
    description: "Un mix bilanciato di essenze dure e dolci. Perfetto per l'accensione e il mantenimento.",
    badges: ["Economico", "Versatile"]
  },
  {
    id: 4,
    name: "Pellet Certificato A1",
    price: 9.50,
    unit: "al sacco (15kg)",
    image: "https://images.unsplash.com/photo-1541414371607-b37996377703?q=80&w=2070&auto=format&fit=crop",
    description: "Pellet di abete 100% naturale. Altissima resa, residuo ceneri < 0.7%. Il massimo per la tua stufa.",
    badges: ["Alta Resa", "Senza Leganti"]
  },
  {
    id: 5,
    name: "Accendifuoco Naturale",
    price: 15,
    unit: "confezione da 5kg",
    image: "https://images.unsplash.com/photo-1634747514782-b773724c9692?q=80&w=2070&auto=format&fit=crop",
    description: "Listelli di legna resinosa secchissima. Per avviare il tuo fuoco in pochi secondi senza prodotti chimici.",
    badges: ["Ecologico", "Rapido"]
  },
  {
    id: 6,
    name: "Ulivo da Ardere",
    price: 220,
    unit: "al bancale (8q)",
    image: "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=2070&auto=format&fit=crop",
    description: "Il re della legna da ardere. Profumo inconfondibile, brace duratura. Disponibilità limitata.",
    badges: ["Premium", "Profumato"]
  }
];

const Services: React.FC<ServicesProps> = ({ onAddToCart }) => {
  return (
    <section id="catalogo" className="py-24 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-forest-700 uppercase tracking-widest font-bold mb-4">Il Nostro Catalogo</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">Scegli il Tuo Calore</h2>
          <p className="text-wood-600 max-w-2xl mx-auto">Dal legno duro per la notte al pellet ad alta efficienza. Selezioniamo solo i prodotti migliori per la tua casa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-wood-200 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-wood-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    {product.badges.map((badge, i) => (
                        <span key={i} className="bg-wood-900/90 text-wood-100 text-xs font-bold uppercase px-3 py-1 rounded-sm shadow-sm backdrop-blur-sm">
                            {badge}
                        </span>
                    ))}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-bold text-wood-900">{product.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-4 text-wood-800">
                    <span className="text-2xl font-bold">€{product.price}</span>
                    <span className="text-sm text-wood-600 font-medium">/ {product.unit}</span>
                </div>
                
                <p className="text-wood-600 text-sm leading-relaxed mb-6 flex-grow border-t border-wood-100 pt-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="flex text-ember-500">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="flex-1 bg-forest-700 text-white py-3 px-4 rounded-sm font-bold uppercase text-sm tracking-wide shadow-wood hover:bg-forest-800 hover:shadow-wood-hover hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"
                    >
                        <ShoppingBag size={18} /> Aggiungi
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;