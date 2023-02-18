import { useInView } from "react-intersection-observer";
import "./introsection.css";

export default function IntroSection() {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className="intro-section"
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 1s ease-in-out"
      }}
    >
      <h1 className="page-title">Haxiom</h1>
      <p className="page-description">
        A tutoring service to help you gain a{" "}
        <span className="special-highlight">passion for learning</span>
      </p>
    </div>
  );
}