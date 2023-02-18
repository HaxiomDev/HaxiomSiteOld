import { useInView } from "react-intersection-observer";
import TypewriterEffect from "../TypewriterEffect";
import "./aboutussection.css";

export default function AboutUsSection() {
  const classesOffered = [
    "Python",
    "Java",
    "C++",
    "7th Grade Math",
    "Algebra",
    "Geometry"
  ];

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div
      className={`about-us ${inView ? "fade-from-left" : "hidden"}`}
      ref={ref}
    >
      <h1 className="learn-title">
        Learn <span className = "special-highlight"><TypewriterEffect words={classesOffered}/></span>
        <br />
        <span className="learn-special-background">Effectively.</span>
      </h1>
      <p className="learn-description">
        Learning should always be fun, not a chore which you hate. Stop wasting
        your time trying to cram for tests and{" "}
        <span className="special-highlight">
          start learning the material in a way that sticks.
        </span>
      </p>
    </div>
  );
}
