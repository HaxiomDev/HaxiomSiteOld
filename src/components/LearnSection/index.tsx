import { useInView } from "react-intersection-observer";
import TypewriterEffect from "../TypewriterEffect";
import "./learnsection.css";

export default function LearnSection() {
  const { ref, inView } = useInView({
    threshold: 0
  });

  const classesOffered = [
    "Python",
    "Java",
    "C++",
    "7th Grade Math",
    "Algebra",
    "Geometry"
  ];

  return (
    <div
      className={`learn-section ${inView ? "fade-from-left" : "hidden"}`}
      ref={ref}
    >
      <h1 className="learn-title">
        Learn{" "}
        <span className="special-highlight">
          <TypewriterEffect words={classesOffered} />
        </span>
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
