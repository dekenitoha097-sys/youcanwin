import React from 'react';
import { ChevronRight } from 'lucide-react';

interface GameCardProps {
  image: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, description, badge, badgeColor }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {badge && (
        <span className={`absolute top-0 right-0 ${badgeColor} text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg`}>
          {badge}
        </span>
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 flex-grow">{description}</p>
      <button className="flex items-center text-green-600 font-semibold text-sm hover:gap-2 transition-all">
        Découvrir <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

export default GameCard;
