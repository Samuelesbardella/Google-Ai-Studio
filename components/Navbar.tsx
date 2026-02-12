import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, TreePine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Prodotti', href: '#catalogo' },
    { name: 'Perché Noi', href: '#features' },
    { name: 'Come Funziona', href: '#howto' },
    { name: 'Recensioni', href: '#reviews' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-wood-900/95 backdrop-blur-md shadow-xl py-3 border-b border-wood-700'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-wood-100 p-2 rounded-sm shadow-md group-hover:bg-ember-500 transition-colors duration-300">
               <TreePine className="text-wood-800 group-hover:text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold tracking-tight leading-none ${isScrolled ? 'text-wood-100' : 'text-white shadow-black drop-shadow-md'}`}>Mariani</span>
              <span className={`text-xs font-sans uppercase tracking-widest leading-none mt-1 ${isScrolled ? 'text-ember-400' : 'text-ember-300 shadow-black drop-shadow-sm'}`}>Legna e Fresca</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider relative group transition-colors ${
                    isScrolled ? 'text-wood-200 hover:text-ember-400' : 'text-wood-100 hover:text-ember-300 text-shadow'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-ember-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
                onClick={onOpenCart}
                className={`relative p-2 transition-colors ${isScrolled ? 'text-wood-200 hover:text-ember-400' : 'text-white hover:text-ember-300'}`}
            >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-ember-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-wood-900">
                        {cartCount}
                    </span>
                )}
            </button>

            <button
              className={`md:hidden p-2 ${isScrolled ? 'text-wood-200' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-wood-800 border-t border-wood-700 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif text-wood-100 hover:text-ember-400 border-b border-wood-700 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                    onClick={() => { setIsMobileMenuOpen(false); onOpenCart(); }}
                    className="mt-2 w-full bg-ember-600 text-white py-3 rounded-sm font-bold uppercase tracking-wider shadow-wood hover:bg-ember-500 hover:shadow-wood-hover hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all"
                >
                    Vai al Carrello
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;