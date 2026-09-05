'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  text: string;
}

export default function ScrollHighlightText({ text }: Props) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text into words safely without premium plugins
    const words = text.split(' ');
    containerRef.current.innerHTML = '';
    
    words.forEach((word, i) => {
      const span = document.createElement('span');
      // Add a space after each word except the last
      span.textContent = word + (i < words.length - 1 ? ' ' : '');
      // Start with low opacity
      span.style.opacity = '0.2';
      containerRef.current?.appendChild(span);
    });

    const spans = containerRef.current.querySelectorAll('span');

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', 
          end: 'bottom 40%', 
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <p 
      ref={containerRef}
      className="text-xl sm:text-2xl text-mbh-white leading-relaxed text-center font-medium font-heading max-w-4xl mx-auto"
    >
      {text}
    </p>
  );
}
