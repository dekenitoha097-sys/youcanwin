import React from 'react';
import { Users, QrCode, Globe, HardDrive, Cloud, Icon } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, subtitle }: { icon: React.ComponentType<any>; title: string; subtitle: string }) => (
    <div className="flex flex-col items-center text-center px-4">
        {/* Conteneur de l'icône avec fond vert clair arrondi */}
        <div className="bg-green-50 p-4 rounded-2xl mb-4">
            <Icon className="w-8 h-8 text-green-600" strokeWidth={1.5} />
        </div>
        {/* Titre en gras */}
        <h3 className="text-slate-900 font-bold text-lg mb-1">
            {title}
        </h3>
        {/* Sous-titre en gris */}
        <p className="text-gray-500 text-sm whitespace-nowrap">
            {subtitle}
        </p>
    </div>
);

const FeaturesBar = () => {
    const data = [
        {
            icon: Users,
            title: "Utilisateurs",
            subtitle: "De 1K à illimité"
        },
        {
            icon: QrCode,
            title: "QR Codes",
            subtitle: "Volume adapté"
        },
        {
            icon: Globe,
            title: "Couverture",
            subtitle: "Local à mondial"
        },
        {
            icon: HardDrive, // Icône pour Albums/Stockage
            title: "Albums",
            subtitle: "Standard ou custom"
        },
        {
            icon: Cloud,
            title: "Infrastructure",
            subtitle: "Cloud ou On-Premise"
        }
    ];

    return (
        <div className="w-full bg-white py-12 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
                    {data.map((item, index) => (
                        <FeatureItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBar;