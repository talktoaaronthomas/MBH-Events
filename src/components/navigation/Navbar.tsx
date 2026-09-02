'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Star,
  Gem,
  ClipboardList,
  Palette,
  MonitorSpeaker,
  Mic2,
  Users,
  Truck,
  Rocket,
  HardHat,
} from 'lucide-react';

const serviceLinks = [
  { slug: 'corporate-events', title: 'Corporate Events & Experiences', icon: Star, tier: 'flagship' as const },
  { slug: 'luxury-weddings', title: 'Luxury Weddings & Social Events', icon: Gem, tier: 'premium' as const },
  { slug: 'event-planning', title: 'Event Planning & Management', icon: ClipboardList, tier: 'standard' as const },
  { slug: 'creative-design', title: 'Creative & Experience Design', icon: Palette, tier: 'standard' as const },
  { slug: 'production-technical', title: 'Production & Technical Solutions', icon: MonitorSpeaker, tier: 'standard' as const },
  { slug: 'talent-entertainment', title: 'Talent & Entertainment', icon: Mic2, tier: 'standard' as const },
  { slug: 'event-staffing', title: 'Event Staffing & Crowd Management', icon: Users, tier: 'standard' as const },
  { slug: 'logistics-hospitality', title: 'Logistics & Hospitality Management', icon: Truck, tier: 'standard' as const },
  { slug: 'exhibitions-activations', title: 'Exhibitions & Brand Activations', icon: Rocket, tier: 'standard' as const },
  { slug: 'event-rentals', title: 'Event Rentals & Infrastructure', icon: HardHat, tier: 'standard' as const },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial preloader simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.dispatchEvent(new Event('appLoaded'));
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-mbh-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              layoutId="site-logo"
              className="relative w-64 h-32 sm:w-80 sm:h-40"
              initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src="/images/logo.png"
                alt="MBH Events"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isLoading ? -100 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'top-4 w-[calc(100%-2rem)] lg:w-[95%] max-w-7xl bg-mbh-black-light/60 backdrop-blur-xl rounded-2xl lg:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-2'
            : 'top-0 w-full bg-transparent backdrop-blur-none py-5 rounded-none shadow-none'
        }`}
      >
        <div className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ${isScrolled ? 'px-4 lg:px-10' : 'px-6 md:px-8 xl:px-16'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={`relative transition-all duration-500 ${isScrolled ? 'w-40 h-12' : 'w-48 h-20 sm:w-56 sm:h-24'}`}>
              {!isLoading && (
                <motion.div
                  layoutId="site-logo"
                  className="absolute inset-0"
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="MBH Events"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </motion.div>
              )}
              {/* Invisible placeholder */}
              <div className="opacity-0 w-full h-full">
                <Image src="/images/logo.png" alt="" fill className="object-contain object-left" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isScrolled ? 'gap-6 mx-8' : 'gap-8'}`}>
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-mbh-white/80 hover:text-mbh-white transition-colors duration-200 link-underline flex items-center gap-1 py-2"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as any as any }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-mbh-black/95 backdrop-blur-xl rounded-xl p-3 min-w-[380px] shadow-2xl border border-white/10">
                          <div className="space-y-2">
                            {serviceLinks.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                                    hover:bg-mbh-gold/10
                                    ${service.tier === 'flagship' ? 'border-l-2 border-mbh-gold bg-mbh-gold/5' : ''}
                                    ${service.tier === 'premium' ? 'border-l-2 border-mbh-gold-400 bg-mbh-gold-400/5' : ''}
                                  `}
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <Icon
                                    size={18}
                                    className={`flex-shrink-0 transition-colors duration-200
                                      ${service.tier === 'flagship' ? 'text-mbh-gold' : ''}
                                      ${service.tier === 'premium' ? 'text-mbh-gold-400' : 'text-mbh-white-dim'}
                                      group-hover:text-mbh-gold-300
                                    `}
                                  />
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-medium text-mbh-white/90 group-hover:text-mbh-white block truncate">
                                      {service.title}
                                    </span>
                                  </div>
                                  {service.tier === 'flagship' && (
                                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-mbh-gold/20 text-mbh-gold-300 px-2 py-0.5 rounded-full flex-shrink-0">
                                      Flagship
                                    </span>
                                  )}
                                  {service.tier === 'premium' && (
                                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-mbh-gold-400/20 text-mbh-gold-200 px-2 py-0.5 rounded-full flex-shrink-0">
                                      Premium
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 pt-2 border-t border-white/5">
                            <Link
                              href="/services"
                              className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-mbh-gold-300 hover:text-mbh-white hover:bg-mbh-gold/10 rounded-lg transition-all duration-200"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden sm:inline-flex btn-glow rounded-lg text-sm font-semibold text-white items-center gap-2 transition-all duration-300 ${isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'}`}
            >
              Plan Your Event
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-mbh-white hover:text-mbh-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as any as any }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-mbh-black-light border-l border-white/5 overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setIsMobileOpen(false)} className="relative w-48 h-20 block">
                    <Image
                      src="/images/logo.png"
                      alt="MBH Events"
                      fill
                      className="object-contain object-left"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-mbh-white-dim hover:text-mbh-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-mbh-white/90 hover:text-mbh-white hover:bg-mbh-gold/10 rounded-lg transition-all"
                          >
                            {link.label}
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-0.5 mb-2">
                                  {serviceLinks.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                      <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        onClick={() => {
                                          setIsMobileOpen(false);
                                          setMobileServicesOpen(false);
                                        }}
                                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-mbh-white/70 hover:text-mbh-white hover:bg-mbh-gold/10 rounded-lg transition-all"
                                      >
                                        <Icon size={16} className="text-mbh-gold-300 flex-shrink-0" />
                                        <span className="truncate">{service.title}</span>
                                      </Link>
                                    );
                                  })}
                                  <Link
                                    href="/services"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-mbh-gold-300 hover:text-mbh-white hover:bg-mbh-gold/10 rounded-lg transition-all"
                                  >
                                    View All Services →
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="block px-4 py-3 text-lg font-medium text-mbh-white/90 hover:text-mbh-white hover:bg-mbh-gold/10 rounded-lg transition-all"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="btn-glow w-full flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold text-white"
                  >
                    Plan Your Event
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

