import React from 'react';
import GameCard from './GameCard';
import GameStats from './GameStats';
import CatalogHeader from './CatalogHeader';
import CatalogCTA from './CatalogCTA';


interface Game {
  title: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
}

import album from "../../../src/assets/album.png"
import quizImg from "../../../src/assets/quiz.png";
import tombola from  "../../../src/assets/tombola.png"
import propronostics from  "../../../src/assets/pronostics.png"

const games: Game[] = [
  {
    title: "Album Digital 2025",
    description: "Collection de cartes avec échanges et défis.",
    image: album,
    badge: "Star",
    badgeColor: "bg-green-500"
  },
  {
    title: "Quiz Football",
    description: "Questions sur l'actualité et l'histoire du foot.",
    image: quizImg,
    badge: "Bientôt",
    badgeColor: "bg-gray-800"
  },
  {
    title: "Tombola digitale",
    description: "Tirages au sort avec lots sponsorisés.",
    image: tombola
  },
  {
    title: "Pronostics",
    description: "Prédictions de matchs et classements.",
    image: propronostics
  }
];

const GameCatalog: React.FC = () => {
  return (
    <div className="bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <CatalogHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        <GameStats />
      </div>

      <CatalogCTA />
    </div>
  );
};

export default GameCatalog;
