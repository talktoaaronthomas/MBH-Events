import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import CTABand from '@/components/ui/CTABand';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { StaggerContainer } from '@/components/animations/ScrollReveal';
import { services } from '@/data/services';
import { stats } from '@/data/stats';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Clock, Award } from 'lucide-react';

export default function HomePage() {
  // Sort services — flagship first, then premium, then standard
  const sortedServices = [...services].sort((a, b) => {
    const order = { flagship: 0, premium: 1, standard: 2 };
    return order[a.tier] - order[b.tier];
  });

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== INTRO ===== */}
      <section className="py-20 lg:py-28 relative">
        <div className="container-mbh">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mbh-gold/30 bg-mbh-gold/10 text-mbh-gold-300 text-xs font-medium tracking-wider uppercase mb-6">
                  <Sparkles size={14} />
                  About MBH Events
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-mbh-white mb-6 leading-tight">
                  Crafting Events That{' '}
                  <span className="text-gradient-gold">Define Legacies</span>
                </h2>
                <p className="text-mbh-white-muted leading-relaxed mb-6">
                  MBH Events is a full-service event management company with an uncompromising
                  commitment to excellence. From high-stakes corporate conferences to intimate
                  luxury weddings, we deliver events that are strategically planned, creatively
                  designed, and flawlessly executed.
                </p>
                <p className="text-mbh-white-dim leading-relaxed mb-8">
                  With in-house creative, production, staffing, and logistics capabilities,
                  we are your single partner for every aspect of event delivery — ensuring
                  consistency, quality, and peace of mind from concept to completion.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-mbh-gold-300 hover:text-mbh-gold-200 font-medium transition-colors group"
                >
                  Learn Our Story
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Trusted', desc: 'By Fortune 500 companies and government entities' },
                  { icon: Sparkles, title: 'Creative', desc: 'Award-winning design and immersive experiences' },
                  { icon: Clock, title: 'Precise', desc: 'Military-grade logistics and timeline management' },
                  { icon: Award, title: 'Premium', desc: 'White-glove service with obsessive attention to detail' },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-white/5 bg-mbh-black-card hover:border-mbh-gold/20 hover:bg-mbh-gold/5 transition-all duration-300 group"
                  >
                    <item.icon size={24} className="text-mbh-gold-300 mb-3 group-hover:text-mbh-gold transition-colors" />
                    <h4 className="font-heading font-semibold text-mbh-white mb-1">{item.title}</h4>
                    <p className="text-xs text-mbh-white-dim leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-mbh-gold/30 to-transparent" />

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="What We Do"
            title="Full-Spectrum Event Solutions"
            subtitle="From corporate conferences to luxury weddings — ten specialised service lines, one dedicated partner."
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 lg:gap-6">
            {sortedServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                emoji={service.emoji}
                shortDescription={service.shortDescription}
                heroImage={service.heroImage}
                tier={service.tier}
                index={index}
              />
            ))}
          </StaggerContainer>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-mbh-white hover:border-mbh-gold/40 hover:bg-mbh-gold/10 transition-all duration-300 font-medium group"
              >
                View All Services
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SIGNATURE EVENTS SHOWCASE ===== */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="Our Work"
            title="Signature Events"
            subtitle="A glimpse into the world-class events we've brought to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Global Tech Summit 2024',
                category: 'Corporate Conference',
                guests: '2,500+ Attendees',
                image: '/images/showcase/tech-summit.jpg',
              },
              {
                title: 'Royal Palace Wedding',
                category: 'Luxury Destination Wedding',
                guests: '800 Guests',
                image: '/images/showcase/royal-wedding.jpg',
              },
              {
                title: 'Samsung Galaxy Launch',
                category: 'Product Launch & Activation',
                guests: '1,200 Guests',
                image: '/images/showcase/product-launch.jpg',
              },
              {
                title: 'GITEX Best Booth Award',
                category: 'Exhibition Design',
                guests: '50,000+ Visitors',
                image: '/images/showcase/exhibition.jpg',
              },
            ].map((event, index) => (
              <ScrollReveal key={event.title} variant="fadeUp" delay={index * 0.1}>
                <div className="group relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mbh-black via-mbh-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-mbh-gold/0 group-hover:bg-mbh-gold/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="text-xs font-medium text-mbh-gold-300 uppercase tracking-wider">
                      {event.category}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-mbh-white mt-2 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-mbh-white-dim">{event.guests}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="Client Love"
            title="What Our Clients Say"
            subtitle="The trust of our clients is our greatest achievement."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="By The Numbers"
            title="Our Impact in Numbers"
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.id} variant="fadeUp" delay={index * 0.1} className="h-full">
                <div className="h-full flex flex-col justify-center text-center p-6 rounded-xl border border-white/5 bg-mbh-black-card/50 hover:border-mbh-gold/20 transition-all duration-300">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-mbh-white mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-mbh-gold-300 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-mbh-white-dim leading-relaxed hidden sm:block">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <CTABand
        title="Let's Create Something Unforgettable"
        subtitle="Whether it's a corporate milestone or a personal celebration, let MBH Events turn your vision into a legacy."
        ctaText="Start Planning Today"
        ctaHref="/contact"
        showOverlay={false}
        variant="dark"
      />
    </>
  );
}
