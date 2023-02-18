import { useInView } from "react-intersection-observer";
import "./induvidualizedlearningsection.css";

export default function InduvidualizedLearningSection() {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`induvidualized-learning-section ${
        inView ? "fade-from-right" : "hidden"
      }`}
    >
      <h1 className="learn-title">
        <span className="induvidual-special-background">Induvidualized</span>{" "}
        Learning
      </h1>

      <p className="induvidual-description">
        With our small class sizes, we are able to provide a more{" "}
        <span className="special-highlight">personalized</span> learning
        experience for each student. We are able to provide more one-on-one time
        with our students, and provide more time for students to ask questions
        and get help. We also provide our students with abundant resources to
        learn through <span className="special-highlight">high quality</span>{" "}
        videos and homework.
      </p>
    </div>
  );
}
