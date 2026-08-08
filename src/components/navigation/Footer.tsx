import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { Instagram, Linkedin, Facebook, Twitter } from '@/components/ui/SocialIcons';

const serviceLinks = [
  { slug: 'corporate-events', title: 'Corporate Events' },
  { slug: 'luxury-weddings', title: 'Luxury Weddings' },
  { slug: 'event-planning', title: 'Event Planning' },
  { slug: 'creative-design', title: 'Creative Design' },
  { slug: 'production-technical', title: 'Production & Technical' },
  { slug: 'talent-entertainment', title: 'Talent & Entertainment' },
  { slug: 'event-staffing', title: 'Event Staffing' },
  { slug: 'logistics-hospitality', title: 'Logistics & Hospitality' },
  { slug: 'exhibitions-activations', title: 'Exhibitions & Activations' },
  { slug: 'event-rentals', title: 'Event Rentals' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-mbh-black-light border-t border-white/5">
      {/* Main Footer */}
      <div className="container-mbh pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 group relative w-64 h-24">
              <Image
                src="/images/logo.png"
                alt="MBH Events"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-mbh-white-dim leading-relaxed mb-6">
              Turning Moments into Legacy. A full-service event management company
              delivering world-class corporate events, luxury weddings, and
              unforgettable experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-mbh-white-dim hover:text-mbh-white hover:bg-mbh-purple/20 hover:shadow-[--shadow-glow-sm] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-8">
            <h4 className="font-heading text-base font-semibold text-mbh-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mbh-white-dim hover:text-mbh-purple-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:pt-8">
            <h4 className="font-heading text-base font-semibold text-mbh-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-mbh-white-dim hover:text-mbh-purple-300 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 pb-6">
                <Link
                  href="/services"
                  className="text-sm font-medium text-mbh-purple-300 hover:text-mbh-purple-200 transition-colors duration-200 inline-block"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-8">
            <h4 className="font-heading text-base font-semibold text-mbh-white mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mbh-purple-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-mbh-white-dim leading-relaxed">
                  Business Bay, Dubai, United Arab Emirates
                </span>
              </li>
              <li>
                <a
                  href="tel:+971501234567"
                  className="flex items-center gap-3 text-sm text-mbh-white-dim hover:text-mbh-purple-300 transition-colors"
                >
                  <Phone size={18} className="text-mbh-purple-300 flex-shrink-0" />
                  +971 50 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@mbhevents.com"
                  className="flex items-center gap-3 text-sm text-mbh-white-dim hover:text-mbh-purple-300 transition-colors"
                >
                  <Mail size={18} className="text-mbh-purple-300 flex-shrink-0" />
                  hello@mbhevents.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-mbh py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mbh-white-dim">
            © {new Date().getFullYear()} MBH Events. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-mbh-white-dim hover:text-mbh-purple-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-mbh-white-dim hover:text-mbh-purple-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
