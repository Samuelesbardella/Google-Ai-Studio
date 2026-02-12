import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 300 ? 0 : 25; // Free shipping over 300
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-wood-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-parchment shadow-2xl z-50 flex flex-col border-l-4 border-wood-700"
          >
            <div className="p-6 bg-wood-800 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-ember-500" />
                <h2 className="text-xl font-serif font-bold">Il Tuo Carrello</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-wood-700 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-wood-500 opacity-60">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="text-lg font-serif">Il carrello è vuoto</p>
                  <button onClick={onClose} className="mt-4 text-ember-600 underline font-bold">
                    Inizia ad acquistare
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-sm shadow-sm border border-wood-200">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm border border-wood-100" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif font-bold text-wood-900">{item.name}</h3>
                        <button onClick={() => onRemoveItem(item.id)} className="text-wood-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-wood-500 mb-2">{item.unit}</p>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-wood-300 rounded-sm">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2 py-1 hover:bg-wood-100 text-wood-700"
                          >
                            -
                          </button>
                          <span className="px-2 py-1 text-sm font-bold min-w-[2rem] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2 py-1 hover:bg-wood-100 text-wood-700"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-bold text-wood-900">€{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-wood-100 border-t border-wood-300">
                <div className="space-y-2 mb-6 text-sm text-wood-700">
                  <div className="flex justify-between">
                    <span>Subtotale</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spedizione {subtotal > 300 && "(Gratuita)"}</span>
                    <span>{shipping === 0 ? "Gratis" : `€${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-wood-900 pt-2 border-t border-wood-300 mt-2">
                    <span>Totale</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-ember-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest shadow-wood hover:bg-ember-500 hover:shadow-wood-hover hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2">
                  Procedi all'Ordine <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;