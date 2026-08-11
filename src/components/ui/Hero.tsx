'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export interface HeroImageContent {
  src: string;
  heading: string;
  description: string;
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  bgImage?: string;
  images?: string[]; // Kept for backwards compatibility if needed
  imageContent?: HeroImageContent[];
  overlayVariant?: 'dark' | 'purple';
  size?: 'full' | 'large' | 'medium';
  align?: 'center' | 'left';
}

export default function Hero({
  title,
  subtitle,
  tagline,
  ctaText,
  ctaHref = '/contact',
  secondaryCtaText,
  secondaryCtaHref = '/services',
  bgImage,
  images,
  imageContent,
  overlayVariant = 'purple',
  size = 'full',
  align = 'center',
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    window.addEventListener('appLoaded', handleLoad);
    // Fallback just in case
    const timer = setTimeout(() => setIsLoaded(true), 3500);
    return () => {
      window.removeEventListener('appLoaded', handleLoad);
      clearTimeout(timer);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const sizeClasses = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[60vh]',
  };

  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  // Scroll animations for multiple images
  // Image 1: 40% (0-0.40)
  // Image 2: 30% (0.40-0.70)
  // Image 3: 30% (0.70-1.0)
  const opacity1 = useTransform(scrollYProgress, [0, 0.35, 0.40, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.35, 0.40, 0.65, 0.70, 1], [0, 0, 1, 1, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.65, 0.70, 1], [0, 0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  
  // Subtle parallax effect on text positions
  // Keep text stationary while visible, translate slightly while fading
  const textY1 = useTransform(scrollYProgress, [0, 0.35, 0.40, 1], [0, 0, 30, 30]);
  const textY2 = useTransform(scrollYProgress, [0, 0.35, 0.40, 0.65, 0.70, 1], [-30, -30, 0, 0, 30, 30]);
  const textY3 = useTransform(scrollYProgress, [0, 0.65, 0.70, 1], [-30, -30, 0, 0]);

  // Pointer events control so that invisible text sections don't block clicks
  const pointer1 = useTransform(scrollYProgress, (v) => v < 0.40 ? 'auto' : 'none');
  const pointer2 = useTransform(scrollYProgress, (v) => v > 0.35 && v < 0.70 ? 'auto' : 'none');
  const pointer3 = useTransform(scrollYProgress, (v) => v > 0.65 ? 'auto' : 'none');

  const opacities = [opacity1, opacity2, opacity3];
  const textYs = [textY1, textY2, textY3];
  const pointers = [pointer1, pointer2, pointer3];

  const hasMultipleImages = (imageContent && imageContent.length > 0) || (images && images.length > 0);
  const useRichContent = imageContent && imageContent.length > 0;

  return (
    <section 
      ref={containerRef}
      className={`relative flex flex-col ${hasMultipleImages ? 'h-[500vh]' : sizeClasses[size]}`}
    >
      <div className={`sticky top-0 w-full flex items-center overflow-hidden ${sizeClasses[size]}`}>
        
        {/* Single Background Image */}
        {!hasMultipleImages && bgImage && (
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}

        {/* Multiple Images with Scroll Animation (Rich Content) */}
        {useRichContent && (
          <>
            {imageContent.map((content, idx) => (
              <motion.div key={idx} style={{ opacity: opacities[idx], scale }} className="absolute inset-0 z-0">
                <Image src={content.src} alt={`Hero ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
              </motion.div>
            ))}
          </>
        )}

        {/* Backwards compatibility for string[] images */}
        {!useRichContent && images && (
          <>
            {images.map((img, idx) => (
              <motion.div key={idx} style={{ opacity: opacities[idx], scale }} className="absolute inset-0 z-0">
                <Image src={img} alt={`Hero ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
              </motion.div>
            ))}
          </>
        )}

        {/* Fallback gradient background if no images */}
        {!bgImage && !hasMultipleImages && (
          <div className="absolute inset-0 bg-gradient-to-br from-mbh-black via-mbh-purple-950 to-mbh-black z-0" />
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 z-0 ${
            overlayVariant === 'purple' ? 'gradient-overlay-purple' : 'gradient-overlay'
          }`}
        />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-mbh-purple/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-mbh-purple/8 blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-mbh w-full h-full py-32 lg:py-40 flex items-center justify-center">
          
          {useRichContent ? (
            // Dynamic text based on scroll progress
            imageContent.map((content, idx) => (
              <motion.div
                key={idx}
                style={{ opacity: opacities[idx], y: textYs[idx], pointerEvents: pointers[idx] }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col ${alignClasses[align]} max-w-4xl px-4 w-full`}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {/* Tagline */}
                {tagline && (
                  <motion.div variants={itemVariants}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mbh-purple/30 bg-mbh-purple/10 text-mbh-purple-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-mbh-purple animate-[glow-pulse_3s_ease-in-out_infinite]" />
                      {tagline}
                    </span>
                  </motion.div>
                )}

                {/* Title */}
                <motion.h1
                  variants={itemVariants}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-mbh-white mb-6 drop-shadow-lg"
                >
                  {content.heading}
                </motion.h1>

                {/* Subtitle */}
                {content.description && (
                  <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl text-mbh-white-muted leading-relaxed max-w-2xl mb-10 drop-shadow-md"
                  >
                    {content.description}
                  </motion.p>
                )}

                {/* CTAs */}
                {(ctaText || secondaryCtaText) && (
                  <motion.div
                    variants={itemVariants}
                    className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}
                  >
                    {ctaText && (
                      <Link
                        href={ctaHref}
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
                        href={secondaryCtaHref}
                        className="px-8 py-4 rounded-xl text-base font-semibold text-mbh-white border border-white/30 bg-black/20 backdrop-blur-sm hover:border-mbh-purple/50 hover:bg-mbh-purple/20 transition-all duration-300 inline-flex items-center gap-2"
                      >
                        {secondaryCtaText}
                      </Link>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            // Static text content
            <motion.div
              className={`flex flex-col ${alignClasses[align]} max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Tagline */}
              {tagline && (
                <motion.div variants={itemVariants}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mbh-purple/30 bg-mbh-purple/10 text-mbh-purple-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-mbh-purple animate-[glow-pulse_3s_ease-in-out_infinite]" />
                    {tagline}
                  </span>
                </motion.div>
              )}

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-mbh-white mb-6"
              >
                {title}
              </motion.h1>

              {/* Subtitle */}
              {subtitle && (
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg md:text-xl text-mbh-white-muted leading-relaxed max-w-2xl mb-10"
                >
                  {subtitle}
                </motion.p>
              )}

              {/* CTAs */}
              {(ctaText || secondaryCtaText) && (
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}
                >
                  {ctaText && (
                    <Link
                      href={ctaHref}
                      className="btn-glow px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2 group animate-[glow-pulse_3s_ease-in-out_infinite]"
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
                      href={secondaryCtaHref}
                      className="px-8 py-4 rounded-xl text-base font-semibold text-mbh-white border border-white/20 hover:border-mbh-purple/50 hover:bg-mbh-purple/10 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      {secondaryCtaText}
                    </Link>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mbh-black via-mbh-black/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
