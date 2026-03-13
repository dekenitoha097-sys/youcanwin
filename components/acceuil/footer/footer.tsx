import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Principale */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Colonne 1 : Logo et Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#10a34f] p-1.5 rounded-lg">
                <div className="text-white font-bold text-xl leading-none">🏆</div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-red-600">You</span>canwin
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-[#10a34f] hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6">Liens rapides</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#10a34f] transition-colors">Nos offres</a></li>
              <li><a href="#" className="hover:text-[#10a34f] transition-colors">Nos jeux</a></li>
              <li><a href="#" className="hover:text-[#10a34f] transition-colors">Album 2025</a></li>
              <li><a href="#" className="hover:text-[#10a34f] transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Légal */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-slate-900 mb-6">Contact & Légal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="mailto:games@agency.africa" className="hover:text-[#10a34f] transition-colors">games@agency.africa</a></li>
              <li><a href="#" className="hover:text-[#10a34f] transition-colors">Mentions légales</a></li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-[#10a34f] transition-colors">
                  Protection des données (CNDP) <ExternalLink size={14} />
                </a>
              </li>
              <li><a href="#" className="hover:text-[#10a34f] transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 pt-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Youcanwin. Tous droits réservés.</p>
          <p>
            Un service de <span className="text-green-600 font-bold">Agency.Africa</span> — games.agency.africa
          </p>
        </div>

        {/* Badge CNDP */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-5 py-2 rounded-xl text-sm font-medium">
            <ShieldCheck size={18} />
            Site conforme CNDP Maroc
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;