import {
    ShoppingCart,
    QrCode,
    PackageOpen,
    Puzzle,
    Gift,
} from "lucide-react"

const steps = [
    {
        num: 1,
        title: "Achat produit",
        desc: "Le client achète votre produit en magasin",
        icon: ShoppingCart,
        color: "emerald",
    },
    {
        num: 2,
        title: "Scan QR Code",
        desc: "Il scanne le code sur l'emballage",
        icon: QrCode,
        color: "emerald",
    },
    {
        num: 3,
        title: "Déblocage carte",
        desc: "Une carte digitale est débloquée",
        icon: PackageOpen,
        color: "emerald",
    },
    {
        num: 4,
        title: "Collection",
        desc: "Il complète sa collection",
        icon: Puzzle,
        color: "red",
    },
    {
        num: 5,
        title: "Récompenses",
        desc: "Participe aux tirages",
        icon: Gift,
        color: "red",
    },
]

export default function JourneySection() {
    return (
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Un parcours client simple et engageant
                    </h2>
                    <p className="text-lg text-slate-500">
                        De l'achat du produit à la récompense, en 5 étapes
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
                    {steps.map((step) => {
                        const Icon = step.icon
                        const isEmerald = step.color === "emerald"

                        return (
                            <div key={step.num} className="flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div
                                        className={`absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white z-10 ${isEmerald ? "bg-emerald-600" : "bg-red-500"
                                            }`}
                                    >
                                        {step.num}
                                    </div>
                                    <div
                                        className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 bg-white ${isEmerald
                                                ? "border-emerald-100 text-emerald-600 shadow-sm shadow-emerald-100"
                                                : "border-red-100 text-red-500 shadow-sm shadow-red-100"
                                            }`}
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>
                                </div>

                                <h3 className="text-base font-bold text-slate-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                                    {step.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
