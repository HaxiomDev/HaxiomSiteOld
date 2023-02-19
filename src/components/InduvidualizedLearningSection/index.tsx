import { useInView } from "react-intersection-observer";
import "./induvidualizedlearningsection.css";

import PersonIcon from "../../assets/person-icon.svg";

export default function InduvidualizedLearningSection() {
  const { ref, inView } = useInView({
    threshold: 0.25
  });

  const images = [
    <img className="induvidual-image" src={PersonIcon} alt="Person Icon" />,
    <img className="induvidual-image" src={PersonIcon} alt="Person Icon" />,
    <img className="induvidual-image" src={PersonIcon} alt="Person Icon" />
  ];

  return (
    <div ref={ref} className="induvidualized-learning-section">
      <div className="induvidual-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`induvidual-image ${
              inView ? "fade-from-left" : "hidden"
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: 0
            }}
            src={image.props.src}
            alt={image.props.alt}
          />
        ))}
      </div>

      <div
        className={`induvidual-content ${
          inView ? "fade-from-right" : "hidden"
        }`}
      >
        <h1 className="learn-title">
          <span
            className="special-background"
            style={{
              backgroundColor: "rgb(var(--color-tertiary))"
            }}
          >
            Induvidualized
          </span>{" "}
          Learning
        </h1>

        <p className='induvidual-description'>
          With our small class sizes, we are able to provide a more{" "}
          <span className="special-highlight">personalized</span> learning
          experience for each student. We are able to provide more one-on-one
          time with our students, and provide more time for students to ask
          questions and get help. We also provide our students with abundant
          resources to understand{" "}
          <span className="special-highlight">high quality</span>videos and
          homework.
        </p>
      </div>
    </div>
  );
}
