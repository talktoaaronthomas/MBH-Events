import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';

import InquiryForm from '@/components/ui/InquiryForm';
import CTABand from '@/components/ui/CTABand';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedSlugs);

  return (
    <>
      {/* Hero */}
      <Hero
        tagline={service.emoji + ' ' + service.title}
        title={service.tagline}
        subtitle={service.shortDescription}
        ctaText="Get a Quote"
        ctaHref="#inquiry"
        bgImage={service.heroImage}
        size="large"
      />

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.fullDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: 'MBH Events',
            },
          }),
        }}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-mbh-white mb-6">
                  About This Service
                </h2>
                <div className="accent-line mx-auto" />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <p className="text-lg text-mbh-white-muted leading-relaxed text-center">
                {service.fullDescription}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="What's Included"
            title="Services & Capabilities"
            subtitle="Everything we deliver as part of this service line."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.includedServices.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 rounded-xl border border-white/5 bg-mbh-black-card hover:border-mbh-gold/20 transition-all duration-300 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-mbh-gold/10 border border-mbh-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-mbh-gold/20 transition-colors">
                      <CheckCircle size={20} className="text-mbh-gold-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-mbh-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-mbh-white-dim leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* Process */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="Our Approach"
            title="How We Work"
            subtitle="A proven process that ensures exceptional outcomes."
          />

          <div className="max-w-3xl mx-auto">
            {service.process.map((step, index) => (
              <ScrollReveal key={step.step} variant="fadeUp" delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-mbh-gold/10 border border-mbh-gold/30 flex items-center justify-center text-mbh-gold-300 font-heading font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-[1px] flex-1 bg-gradient-to-b from-mbh-gold/30 to-transparent mt-3" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading text-lg font-semibold text-mbh-white mb-2">
                      {step.step}
                    </h3>
                    <p className="text-sm text-mbh-white-dim leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="Why Us"
            title="Why Choose MBH Events"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.whyChooseUs.map((reason, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-mbh-black-card/50">
                  <CheckCircle size={18} className="text-mbh-gold-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-mbh-white/90 leading-relaxed">{reason}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 lg:py-28 border-t border-white/5">
          <div className="container-mbh">
            <SectionHeading
              label="Related Services"
              title="You Might Also Need"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((related) => (
                <ScrollReveal key={related.slug} variant="fadeUp">
                  <Link
                    href={`/services/${related.slug}`}
                    className="flex flex-col justify-between p-6 rounded-xl border border-white/5 bg-mbh-black-card hover:border-mbh-gold/20 transition-all duration-300 group aspect-square"
                  >
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-mbh-white group-hover:text-mbh-gold-300 transition-colors mb-2">
                        {related.title}
                      </h4>
                    </div>
                    <span className="text-xs text-mbh-gold-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              label="Get Started"
              title={`Inquire About ${service.title}`}
              subtitle="Tell us about your event and we'll create a tailored proposal."
            />
            <div className="p-8 rounded-2xl border border-white/5 bg-mbh-black-card">
              <InquiryForm preSelectedEventType={service.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
