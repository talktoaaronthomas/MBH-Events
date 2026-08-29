import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import CTABand from '@/components/ui/CTABand';
import { StaggerContainer } from '@/components/animations/ScrollReveal';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore MBH Events\' full suite of event services — corporate events, luxury weddings, creative design, production, talent, staffing, logistics, exhibitions, and rentals.',
};

export default function ServicesPage() {
  // Sort: flagship first, then premium, then standard
  const sorted = [...services].sort((a, b) => {
    const order = { flagship: 0, premium: 1, standard: 2 };
    return order[a.tier] - order[b.tier];
  });

  return (
    <>
      <Hero
        tagline="Our Services"
        title="End-to-End Event Excellence"
        subtitle="Ten specialised service lines. One dedicated partner. From concept to completion, we handle every element so you can focus on what matters most."
        bgImage="/images/services-hero.jpg"
        size="large"
      />

      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="What We Offer"
            title="Complete Event Solutions"
            subtitle="Every service you need to create extraordinary events — all under one roof."
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 lg:gap-6">
            {sorted.map((service, index) => (
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
        </div>
      </section>

      <CTABand
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your event and we'll recommend the perfect solution. No commitment, just expert guidance."
        ctaText="Let's Talk"
        ctaHref="/contact"
      />
    </>
  );
}
