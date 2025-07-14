import { useState, useEffect, useRef } from "react";

const TYPING_INTERVAL = 40;

export function useTypingOnView(fullText: string) {
  const [text, setText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let isMounted = true;

    const typeText = (index = 0) => {
      if (!isMounted) return;

      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setTimeout(() => typeText(index + 1), TYPING_INTERVAL);
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [hasStarted, fullText]);

  return { text, containerRef };
}
