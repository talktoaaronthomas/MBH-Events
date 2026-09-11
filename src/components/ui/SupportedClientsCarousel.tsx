'use client';

import Image from 'next/image';

const clients = [
  { name: 'B Launch', image: '/images/supported-clients/B Launch logo.jpeg' },
  { name: 'Indorama', image: '/images/supported-clients/Indorama Logo.jpg' },
  { name: 'Tax B', image: '/images/supported-clients/Tax B Logo.png' },
  { name: 'Transguard Group', image: '/images/supported-clients/Transguard Group Logo.png' },
  { name: 'YallaMarket', image: '/images/supported-clients/YallaMarket Logo.jpg' },
  { name: 'Banner', image: '/images/supported-clients/banner-1544x500.png' },
  { name: 'BNW Developments', image: '/images/supported-clients/bnwdevelopments_logo.jpg' },
  { name: 'Leap Interactive', image: '/images/supported-clients/leapinteractive_logo.jpg' },
  { name: 'Mice Minds', image: '/images/supported-clients/mice_minds_logo.jpg' },
];

export default function SupportedClientsCarousel() {
  // Duplicate the array so the marquee seamlessly loops
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="w-full overflow-hidden bg-mbh-black-card/30 border-y border-white/5 py-12 relative flex items-center">
      {/* Left/Right fading gradients for a smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-mbh-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-mbh-black to-transparent z-10 pointer-events-none" />

      {/* Marquee container */}
      <div className="flex w-max animate-scroll-marquee hover:[animation-play-state:paused]">
        {duplicatedClients.map((client, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center mx-8 sm:mx-12 opacity-60 hover:opacity-100 transition-all duration-300 group"
          >
            <div className="relative w-32 h-16 sm:w-40 sm:h-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
