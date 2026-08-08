'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';

const clientLogos = [
  'Emirates Group',
  'Microsoft',
  'Samsung',
  'ADNOC',
  'Etihad',
  'du Telecom',
  'Emaar',
  'Majid Al Futtaim',
  'DMCC',
  'Abu Dhabi Tourism',
  'Expo City',
  'Mastercard',
];

export default function ClientLogos() {
  return (
    <ScrollReveal variant="fadeIn">
      <div className="relative overflow-hidden py-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-mbh-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-mbh-black to-transparent z-10" />

        {/* Scrolling marquee */}
        <div className="flex animate-[scroll-marquee_30s_linear_infinite] hover:pause">
          {[...clientLogos, ...clientLogos].map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center"
            >
              <div className="px-6 py-3 rounded-lg border border-white/5 bg-white/[0.02] text-mbh-white-dim hover:text-mbh-white hover:border-mbh-purple/20 transition-all duration-300 whitespace-nowrap">
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
