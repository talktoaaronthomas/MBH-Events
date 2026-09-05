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
      className="h-full"
    >
      <Link
        href={`/services/${slug}`}
        className={`group relative flex flex-col md:flex-row h-full overflow-hidden rounded-2xl border transition-all duration-500
          ${tier === 'flagship'
            ? 'border-mbh-gold/30 bg-gradient-to-br from-mbh-gold/10 to-mbh-black-card shadow-[0_0_30px_rgba(212,175,55,0.1)]'
            : tier === 'premium'
            ? 'border-mbh-gold-400/20 bg-gradient-to-br from-mbh-gold-400/5 to-mbh-black-card'
            : 'border-white/5 bg-mbh-black-card'
          }
          hover:border-mbh-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.15)]
          hover:-translate-y-2
        `}
      >
        {/* Image */}
        <div className="relative h-64 md:h-auto md:w-2/5 md:min-h-[250px] overflow-hidden shrink-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-mbh-black-card via-transparent to-transparent" />

          {/* Badge */}
          {tier !== 'standard' && (
            <div className="absolute top-4 right-4">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full
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

          {/* Hover arrow */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-mbh-gold/80 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:pl-10 flex flex-col justify-center flex-1">
          <div className="flex items-start gap-3 mb-3">
            <h3 className="font-heading text-lg font-semibold text-mbh-white group-hover:text-mbh-gold-300 transition-colors duration-300 leading-tight">
              {title}
            </h3>
          </div>
          <p className="text-sm text-mbh-white-dim leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mbh-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </motion.div>
  );
}

