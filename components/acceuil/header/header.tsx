import { useState } from 'react';
import { Menu, X,Trophy } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Nos offres', href: '#' },
    { label: 'Nos jeux', href: '#' },
    { label: 'Album 2025', href: '#' },
    { label: 'À propos', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ring-1 ring-slate-100">
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-3">
        
        {/* LOGO ET NOM */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-500 text-white shadow-sm">
            <Trophy size={20}/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              <span className="text-red-600">You</span>
              <span >can</span>
               <span className="text-emerald-600">win</span>
            </span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Games
            </span>
          </div>
        </div>

        {/* NAVIGATION ET BOUTON - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a key={link.label} className="transition hover:text-emerald-600" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-95"
            type="button"
          >
            Demander une démo
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* BOUTON MENU MOBILE */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-base font-medium text-slate-700 hover:text-emerald-600 transition"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 mt-2"
              type="button"
            >
              Demander une démo
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
