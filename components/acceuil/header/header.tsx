import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 5a1 1 0 0 1 1-1h2.2A5.99 5.99 0 0 1 12 2a5.99 5.99 0 0 1 4.8 2H19a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4h-1.1A5.99 5.99 0 0 1 13 13.92V16h3a1 1 0 1 1 0 2h-3v1a1 1 0 1 1-2 0v-1H8a1 1 0 1 1 0-2h3v-2.08A5.99 5.99 0 0 1 9.1 11H8a4 4 0 0 1-4-4V5Zm3.4 1H6v1a2 2 0 0 0 2 2h.35A5.98 5.98 0 0 1 7.4 6Zm9.2 0a5.98 5.98 0 0 1-.95 3H16a2 2 0 0 0 2-2V6h-1.4Z" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              <span className="text-red-500">You</span>
              <span className="text-emerald-600">canwin</span>
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
