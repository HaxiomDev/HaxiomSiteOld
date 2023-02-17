import { useEffect, useRef } from "react";
import "./backgroundcircle.css";

export default function BackgroundCircle() {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent) => {
    const { clientX, clientY } = e;

    // get the page offset (scroll position)
    const { pageYOffset } = window;

    ref.current!.animate(
      {
        left: `${clientX}px`,
        top: `${clientY + pageYOffset}px`
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="blob"></div>
      <div className="blur"></div>
    </>
  );
}
