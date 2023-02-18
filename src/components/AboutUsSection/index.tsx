import InduvidualizedLearningSection from "../InduvidualizedLearningSection";
import LearnSection from "../LearnSection";
import "./aboutussection.css";

export default function AboutUsSection() {
  return (
    <div className="about-us">
      <LearnSection />
      <InduvidualizedLearningSection />
    </div>
  );
}
