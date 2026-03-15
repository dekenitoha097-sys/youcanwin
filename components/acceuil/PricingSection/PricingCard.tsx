import { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

export interface PricingPlan {
    title: string;
    tagline: string;
    icon: LucideIcon;
    description: string;
    buttonText: string;
    features: string[];
    isPopular?: boolean;
}

interface PricingCardProps {
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    icon: LucideIcon;
    tagline: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    description,
    features,
    buttonText,
    isPopular = false,
    icon: Icon,
    tagline
}) => {
    return (
        <div className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${isPopular
                ? 'border-red-500 shadow-2xl scale-105 z-10 bg-white'
                : 'border-gray-100 bg-white hover:border-gray-200'
            }`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
                    Populaire
                </div>
            )}

            <div className="mb-8">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${isPopular ? 'bg-red-50' : 'bg-green-50'}`}>
                    <Icon size={20} className={isPopular ? 'text-red-500' : 'text-green-500'} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{title}</h3>
                <p className={`text-sm font-semibold mb-4 ${isPopular ? 'text-green-600' : 'text-green-600'}`}>
                    {tagline}
                </p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {description}
                </p>
                <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                        Tarification sur mesure selon vos volumes
                    </p>
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check size={18} className={isPopular ? 'text-red-500 shrink-0' : 'text-green-500 shrink-0'} />
                        <span className="text-slate-600 text-sm leading-tight">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 px-6 rounded-xl font-bold transition-colors ${isPopular
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-white text-slate-900 border border-gray-200 hover:bg-gray-50'
                }`}>
                {buttonText}
            </button>
        </div>
    );
};

export default PricingCard;
