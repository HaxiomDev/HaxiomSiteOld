import { useEffect, useRef, useState } from "react";
import "./typewritereffect.css";

type Props = {
  words: string[];
};

export default function TypewriterEffect(props: Props) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [wordBuffer, setWordBuffer] = useState("");
  const intervalId = useRef<number | undefined>(undefined);

  useEffect(() => {
    let wordIndex = 0;
    let goingUp = true;

    let word = props.words[currentWordIdx];

    intervalId.current = setInterval(() => {
      if (goingUp) {
        if (wordIndex++ > word.length) {
          goingUp = false;
          return;
        }

        setWordBuffer(word.substring(0, wordIndex));
      } else {
        if (wordIndex-- < 0) {
          let randomIdx = Math.floor(Math.random() * props.words.length);

          while (randomIdx === currentWordIdx) {
            randomIdx = Math.floor(Math.random() * props.words.length);
          }

          setCurrentWordIdx(randomIdx);
          clearInterval(intervalId.current);
        }

        setWordBuffer(word.substring(0, wordIndex));
      }
    }, 100);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [currentWordIdx, props.words]);

  return <span className="typewriter">{wordBuffer}</span>;
}
