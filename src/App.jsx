import FeatureSection from "../components/acceuil/features/Feature"
import Header from "../components/acceuil/header/header"
import Hero from "../components/acceuil/hero/hero"
import JourneyAndBenefits from "../components/acceuil/journey-and-benefits/JourneyAndBenefits.tsx"
import BackofficeShowcase from "../components/acceuil/BackofficeShowcase/BackofficeShowcase.tsx"
import PricingSection from "../components/acceuil/PricingSection/PricingSection.tsx"
import GameCatalog from "../components/acceuil/GameCatalog/GameCatalog.tsx"
import Footer from "../components/acceuil/footer/footer.tsx"
function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <FeatureSection />
      <JourneyAndBenefits />
      <BackofficeShowcase />
      <PricingSection />
      <GameCatalog />
      <Footer />
    </div>
  )
}

export default App