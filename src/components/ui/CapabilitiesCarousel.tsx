'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface IncludedService {
  title: string;
  description: string;
}

interface CapabilitiesCarouselProps {
  includedServices: IncludedService[];
  slug: string;
  galleryImages: string[];
}

export default function CapabilitiesCarousel({ includedServices, slug, galleryImages }: CapabilitiesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full group py-4">
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 md:-left-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-mbh-black-card border border-white/10 shadow-lg flex items-center justify-center text-mbh-white hover:text-mbh-gold hover:border-mbh-gold/30 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 md:-right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-mbh-black-card border border-white/10 shadow-lg flex items-center justify-center text-mbh-white hover:text-mbh-gold hover:border-mbh-gold/30 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-3 pb-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {includedServices.map((item, index) => (
          <div key={`${item.title}-${index}`} className="w-[320px] md:w-[400px] shrink-0 snap-start">
            <div className="services-card rounded-xl border border-white/5 bg-mbh-black-card overflow-hidden hover:border-mbh-gold/20 transition-all duration-300 h-full group/card flex flex-col">
              {['corporate-events', 'luxury-weddings'].includes(slug) && galleryImages?.length > 0 && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={galleryImages[index % galleryImages.length]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mbh-black-card via-mbh-black-card/80 to-transparent" />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-heading text-xl font-semibold text-mbh-white mb-3 flex items-start gap-2">
                  <CheckCircle size={20} className="text-mbh-gold flex-shrink-0 mt-1" />
                  {item.title}
                </h3>
                <p className="text-sm text-mbh-white-dim leading-relaxed whitespace-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
