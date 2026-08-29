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
}

export default function ServiceCard({
  slug,
  title,
  emoji,
  shortDescription,
  heroImage,
  tier,
  index = 0,
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
      className="w-full"
    >
      <Link
        href={`/services/${slug}`}
        className="group relative flex flex-col justify-center min-h-[140px] sm:min-h-[160px] p-6 sm:p-8 overflow-hidden rounded-2xl border border-white/5 bg-mbh-black-card hover:border-mbh-gold/50 hover:shadow-[0_0_30px_rgba(123,47,190,0.15)] transition-all duration-500"
      >
        {/* Background Image (hidden by default) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-mbh-black/80 group-hover:bg-mbh-black/60 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 h-full">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-mbh-white group-hover:text-mbh-gold-300 transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-mbh-white-dim group-hover:text-mbh-white-muted transition-colors max-w-3xl leading-relaxed">
              {shortDescription}
            </p>
          </div>

          {/* Badge & Arrow */}
          <div className="flex items-center gap-4 shrink-0 mt-4 md:mt-0">
            {tier !== 'standard' && (
              <span
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md
                  ${tier === 'flagship'
                    ? 'bg-mbh-gold/90 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-white/10 text-mbh-gold-200 border border-mbh-gold-400/30'
                  }
                `}
              >
                {tier === 'flagship' ? '⭐ Flagship' : '💍 Premium'}
              </span>
            )}
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-mbh-gold group-hover:border-mbh-gold transition-colors duration-300">
              <ArrowUpRight size={18} className="text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

