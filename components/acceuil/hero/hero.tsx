import PhoneMockup from "./PhoneMockup"
import HeroContent from "./HeroContent"

export default function Hero() {
  return (
    <section className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-34">
      <HeroContent />
      <PhoneMockup />
    </section>
  )
}