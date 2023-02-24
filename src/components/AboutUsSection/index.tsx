import InduvidualizedLearningSection from "../InduvidualizedLearningSection";
import { LearnSection } from "../LearnSection";
import RigorousContentSection from "../RigorousContentSection";
import "./aboutussection.css";

export default function AboutUsSection() {
  return (
    <div className="about-us">
      <LearnSection />
      <InduvidualizedLearningSection />
      <RigorousContentSection />
    </div>
  );
}
