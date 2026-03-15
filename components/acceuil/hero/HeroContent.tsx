import { Lightbulb } from "lucide-react"

const statItems = [
  { value: "500K+", label: "Interactions/mois", accent: "text-[#107c41]" },
  { value: "50+", label: "Marques actives", accent: "text-[#e11d48]" },
  { value: "x3.5", label: "ROI moyen", accent: "text-[#107c41]" },
]

const logos = ["Maroc Telecom", "Inwi", "Orange", "Carrefour"]

export default function HeroContent() {
  return (
    <div className="w-full max-w-2xl px-4 py-10">

      {/* Titre principal */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-slate-900">
        Transformez
        <br />
        chaque{" "}
        <span className="relative inline-block text-[#107c41]">
          <span className="relative z-10">produit</span>
          {/* Courbe SVG dynamique */}
          <svg 
            className="absolute -bottom-2 left-0 w-full h-3 text-[#0b552c] " 
            viewBox="0 0 200 20" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <path 
              d="M2 15C40 5 160 5 198 15" 
              stroke="currentColor" 
              strokeWidth="5" 
              strokeLinecap="round"
            />
          </svg>
        </span>
        <br />
        en expérience de
        <br />
        jeu
      </h1>

      {/* Paragraphe de description */}
      <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl max-w-lg">
        YouCanWin connecte vos marques aux fans de football à travers des
        mécaniques de gamification innovantes.{" "}
        <span className="font-bold text-slate-900">
          Codes QR, cartes digitales, défis et récompenses.
        </span>
      </p>

      {/* Statistiques */}
      <div className="mt-12 flex flex-wrap gap-10 md:gap-16">
        {statItems.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className={`text-4xl font-extrabold tracking-tight ${stat.accent}`}>
              {stat.value}
            </span>
            <span className="text-sm font-medium text-slate-500 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Boutons d'action */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <button
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#10a34f] px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-200 transition-all hover:bg-[#0d8a42] active:scale-95"
          type="button"
        >
          Voir la démo
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
          type="button"
        >
          <Lightbulb className="h-5 w-5" />
          Comment ça marche
        </button>
      </div>

      {/* Section Logos */}
      <div className="mt-16 border-t border-slate-100 pt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Ils nous font confiance
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-50 grayscale">
           {logos.map((logo) => (
            <span key={logo} className="text-sm font-bold text-slate-600 hover:grayscale-0 transition-all">
              {logo}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}