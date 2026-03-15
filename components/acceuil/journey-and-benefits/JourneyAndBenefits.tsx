import JourneySection from "./JourneySection"
import BenefitsSection from "./BenefitsSection"

export default function JourneyAndBenefits() {
    return (
        <div className="w-full flex flex-col">
            <JourneySection />
            <BenefitsSection />
        </div>
    )
}
