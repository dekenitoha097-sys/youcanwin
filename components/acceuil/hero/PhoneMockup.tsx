import { QrCode, Gift } from "lucide-react"

const collectionStats = [
  { value: "127", label: "Cartes" },
  { value: "76%", label: "Complet" },
  { value: "#12", label: "Rang" },
]

const navItems = [
  { label: "", active: false },
  { label: "Scanner", active: false },
  { label: "Échanges", active: false },
  { label: "Profil", active: false },
]

export default function PhoneMockup() {
  return (
    <div className="relative w-full sm:w-[320px] md:w-[380px] lg:w-[420px]">
      
      {/* 1. Bloc flottant en haut à droite (Scan QR Code) */}
      {/* CHANGEMENT ICI : z-50 devient z-40 */}
      <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-8 z-40 flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-xl">
        <div className="p-2 sm:p-3 bg-emerald-100 text-emerald-600 rounded-lg sm:rounded-xl">
          <QrCode className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-gray-900 text-xs sm:text-sm">Scan QR Code</p>
          <p className="text-xs sm:text-sm text-gray-500">Débloquer une carte</p>
        </div>
      </div>

      {/* --- STRUCTURE DU TELEPHONE --- */}
      <div className="relative w-full h-[500px] sm:h-[580px] md:h-[640px] lg:h-[680px] border-black border-t-6 sm:border-t-8 border-r-6 sm:border-r-8 border-l-6 sm:border-l-8 rounded-t-2xl sm:rounded-t-3xl overflow-hidden bg-gray-50">
        
        {/* En-tête vert avec gradient */}
        <div className="flex flex-col justify-around w-full bg-gradient-to-b from-emerald-500 to-emerald-700 h-1/3 px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm font-semibold text-white">
          <p className="text-xs sm:text-sm text-white opacity-50">ALBUM DIGITAL 2025</p>
          <p className="text-base sm:text-lg font-bold">Ma Collection</p>
          <div className="flex items-center gap-2 sm:gap-4">
            {collectionStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 sm:gap-2">
                <p className="text-lg sm:text-2xl font-semibold">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-24 sm:h-32 md:h-36 lg:h-40 rounded-lg bg-gradient-to-br from-white to-gray-300 animate-pulse" />
          ))}
        </div>

      </div>

      {/* Menu du bas dynamique */}
      <div className="flex justify-around items-center w-full sm:w-[320px] md:w-[380px] lg:w-[420px] h-10 sm:h-12 bg-white shadow-black/60 shadow-2xl">
        {navItems.map((item, idx) => (
          <div key={item.label || idx} className="flex flex-col justify-center items-center">
            {/* J'ai corrigé l'espace manquant ici aussi avant border-2 */}
            <div className={`w-4 h-4 sm:w-6 sm:h-6 rounded bg-gradient-to-br from-gray-100 to-gray-300 ${item.active ? 'border-2 border-emerald-600' : ''}`}></div>
            {item.label && <p className="text-[10px] sm:text-xs opacity-50">{item.label}</p>}
          </div>
        ))}
      </div>
      
      {/* 2. Bloc flottant en bas à gauche (Récompense) */}
      {/* CHANGEMENT ICI : z-50 devient z-40 et j'ai corrigé -left-25 qui n'existe pas en standard en -left-12 sm:-left-24 */}
      <div className="absolute -bottom-8 sm:-bottom-10 -left-4 sm:-left-24 z-40 flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-xl">
        <div className="p-2 sm:p-3 bg-red-100 text-red-500 rounded-lg sm:rounded-xl">
          <Gift className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-gray-900 text-xs sm:text-sm">Récompense</p>
          <p className="text-xs sm:text-sm text-gray-500">Tirage hebdo</p>
        </div>
      </div>

    </div>
  )
}