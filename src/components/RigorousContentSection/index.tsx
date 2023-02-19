import "./rigorouscontentsection.css";

import { useInView } from "react-intersection-observer";

export default function RigorousContentSection() {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div
      className={`learn-section ${inView ? "fade-from-left" : "hidden"}`}
      ref={ref}
    >
      <h1 className="learn-title">
        Learn By{" "}
        <span
          className="special-background"
          style={{
            backgroundColor: "rgb(var(--color-primary))"
          }}
        >
          Rigorous
        </span>{" "}
        Content
      </h1>

      <p className="learn-description">
        With our rigorous content, we focus on teaching students the art of
        learning and problem solving. We teach students how to think critically
        and solve problems in a way that sticks. We also provide our students
        with abundant resources to understand high quality videos and homework.
      </p>
    </div>
  );
}
