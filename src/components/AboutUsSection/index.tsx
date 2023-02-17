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

  return (
    <div className="about-us">
      <h1 className="learn-title">
        Learn <TypewriterEffect words={classesOffered} />
        <br />
        <span className="learn-special-background">Effectively.</span>
      </h1>
      <p className="learn-description">
        Learning should always be fun, not a chore which you hate. Stop wasting
        your time trying to cramming for tests and{" "}
        <span className="special-highlight">
          start learning the material in a way that sticks.
        </span>
      </p>
    </div>
  );
}
