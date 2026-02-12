import React from 'react';
import { motion } from 'framer-motion';
import { Axe } from 'lucide-react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-wood-800"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-wood-100 p-6 rounded-full shadow-2xl mb-6"
        >
           <Axe size={64} className="text-wood-800" />
        </motion.div>
        
        <motion.h1
          className="text-4xl font-serif font-bold text-wood-100 tracking-wider mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Mariani
        </motion.h1>
        <motion.p
           className="text-ember-400 font-sans uppercase tracking-widest text-sm"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          Legna e Fresca
        </motion.p>
        
        <motion.div 
          className="mt-8 h-1 w-48 bg-wood-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
           <motion.div 
             className="h-full bg-ember-500"
             initial={{ width: "0%" }}
             animate={{ width: "100%" }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
           />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;