import { useCallback, useEffect, useRef, useState } from "react";

const MAX_TYPING_SPEED = 100;

interface ITypewrite {
  textLine: string;
  typingSpeed?: number;
  automaticStart?: boolean;
  delay?: number;
  className?: string;
  onFinish?: () => void;
}

const Typewrite = (props: ITypewrite) => {
  const {
    textLine,
    typingSpeed = 10,
    automaticStart = true,
    delay = 0,
    className = "",
    onFinish,
  } = props;

  const textBoxRef = useRef<HTMLDivElement>(null);

  const [lastLineIndex, setLastLineIndex] = useState<number>(-1);

  useEffect(() => {
    if (!textBoxRef?.current || !automaticStart) return;

    setTimeout(() => {
      typewrite(textLine);
    }, delay);
  }, [textBoxRef]);

  const typewrite = useCallback(
    (line: string, charPos = 0, skip = false) => {
      let cPos = charPos;
      const currentContent = textBoxRef.current?.innerHTML;

      // * Add each letter
      if (MAX_TYPING_SPEED - typingSpeed === 0) {
        textBoxRef.current.innerHTML = `${currentContent} ${line}`;
        cPos = line.length;
      } else {
        let letter = `${line.charAt(cPos)}`;
        let charsSkipCount = 1;

        // * html tags must be added as whole, not per char
        let readyToBreak = false;
        if (letter === "<") {
          letter = "";
          // * get the whole html tag
          for (let i = cPos; i < line.length; i += 1) {
            letter += line[i];

            // * the closing tags comes with the "/" and either:
            // * the previous char was a "<"
            // * or the next one is a ">"
            readyToBreak =
              readyToBreak ||
              (line[i] === "/" && (line[i - 1] === "<" || line[i + 1] === ">"));

            if (line[i] === ">" && readyToBreak) break;
            charsSkipCount += 1;
          }
        }

        textBoxRef.current?.insertAdjacentHTML("beforeend", letter);
        cPos += charsSkipCount;
      }

      // * When adding the last letter of the line
      if (cPos !== line.length) {
        const speed = MAX_TYPING_SPEED - typingSpeed;

        if (speed === 0) {
          typewrite(line, cPos, skip);
          return;
        }

        setTimeout(() => typewrite(line, cPos), speed);
      } else {
        setLastLineIndex(textLine.indexOf(line));
        if (onFinish) onFinish();
      }
    },
    [lastLineIndex]
  );

  return <div ref={textBoxRef} className={`${className}`} />;
};

export default Typewrite;
