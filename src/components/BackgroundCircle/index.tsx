import { useEffect, useRef } from "react";
import "./backgroundcircle.css";

function isMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

export default function BackgroundCircle() {
  if (isMobile()) return <></>;

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
