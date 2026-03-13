import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TrendingUp, Users, Star, LifeBuoy } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="text-green-500 mb-3" size={24} />
    <span className="text-3xl font-extrabold text-slate-900">{value}</span>
    <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</span>
  </div>
);

const GameStats: React.FC = () => {
  const stats = [
    { icon: TrendingUp, value: "500K+", label: "Interactions mensuelles" },
    { icon: Users, value: "50+", label: "Marques partenaires" },
    { icon: Star, value: "98%", label: "Taux de satisfaction" },
    { icon: LifeBuoy, value: "24/7", label: "Support technique" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-gray-200">
      {stats.map((stat, index) => (
        <StatItem key={index} icon={stat.icon} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default GameStats;
