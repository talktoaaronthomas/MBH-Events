'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HeroProps {
  tagline?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  bgImage?: string;
  size?: 'full' | 'large' | 'medium';
  align?: 'center' | 'left';
}

const frameCount = 76;
const currentFrame = (index: number) =>
  `/hero-sequence/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

export default function Hero({
  tagline = "Turning Moments into Legacy",
  title = <>Where Vision Meets <span className="text-white">Extraordinary Execution</span></>,
  subtitle = "MBH Events delivers world-class luxury weddings, corporate experiences, and exclusive events with precision and creative brilliance.",
  ctaText = "Plan Your Event",
  ctaHref = "/contact",
  secondaryCtaText = "Explore Services",
  secondaryCtaHref = "/services",
  bgImage,
  size = 'full',
  align = 'center',
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Preload images
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }
    
    const seq = { frame: 0 };
    
    // Setup drawing function to handle "background-size: cover" behavior on canvas
    const render = () => {
      const img = images[Math.round(seq.frame)];
      if (img && img.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;
        
        if (canvasRatio > imgRatio) {
           drawHeight = canvas.width / imgRatio;
           offsetY = (canvas.height - drawHeight) / 2;
        } else {
           drawWidth = canvas.height * imgRatio;
           offsetX = (canvas.width - drawWidth) / 2;
        }
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };
    
    // Handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    
    // Initial draw once first image is loaded
    const initImage = new Image();
    initImage.src = currentFrame(0);
    initImage.onload = () => {
      handleResize();
      if(loadedCount === 0) setIsLoaded(true); // Fallback to show first frame quickly
    };

    window.addEventListener('resize', handleResize);

    const ctx = gsap.context(() => {
      // Sequence scroll animation
      gsap.to(seq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // 0.5s smooth scrubbing
        },
        onUpdate: render,
      });

      // Text fade out on scroll
      gsap.to(textRef.current, {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000', // Fade out over the first 1000px of scroll
          scrub: true,
        }
      });
    }, containerRef);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [bgImage]);

  const sizeClasses = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[60vh]',
  };

  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  // If bgImage is provided, render static backwards-compatible version
  if (bgImage) {
    return (
      <section className={`relative flex flex-col ${sizeClasses[size]}`}>
        <div className={`sticky top-0 w-full flex items-center overflow-hidden ${sizeClasses[size]}`}>
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mbh-black via-mbh-gold-950/60 to-mbh-black z-0" />
          <div className="absolute inset-0 z-0 gradient-overlay-gold" />
          
          <div className="relative z-10 container-mbh w-full h-full py-32 lg:py-40 flex items-center justify-center">
            <div className={`flex flex-col ${alignClasses[align]} max-w-4xl px-4 w-full ${align === 'center' ? 'mx-auto' : ''}`}>
              {tagline && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mbh-gold/30 bg-mbh-gold/10 text-mbh-gold-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-mbh-gold animate-[glow-pulse_3s_ease-in-out_infinite]" />
                  {tagline}
                </span>
              )}
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-mbh-white mb-6 drop-shadow-lg">
                {title}
              </h1>
              
              {subtitle && (
                <p className="text-base sm:text-lg md:text-xl text-mbh-white font-medium leading-relaxed max-w-2xl mb-10 drop-shadow-lg">
                  {subtitle}
                </p>
              )}
              
              <div className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
                {ctaText && (
                  <Link
                    href={ctaHref!}
                    className="btn-glow px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2 group animate-[glow-pulse_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    {ctaText}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                )}
                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaHref!}
                    className="px-8 py-4 rounded-xl text-base font-semibold text-mbh-white border border-white/30 bg-black/20 backdrop-blur-sm hover:border-mbh-gold/50 hover:bg-mbh-gold/20 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mbh-black via-mbh-black/80 to-transparent z-10 pointer-events-none" />
        </div>
      </section>
    );
  }

  // Scroll sequence version
  return (
    <section ref={containerRef} className="relative h-[400vh] bg-mbh-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-mbh-black">
        
        {/* Loading Spinner overlay */}
        {!isLoaded && (
           <div className="absolute inset-0 flex items-center justify-center z-20 bg-mbh-black">
             <span className="w-10 h-10 rounded-full border-4 border-mbh-gold border-t-transparent animate-spin"></span>
           </div>
        )}
        
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0"
        />
        
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-mbh-black/60 via-mbh-black/30 to-mbh-black/80 z-10" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-mbh-gold/10 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-mbh-gold/10 blur-[100px]" />
        </div>

        {/* Text Overlay */}
        <div 
          ref={textRef}
          className="relative z-20 container-mbh w-full h-full flex flex-col items-center justify-center text-center px-4"
        >
          {tagline && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mbh-gold/30 bg-mbh-gold/10 text-mbh-gold-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-mbh-gold animate-[glow-pulse_3s_ease-in-out_infinite]" />
              {tagline}
            </span>
          )}
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-mbh-white mb-6 drop-shadow-lg max-w-5xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-mbh-white font-medium leading-relaxed max-w-2xl mb-10 drop-shadow-lg">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-wrap gap-4 justify-center">
            {ctaText && (
              <Link
                href={ctaHref!}
                className="btn-glow px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2 group animate-[glow-pulse_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                {ctaText}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            )}
            {secondaryCtaText && (
              <Link
                href={secondaryCtaHref!}
                className="px-8 py-4 rounded-xl text-base font-semibold text-mbh-white border border-white/30 bg-black/20 backdrop-blur-sm hover:border-mbh-gold/50 hover:bg-mbh-gold/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
