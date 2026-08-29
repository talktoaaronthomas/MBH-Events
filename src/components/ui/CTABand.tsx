import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface CTABandProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'gradient' | 'gold' | 'dark';
  showOverlay?: boolean;
}

export default function CTABand({
  title,
  subtitle,
  ctaText = 'Plan Your Event',
  ctaHref = '/contact',
  variant = 'gradient',
  showOverlay = true,
}: CTABandProps) {
  const bgClasses = {
    gradient: 'gradient-section',
    gold: 'bg-gradient-to-r from-mbh-gold-900 via-mbh-gold-800 to-mbh-gold-900',
    dark: 'bg-mbh-black-light',
  };

  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${bgClasses[variant]}`}>
      {/* Decorative elements */}
      {showOverlay && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-mbh-gold/10 blur-[150px]" />
        </div>
      )}

      <div className="relative z-10 container-mbh text-center">
        <ScrollReveal variant="fadeUp">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-mbh-white mb-6 leading-tight">
            {title}
          </h2>
        </ScrollReveal>

        {subtitle && (
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <p className="text-base sm:text-lg text-mbh-white-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal variant="scaleUp" delay={0.2}>
          <Link
            href={ctaHref}
            className="btn-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white group"
          >
            {ctaText}
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
