"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;

      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        pos.current = { ...target.current };
        cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
        tickingRef.current = false;
        rafRef.current = null;
        return;
      }

      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const scheduleAnimate = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      scheduleAnimate();
    };

    const setHovering = (hovering: boolean) => {
      cursor.classList.toggle("hovering", hovering);
      dot.classList.toggle("hovering", hovering);
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest(HOVER_SELECTOR);
      if (el) setHovering(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      const to = e.relatedTarget as Element | null;
      if (to?.closest(HOVER_SELECTOR)) return;
      setHovering(false);
    };

    const onWindowMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        cursor.style.opacity = "0";
        dot.style.opacity = "0";
      }
    };

    const onWindowMouseOver = () => {
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    document.addEventListener("mouseout", onWindowMouseOut);
    document.addEventListener("mouseover", onWindowMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseout", onWindowMouseOut);
      document.removeEventListener("mouseover", onWindowMouseOver);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
