import {
    Zap,
    Heart,
    Share2
} from "lucide-react"

const benefits = [
    {
        title: "Engagement immédiat",
        desc: "Chaque produit devient une opportunité de jeu",
        icon: Zap,
    },
    {
        title: "Fidélisation naturelle",
        desc: "Les clients reviennent pour compléter leur collection",
        icon: Heart,
    },
    {
        title: "Viralité organique",
        desc: "Les fans partagent et échangent entre eux",
        icon: Share2,
    },
]

export default function BenefitsSection() {
    return (
        <section className="bg-[#117b40] py-20 px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Transformez vos ventes en expérience mémorable
                    </h2>
                    <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
                        YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center bg-white/10 rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:bg-white/15"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white mb-6">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-emerald-100 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
