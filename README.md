# YouCanWin - Frontend

Site web frontend pour YouCanWin, une plateforme marketing digitale pour les marques.

## Description

Application React/Vite avec Tailwind CSS présentant les fonctionnalités de la plateforme YouCanWin :
- Activation produit par QR codes
- Collection digitale de cartes
- Système de récompenses et tirages au sort
- Analytics temps réel
- Catalogue de jeux (Album Digital, Quiz Football, Tombola, Pronostics)

## Technologies

- **React** 19.x
- **Vite** 8.x
- **Tailwind CSS** 4.x
- **Lucide React** (icônes)

## Installation

```bash
npm install
```

## Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Lint
npm run lint

# Aperçu production
npm run preview
```

## Structure du projet

```
projet/
├── src/
│   ├── assets/          # Images et assets
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
├── components/
│   └── acceuil/         # Composants de la page d'accueil
│       ├── hero/
│       ├── header/
│       ├── footer/
│       ├── features/
│       ├── GameCatalog/
│       ├── PricingSection/
│       ├── BackofficeShowcase/
│       └── journey-and-benefits/
├── declarations.d.ts
├── vite.config.js
└── package.json
```

## Fonctionnalités

- Section Hero avec mockup téléphone
- Features (Activation, Collection, Récompenses, Analytics)
- Catalogue de jeux
- Tarifs
- Showcase Backoffice
- Parcours et bénéfices
