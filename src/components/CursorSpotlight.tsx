'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CursorSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [visible, setVisible] = useState(false);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Detect fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    let animationFrameId: number;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const updatePosition = () => {
      // Lerp smoothing (0.2 factor for crisp, responsive movement)
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      if (spotRef.current) {
        spotRef.current.style.setProperty('--x', `${currentX.toFixed(1)}px`);
        spotRef.current.style.setProperty('--y', `${currentY.toFixed(1)}px`);
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!mounted || !isPointerFine) return null;

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `
          radial-gradient(
            220px circle at var(--x, -500px) var(--y, -500px),
            var(--spotlight-core, rgba(59, 130, 246, 0.18)),
            var(--spotlight-outer, rgba(59, 130, 246, 0.04)) 50%,
            transparent 80%
          )
        `,
      }}
    />
  );
}
