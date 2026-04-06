import { useEffect, useRef, useCallback } from "react";

export function useMetronome(tempo, isActive) {
  const intervalRef = useRef(null);
  const audioCtxRef = useRef(null);
  const beatRef = useRef(0);

  const getAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const playClick = useCallback((isAccent = false) => {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(isAccent ? 1200 : 800, ctx.currentTime);
    gain.gain.setValueAtTime(isAccent ? 0.5 : 0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  }, [getAudioCtx]);

  useEffect(() => {
    if (isActive) {
      const intervalMs = (60 / tempo) * 1000;
      beatRef.current = 0;
      playClick(true);
      intervalRef.current = setInterval(() => {
        beatRef.current = (beatRef.current + 1) % 4;
        playClick(beatRef.current === 0);
      }, intervalMs);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, tempo, playClick]);

  return null;
}
