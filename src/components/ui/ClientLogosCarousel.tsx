'use client';

import Image from 'next/image';

const clients = [
  { name: 'Delano', image: '/images/clients/Delano Logo.png' },
  { name: 'Emaar', image: '/images/clients/Emaar logo.png' },
  { name: 'Fairmont Dubai', image: '/images/clients/Fairmont dubai logo.webp' },
  { name: 'Hilton Habtoor', image: '/images/clients/Hilton habtoor logo.jpg' },
  { name: 'Ibis One Central', image: '/images/clients/Ibis one central logo.png' },
  { name: 'Jumeirah Mina A Salam', image: '/images/clients/Jumeirah Min a salam logo.png' },
  { name: 'Jumeirah Beach Hotel', image: '/images/clients/Jumeirah beach hotel logo.png' },
  { name: 'Madinat Jumeirah', image: '/images/clients/Madinat jumeirah logo.png' },
  { name: 'One&Only Zabeel', image: '/images/clients/One&only zabeel logo.jpg' },
  { name: 'Atlantis The Palm', image: '/images/clients/Palm jumeirah atlantis logo.png' },
  { name: 'Rixos Dubai', image: '/images/clients/Rixos dubai logo.jpg' },
  { name: 'Sheraton Dubai', image: '/images/clients/Sheraton dubai logo.jpg' },
  { name: 'Taj Hotel Dubai', image: '/images/clients/Taj hotel dubai logo.webp' },
  { name: 'W Hotel Yas Island', image: '/images/clients/W hotel yas island logo.jpg' },
];

export default function ClientLogosCarousel() {
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
