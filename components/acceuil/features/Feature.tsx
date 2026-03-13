import { CheckCircle2, Smartphone, Layers, Gift, BarChart3, Calendar } from "lucide-react"
import ballon from "../../../src/assets/ballon.png";

// On extrait les fonctionnalités dans un tableau pour garder un code propre
const features = [
  {
    icon: Smartphone,
    title: "Activation instantanée",
    description: "QR codes uniques sur chaque produit",
  },
  {
    icon: Layers,
    title: "Collection digitale",
    description: "Cartes de joueurs, raretés, échanges",
  },
  {
    icon: Gift,
    title: "Récompenses exclusives",
    description: "Tirages au sort, lots partenaires, expériences VIP",
  },
  {
    icon: BarChart3,
    title: "Analytics avancés",
    description: "Dashboard temps réel, insights consommateurs",
  },
]

export default function FeatureSection() {
  return (
    // J'utilise la même logique de centrage (w-11/12 max-w-7xl mx-auto) que pour votre Hero
    <section className="mx-auto w-11/12 max-w-7xl py-16 lg:py-24">

      {/* Grille : 1 colonne sur mobile, 2 colonnes sur grand écran (lg) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">

        {/* COLONNE GAUCHE : Image */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <img
            src={ballon}
            alt="Chaussure de foot sur un ballon"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

        {/* COLONNE DROITE : Contenu textuel */}
        <div className="flex flex-col">

          {/* Badge "Solution complète" */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
            Solution complète
          </div>

          {/* Titre principal */}
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Le terrain de jeu digital de votre marque
          </h2>

          {/* Paragraphe de description */}
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            YouCanWin transforme vos produits en expériences interactives. Chaque
            achat devient une opportunité d'engagement avec vos consommateurs.
          </p>

          {/* Liste des fonctionnalités */}
          <div className="mt-10 flex flex-col gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bouton rouge "Planifier une démo" */}
          <div className="mt-10">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md active:scale-95"
            >
              Planifier une démo
              <Calendar className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}