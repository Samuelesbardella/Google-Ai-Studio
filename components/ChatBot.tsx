import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Benvenuto nella mia bottega! Sono il Signor Mariani. Hai bisogno di un consiglio per il tuo camino o per la stufa? Chiedi pure!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Sei il Signor Mariani, il proprietario esperto e cordiale dell'e-commerce "Mariani: Legna e Fresca". 
        Parli italiano con un tono caldo, accogliente e leggermente rustico, come un vecchio artigiano di fiducia.
        
        Il tuo obiettivo è aiutare i clienti a scegliere la legna giusta.
        
        Ecco i prodotti che vendiamo (usa questi dati per rispondere):
        1. Legna di Rovere (180€/bancale 10q): Dura, lenta combustione. Ideale per scaldare la notte o per camini aperti.
        2. Legna di Faggio (165€/bancale 10q): Fiamma vivace, alto potere calorifico. Perfetta per pizzerie, forni e per scaldare velocemente.
        3. Misto Stagionato (140€/bancale 10q): Economico, versatile. Un mix di essenze dure e dolci.
        4. Pellet Certificato A1 (9.50€/sacco 15kg): Abete 100% naturale, pochissima cenere. Per stufe moderne.
        5. Accendifuoco Naturale (15€/5kg): Listelli resinosi per accensione rapida.
        6. Ulivo da Ardere (220€/bancale 8q): Premium, profumato, brace duratura.
        
        Regole:
        - Sii conciso ma gentile.
        - Se chiedono sconti, dì che per grandi quantità possono usare il pulsante "Ordina all'Ingrosso".
        - Spedizione: Gratuita sopra i 300€, altrimenti 25€. Consegniamo in tutta la zona.
        - Se non sai qualcosa, consiglia di contattarci via email o telefono.
        - Non inventare prodotti che non sono in lista.
      `;

      // Construct history for context
      // Note: In a real production app, we would manage token limits carefully.
      let chatContent = messages.map(m => m.role === 'user' ? `Cliente: ${m.text}` : `Mariani: ${m.text}`).join('\n');
      chatContent += `\nCliente: ${userMessage}\nMariani:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: chatContent,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      }
    } catch (error) {
      console.error("Errore AI:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Scusami, c'è stato un piccolo problema di comunicazione. Potresti ripetere? Il segnale qui nel bosco a volte va e viene." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-ember-600 text-white p-4 rounded-full shadow-wood hover:bg-ember-500 hover:shadow-wood-hover transition-all flex items-center justify-center border-2 border-wood-800"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-ember-500 border border-white"></span>
            </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-parchment rounded-sm shadow-2xl border-4 border-wood-700 z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-wood-800 p-4 flex items-center gap-3 border-b-4 border-wood-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20"></div>
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-ember-500 overflow-hidden bg-wood-300">
                    <img src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop" alt="Signor Mariani" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-white font-serif font-bold text-lg leading-none">Chiedi a Mariani</h3>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-wood-300 text-xs uppercase tracking-wider">Online ora</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-wood-100/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-ember-600 text-white rounded-tr-none'
                        : 'bg-white text-wood-900 border border-wood-200 rounded-tl-none'
                    }`}
                  >
                    {msg.role === 'model' && (
                        <div className="text-xs font-bold text-wood-500 mb-1 uppercase tracking-wide flex items-center gap-1">
                            <Sparkles size={10} className="text-ember-500" /> Mariani
                        </div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none border border-wood-200 flex items-center gap-2 text-wood-500 text-sm">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="italic">Sta pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-wood-200 border-t border-wood-300">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Consigli su rovere o faggio..."
                  className="w-full pl-4 pr-12 py-3 bg-white border border-wood-400 rounded-sm focus:outline-none focus:border-ember-500 text-wood-900 placeholder:text-wood-400 text-sm shadow-inner"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 p-2 bg-ember-600 text-white rounded-sm hover:bg-ember-500 disabled:opacity-50 disabled:hover:bg-ember-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;