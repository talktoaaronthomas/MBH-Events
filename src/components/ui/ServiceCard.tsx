'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  title: string;
  emoji: string;
  shortDescription: string;
  heroImage: string;
  tier: 'flagship' | 'premium' | 'standard';
  index?: number;
  compact?: boolean;
}

export default function ServiceCard({
  slug,
  title,
  emoji,
  shortDescription,
  heroImage,
  tier,
  index = 0,
  compact = false,
}: ServiceCardProps) {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as any as any,
            delay: index * 0.05,
          },
        },
      }}
      className="h-full"
    >
      <Link
        href={`/services/${slug}`}
        className={`group relative flex flex-col justify-end ${compact ? 'h-[160px] md:h-[200px]' : 'h-[180px] md:h-[220px]'} overflow-hidden rounded-2xl border transition-all duration-500
          ${tier === 'flagship'
            ? 'border-mbh-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]'
            : tier === 'premium'
            ? 'border-mbh-gold-400/20'
            : 'border-white/5'
          }
          hover:border-mbh-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.15)]
          hover:-translate-y-2
        `}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-mbh-black via-mbh-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-mbh-black/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Badge */}
        {tier !== 'standard' && (
          <div className="absolute top-6 right-6 z-20">
            <span
              className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full
                ${tier === 'flagship'
                  ? 'bg-mbh-gold text-white shadow-[--shadow-glow-sm]'
                  : 'bg-white/10 backdrop-blur-sm text-mbh-gold-200 border border-mbh-gold-400/30'
                }
              `}
            >
              {tier === 'flagship' ? '⭐ Flagship' : '💍 Premium'}
            </span>
          </div>
        )}

        {/* Content */}
        <div className={`relative z-20 ${compact ? 'p-5 md:p-6' : 'p-6 md:p-10'} flex flex-col justify-end h-full`}>
          <div className="mb-2">
            <h3 className={`font-heading ${compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-semibold text-mbh-white group-hover:text-mbh-gold-300 transition-colors duration-300 leading-tight drop-shadow-md pr-12`}>
              {title}
            </h3>
          </div>
          <p className={`${compact ? 'text-sm md:text-base line-clamp-2' : 'text-base md:text-lg'} text-mbh-white/90 leading-relaxed drop-shadow pr-12`}>
            {shortDescription}
          </p>
          
          {/* Hover arrow */}
          <div className={`absolute ${compact ? 'bottom-5 right-5' : 'bottom-6 right-6 md:bottom-10 md:right-10'} w-10 h-10 rounded-full bg-mbh-gold/80 flex items-center justify-center opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0`}>
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mbh-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      </Link>
    </motion.div>
  );
}

