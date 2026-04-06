import { useEffect, useRef, useState, useCallback } from "react";

export function useAutoScroll(speed = 1) {
  const [isScrolling, setIsScrolling] = useState(false);
  const intervalRef = useRef(null);
  const scrollSpeed = speed; // px per tick

  const start = useCallback(() => {
    setIsScrolling(true);
    intervalRef.current = setInterval(() => {
      window.scrollBy({ top: scrollSpeed, behavior: "auto" });
    }, 50);
  }, [scrollSpeed]);

  const stop = useCallback(() => {
    setIsScrolling(false);
    clearInterval(intervalRef.current);
  }, []);

  const toggle = useCallback(() => {
    if (isScrolling) stop(); else start();
  }, [isScrolling, start, stop]);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return { isScrolling, toggle, start, stop };
}
