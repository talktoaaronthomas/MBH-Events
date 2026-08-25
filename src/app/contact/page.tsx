import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import InquiryForm from '@/components/ui/InquiryForm';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { Instagram, Linkedin, Facebook } from '@/components/ui/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with MBH Events. Plan your next corporate event, luxury wedding, or brand activation. Reach us by phone, email, WhatsApp, or visit our Dubai office.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        tagline="Let's Talk"
        title="Start Planning Your Event"
        subtitle="Whether you have a detailed brief or just an idea, we'd love to hear from you. Let's turn your vision into reality."
        bgImage="/images/contact-hero.jpg"
        size="medium"
      />

      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal variant="fadeLeft">
                <div className="p-8 sm:p-10 rounded-2xl border border-white/5 bg-mbh-black-card">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mbh-white mb-2">
                    Send Us an Inquiry
                  </h2>
                  <p className="text-sm text-mbh-white-dim mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours with a tailored response.
                  </p>
                  <InquiryForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fadeRight" delay={0.2}>
                <div className="space-y-6">
                  {/* Contact Details */}
                  <div className="p-6 rounded-2xl border border-white/5 bg-mbh-black-card">
                    <h3 className="font-heading text-lg font-semibold text-mbh-white mb-6">
                      Contact Details
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-mbh-gold/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} className="text-mbh-gold-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-mbh-white">Our Office</p>
                          <p className="text-sm text-mbh-white-dim mt-0.5">
                            Business Bay, Dubai<br />
                            United Arab Emirates
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-mbh-gold/10 flex items-center justify-center flex-shrink-0">
                          <Phone size={18} className="text-mbh-gold-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-mbh-white">Phone</p>
                          <a href="tel:+971501234567" className="text-sm text-mbh-white-dim hover:text-mbh-gold-300 transition-colors mt-0.5 block">
                            +971 50 123 4567
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-mbh-gold/10 flex items-center justify-center flex-shrink-0">
                          <Mail size={18} className="text-mbh-gold-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-mbh-white">Email</p>
                          <a href="mailto:hello@mbhevents.com" className="text-sm text-mbh-white-dim hover:text-mbh-gold-300 transition-colors mt-0.5 block">
                            hello@mbhevents.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-mbh-gold/10 flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={18} className="text-mbh-gold-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-mbh-white">WhatsApp</p>
                          <a
                            href="https://wa.me/971501234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-mbh-white-dim hover:text-mbh-gold-300 transition-colors mt-0.5 block"
                          >
                            Chat with us on WhatsApp
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-mbh-gold/10 flex items-center justify-center flex-shrink-0">
                          <Clock size={18} className="text-mbh-gold-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-mbh-white">Office Hours</p>
                          <p className="text-sm text-mbh-white-dim mt-0.5">
                            Sun - Thu: 9:00 AM - 6:00 PM<br />
                            Fri - Sat: By Appointment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="p-6 rounded-2xl border border-white/5 bg-mbh-black-card">
                    <h3 className="font-heading text-lg font-semibold text-mbh-white mb-4">
                      Follow Us
                    </h3>
                    <div className="flex items-center gap-3">
                      {[
                        { icon: Instagram, label: 'Instagram', href: '#' },
                        { icon: Linkedin, label: 'LinkedIn', href: '#' },
                        { icon: Facebook, label: 'Facebook', href: '#' },
                      ].map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-mbh-white-dim hover:text-mbh-white hover:bg-mbh-gold/20 transition-all duration-300"
                          >
                            <Icon size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="rounded-2xl overflow-hidden border border-white/5 h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785984928!2d55.2613795!3d25.1881256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d1974f6ed3%3A0x1a2b7b9a0cde2b8b!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MBH Events Office Location"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
