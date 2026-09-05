'use client';

import { motion } from 'framer-motion';
import { Building2, Landmark, Factory, Plane, Gem, MonitorSmartphone, Coffee, Briefcase } from 'lucide-react';

const clients = [
  { name: 'Global Tech', icon: MonitorSmartphone },
  { name: 'Vertex Holdings', icon: Building2 },
  { name: 'Pinnacle Events', icon: Gem },
  { name: 'Acme Corp', icon: Factory },
  { name: 'Royal Estates', icon: Landmark },
  { name: 'Aero Dynamics', icon: Plane },
  { name: 'Brew & Co', icon: Coffee },
  { name: 'Quantum Partners', icon: Briefcase },
];

export default function ClientLogosCarousel() {
  // Duplicate the array so the marquee seamlessly loops
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="w-full overflow-hidden bg-mbh-black-card/30 border-y border-white/5 py-12 relative flex items-center">
      {/* Left/Right fading gradients for a smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-mbh-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-mbh-black to-transparent z-10" />

      {/* Marquee container */}
      <div className="flex w-max animate-scroll-marquee hover:[animation-play-state:paused]">
        {duplicatedClients.map((client, idx) => {
          const Icon = client.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 mx-8 sm:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300 group"
            >
              <Icon className="w-8 h-8 text-mbh-gold-400 group-hover:text-mbh-gold transition-colors duration-300" />
              <span className="font-heading text-lg font-semibold text-mbh-white-dim group-hover:text-mbh-white transition-colors duration-300 whitespace-nowrap">
                {client.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
