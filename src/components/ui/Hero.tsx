'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  bgImage?: string;
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
  overlayVariant = 'purple',
  size = 'full',
  align = 'center',
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

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

  return (
    <section className={`relative ${sizeClasses[size]} flex items-center overflow-hidden`}>
      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Fallback gradient background if no image */}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-mbh-black via-mbh-purple-950 to-mbh-black" />
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlayVariant === 'purple' ? 'gradient-overlay-purple' : 'gradient-overlay'
        }`}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-mbh-purple/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-mbh-purple/8 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-mbh w-full py-32 lg:py-40">
        <motion.div
          className={`flex flex-col ${alignClasses[align]} max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}
          initial="hidden"
          animate="visible"
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
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mbh-black to-transparent" />
    </section>
  );
}
