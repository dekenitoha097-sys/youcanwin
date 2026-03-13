import { Zap, TrendingUp, Globe } from 'lucide-react';
import PricingCard, { PricingPlan } from './PricingCard';
import PricingHeader from './PricingHeader';

const plans: PricingPlan[] = [
    {
        title: "Starter",
        tagline: "Campagne locale",
        icon: Zap,
        description: "Idéal pour tester sur un marché",
        buttonText: "Demander un devis",
        features: [
            "Jusqu'à 1 000 utilisateurs",
            "Jusqu'à 10K QR codes",
            "1 pays / région",
            "Album standard (équipe nationale)",
            "Hébergement Cloud sécurisé",
            "Backoffice simplifié",
            "Support par email",
            "1 marque"
        ]
    },
    {
        title: "Scale",
        tagline: "Expansion nationale",
        icon: TrendingUp,
        isPopular: true,
        description: "Pour des campagnes d'envergure",
        buttonText: "Planifier une démo",
        features: [
            "Jusqu'à 50 000 utilisateurs",
            "QR codes illimités",
            "Multi-pays (jusqu'à 5)",
            "Album complet (toutes les équipes)",
            "Cloud ou On-Premise",
            "Backoffice avancé avec analytics",
            "Support prioritaire 24/7",
            "Jusqu'à 3 marques",
            "API REST disponible"
        ]
    },
    {
        title: "Enterprise",
        tagline: "Solution globale",
        icon: Globe,
        description: "Pour les groupes internationaux",
        buttonText: "Contactez-nous",
        features: [
            "Utilisateurs illimités",
            "QR codes illimités",
            "Déploiement mondial",
            "Albums personnalisés par région",
            "Infrastructure dédiée (On-Premise)",
            "Multi-marques illimité",
            "Développements sur-mesure",
            "Account manager dédié",
            "SLA garanti 99.9%",
            "Formation et onboarding complet"
        ]
    }
];

const PricingSection: React.FC = () => {
    return (
        <section className="py-20 bg-white px-4">
            <div className="max-w-7xl mx-auto">
                <PricingHeader />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
