import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABand from '@/components/ui/CTABand';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { team } from '@/data/team';
import Image from 'next/image';
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  MonitorSpeaker,
  Users,
  Truck,
  Palette,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about MBH Events — our story, philosophy, and the team behind world-class corporate events and luxury celebrations. Turning Moments into Legacy since 2012.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        tagline="Our Story"
        title="The Team Behind Your Most Important Moments"
        subtitle="For over a decade, MBH Events has been trusted by the world's leading brands and discerning individuals to deliver events that inspire, engage, and create lasting impact."
        bgImage="/images/about-hero.jpg"
        size="large"
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-story.jpg"
                  alt="MBH Events team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mbh-black/60 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <span className="inline-block text-xs font-medium tracking-wider uppercase text-mbh-purple-300 mb-4">
                  Founded 2012 · Dubai, UAE
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-mbh-white mb-6 leading-tight">
                  Born from a Passion for <span className="text-gradient-purple">Exceptional Events</span>
                </h2>
                <div className="space-y-4 text-mbh-white-muted leading-relaxed">
                  <p>
                    MBH Events was founded with a singular vision: to redefine what&apos;s possible in event management. 
                    What started as a boutique agency with a handful of passionate event professionals has grown into a 
                    full-service powerhouse, trusted by Fortune 500 companies, government entities, and discerning 
                    individuals across 15+ countries.
                  </p>
                  <p>
                    Our growth has been fuelled by an uncompromising commitment to three principles: creative excellence, 
                    operational precision, and genuine care for our clients&apos; vision. Every event we deliver is a 
                    reflection of these values — meticulously planned, beautifully designed, and flawlessly executed.
                  </p>
                  <p>
                    Today, with a team of 50+ professionals and a comprehensive suite of in-house capabilities, 
                    we are the partner of choice for organisations and individuals who refuse to settle for ordinary.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="Our Philosophy"
            title="What Drives Us"
            subtitle="Three core principles guide every event we create."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Strategic Intent',
                description:
                  'Every event we design serves a purpose. Whether it\'s driving brand awareness, engaging stakeholders, or celebrating love — we start with your objectives and work backwards to create an event that delivers measurable impact.',
              },
              {
                icon: Eye,
                title: 'Creative Vision',
                description:
                  'We believe events should be experiential, not transactional. Our creative team pushes boundaries to design environments, moments, and narratives that captivate audiences and create lasting emotional connections.',
              },
              {
                icon: Heart,
                title: 'Obsessive Care',
                description:
                  'The difference between good and extraordinary lies in the details others overlook. We obsess over every element — from the weight of the paper in your invitations to the temperature of the room when your guests arrive.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-8 rounded-2xl border border-white/5 bg-mbh-black-card hover:border-mbh-purple/20 transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-mbh-purple/10 border border-mbh-purple/20 flex items-center justify-center mb-6 group-hover:bg-mbh-purple/20 transition-colors">
                    <item.icon size={28} className="text-mbh-purple-300" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-mbh-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mbh-white-dim leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="Our People"
            title="Meet the Team"
            subtitle="The passionate professionals who bring your vision to life."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group rounded-2xl border border-white/5 bg-mbh-black-card overflow-hidden hover:border-mbh-purple/20 transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mbh-black-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-mbh-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-mbh-purple-300 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-mbh-white-dim leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="Why MBH Events"
            title="What Sets Us Apart"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              'Full in-house capabilities — creative, production, staffing, and logistics under one roof',
              'Proven track record with 500+ events across 15+ countries',
              'Dedicated project manager for every engagement — single point of contact',
              'Transparent pricing with no hidden costs and real-time budget tracking',
              'Scalable operations — from intimate 50-person dinners to 10,000+ guest conferences',
              'Risk mitigation with contingency planning and backup systems for every event',
              'Premium vendor network with negotiated preferred rates',
              'Post-event analytics and ROI measurement for corporate clients',
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-mbh-black-card/50">
                  <CheckCircle size={20} className="text-mbh-purple-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-mbh-white/90 leading-relaxed">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* In-House Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="In-House"
            title="Our Capabilities"
            subtitle="Everything you need, under one roof — no outsourcing, no compromise."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: 'Creative Studio', desc: 'Concept design, 3D rendering, branding, and visual identity' },
              { icon: MonitorSpeaker, title: 'Production', desc: 'Staging, AV, lighting, LED, live streaming, and power systems' },
              { icon: Users, title: 'Staffing', desc: 'Hostesses, registration, VIP protocol, security, and supervision' },
              { icon: Truck, title: 'Logistics', desc: 'Transport, valet, accommodation, warehousing, and on-ground ops' },
            ].map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="aspect-square h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl border border-white/5 bg-mbh-black-card hover:border-mbh-purple/20 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-mbh-purple/10 border border-mbh-purple/20 flex items-center justify-center mb-5 group-hover:bg-mbh-purple/20 transition-colors">
                    <cap.icon size={28} className="text-mbh-purple-300" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-mbh-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-mbh-white-dim leading-relaxed">{cap.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Ready to Create Something Extraordinary?"
        subtitle="Let's discuss how MBH Events can bring your vision to life."
        ctaText="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
