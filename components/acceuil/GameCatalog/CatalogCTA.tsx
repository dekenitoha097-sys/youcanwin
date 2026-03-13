import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const CatalogCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre marketing ?</h2>
        <p className="text-red-100 mb-10 text-lg opacity-90">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#10a34f] to-[#0d8a42] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Calendar size={20} />
              Planifier une démo gratuite
            </button>
          <button className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Mail size={20} />
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;
