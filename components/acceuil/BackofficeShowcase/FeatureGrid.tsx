import React from 'react';
import { 
  QrCode, 
  Users, 
  Settings2, 
  BarChart3, 
  Gift, 
  Bell, 
  Download, 
  Layers,
  ChevronRight 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureGrid = () => {
  const features = [
    {
      icon: QrCode,
      title: "Générateur QR Codes",
      description: "Créez et téléchargez vos QR codes uniques en masse"
    },
    {
      icon: Users,
      title: "CRM Participants",
      description: "Collectez et gérez vos participants avec segmentation avancée"
    },
    {
      icon: Settings2,
      title: "Configuration jeux",
      description: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels"
    },
    {
      icon: BarChart3,
      title: "Analytics temps réel",
      description: "Suivez vos KPIs : scans, conversions, engagement, ROI"
    },
    {
      icon: Gift,
      title: "Gestion des lots",
      description: "Définissez vos récompenses et gérez les tirages au sort"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Envoyez des push, emails et SMS à vos participants"
    },
    {
      icon: Download,
      title: "Export données",
      description: "Téléchargez vos données en CSV, Excel ou via API"
    },
    {
      icon: Layers,
      title: "Multi-campagnes",
      description: "Gérez plusieurs campagnes simultanément"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <button className="inline-flex items-center justify-center gap-2 bg-[#10a34f] hover:bg-[#0d8a42] text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg">
        Demander un accès au backoffice
        <ChevronRight size={20} />
      </button>
    </>
  );
};

export default FeatureGrid;
