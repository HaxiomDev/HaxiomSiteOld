import { useInView } from "react-intersection-observer";

export default function RigorousContentSection() {
  const { inView, ref } = useInView({
    threshold: 0.5
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
            backgroundColor: "rgb(var(--color-secondary), 0.8)"
          }}
        >
          Rigorous
        </span>{" "}
        Content
      </h1>

      <p className="learn-description">
        With our rigorous content, we focus on teaching students the art of
        learning and problem solving. We teach students how to think {" "}
        <span className="special-highlight">critically</span> and solve problems in a way that sticks. We also provide our students
        with abundant resources to understand {" "}
        <span className="special-highlight">high-quality</span> videos and homework.
      </p>
    </div>
  );
}
