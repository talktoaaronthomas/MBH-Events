'use client';

import { useEffect, useRef } from 'react';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  bgImage?: string;
  overlay?: boolean;
  overlayVariant?: 'dark' | 'purple' | 'gradient';
}

export default function ParallaxSection({
  children,
  speed = 0.3,
  className = '',
  bgImage,
  overlay = true,
  overlayVariant = 'dark',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (sectionRef.current && bgRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const scrolled = rect.top;
            bgRef.current.style.transform = `translateY(${scrolled * speed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const overlayClasses = {
    dark: 'gradient-overlay',
    purple: 'gradient-overlay-purple',
    gradient: 'gradient-section',
  };

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <div
          ref={bgRef}
          className="absolute inset-0 -top-[20%] -bottom-[20%] bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      {overlay && bgImage && (
        <div className={`absolute inset-0 ${overlayClasses[overlayVariant]}`} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
