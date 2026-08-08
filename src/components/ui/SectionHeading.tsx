import ScrollReveal from '@/components/animations/ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
  className = '',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <ScrollReveal variant="fadeUp" delay={0}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mbh-purple/30 bg-mbh-purple/10 text-mbh-purple-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-mbh-purple" />
            {label}
          </span>
        </ScrollReveal>
      )}

      <ScrollReveal variant="fadeUp" delay={0.1}>
        <h2
          className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4
            ${light ? 'text-mbh-white' : 'text-mbh-white'}
          `}
        >
          {title}
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-mbh-white-muted`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}

      <ScrollReveal variant="fadeUp" delay={0.3}>
        <div className={`accent-line mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      </ScrollReveal>
    </div>
  );
}
