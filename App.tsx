import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Features from './components/Features';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import CartDrawer from './components/CartDrawer';
import ChatBot from './components/ChatBot';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="font-sans antialiased text-wood-900 bg-parchment selection:bg-ember-500 selection:text-white">
          <Navbar 
            cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
            onOpenCart={() => setIsCartOpen(true)}
          />
          <Hero />
          <Services onAddToCart={handleAddToCart} />
          <About />
          <Projects /> {/* "Come Funziona" */}
          <Features /> {/* "Recensioni" */}
          <Contact />
          
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
          <ChatBot />
        </div>
      )}
    </>
  );
};

export default App;