import TypewriterEffect from "../TypewriterEffect";
import "./aboutussection.css";

export default function AboutUsSection() {
  return (
    <div className="about-us">
      <h1 className="learn-title">
        Learn <TypewriterEffect words={["Hello World!"]} />
      </h1>
    </div>
  );
}
