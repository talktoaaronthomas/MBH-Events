import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABand from '@/components/ui/CTABand';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle, Globe, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | MBH Events',
  description: 'Join the team at MBH Events. We are always looking for passionate and creative individuals to help us deliver world-class events.',
};

const perks = [
  {
    icon: Lightbulb,
    title: 'Creative Freedom',
    description: 'We believe in pushing boundaries. Bring your boldest ideas to the table.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on high-profile events and campaigns that are seen around the world.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Development',
    description: 'We invest in our team with continuous learning and career advancement opportunities.',
  },
  {
    icon: Heart,
    title: 'Inclusive Culture',
    description: 'A supportive, collaborative environment where everyone’s voice is heard and valued.',
  },
];

const jobs = [
  {
    id: 1,
    title: 'Senior Event Producer',
    department: 'Event Production',
    location: 'Dubai, UAE (Hybrid)',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Technical Director',
    department: 'Technical & AV',
    location: 'Dubai, UAE',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Logistics Coordinator',
    department: 'Operations',
    location: 'Remote',
    type: 'Contract',
  },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        tagline="Join Our Team"
        title="Build Your Legacy With Us"
        subtitle="At MBH Events, we don't just plan events—we create unforgettable moments. We're looking for passionate, creative, and driven individuals to join our growing team."
        bgImage="/images/careers-hero.jpg"
        size="large"
      />

      {/* ===== CULTURE & PERKS ===== */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="Why MBH Events"
            title="Culture & Benefits"
            subtitle="We empower our team to deliver their best work by providing an environment that fosters creativity, growth, and well-being."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <StaggerItem key={index}>
                  <div className="bg-mbh-black-card border border-white/5 p-8 rounded-2xl h-full hover:border-mbh-gold/30 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-mbh-gold/10 flex items-center justify-center mb-6">
                      <Icon className="text-mbh-gold-400" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-mbh-white mb-3">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-mbh-white-dim leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-mbh-black to-mbh-black-card/50">
        <div className="container-mbh max-w-5xl">
          <SectionHeading
            label="Join Us"
            title="Open Positions"
            subtitle="Ready to take the next step in your career? Explore our current openings below."
          />

          <StaggerContainer className="flex flex-col gap-4 mt-12">
            {jobs.map((job) => (
              <StaggerItem key={job.id}>
                <Link
                  href={`mailto:careers@mbhevents.com?subject=Application for ${job.title}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-mbh-black-card border border-white/5 rounded-2xl hover:border-mbh-gold/40 hover:bg-mbh-gold/5 transition-all duration-300"
                >
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-heading text-xl font-bold text-mbh-white group-hover:text-mbh-gold-300 transition-colors duration-300 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-mbh-white-dim">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-mbh-gold" />
                        {job.department}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                    <span className="text-sm font-medium text-mbh-gold-400 group-hover:text-mbh-gold transition-colors duration-300">
                      Apply Now
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-mbh-gold/20 flex items-center justify-center transition-colors duration-300">
                      <ArrowUpRight size={18} className="text-mbh-white group-hover:text-mbh-gold" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <CTABand
        title="Don't see a perfect fit?"
        subtitle="We're always on the lookout for incredible talent. Send us your resume and a cover letter, and we'll keep you in mind for future opportunities."
        ctaText="Submit General Application"
        ctaHref="mailto:careers@mbhevents.com?subject=General Application"
        showOverlay={false}
        variant="dark"
      />
    </>
  );
}
