import { useRef } from "react";
import "./navbartitle.css";

export default function NavBarTitle() {
  const intervalId = useRef<number>();
  const ref = useRef<HTMLAnchorElement>(null);

  const text = "HAXIOM";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId.current);

    let iteration = 0;

    intervalId.current = setInterval(() => {
      if (!ref.current) return;

      ref.current.innerText = ref.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(intervalId.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <a
      ref={ref}
      onMouseEnter={handleMouseEnter}
      href="/"
      className="navbar-title"
    >
      {text}
    </a>
  );
}
