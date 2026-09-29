import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

import TemplatePreview from '@/components/templates/TemplatePreview';
import { defaultInvitationData, TemplateId } from '@/types/invitation';
import { Edit3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Invitation Templates',
  description: 'Create and share stunning digital invitations for your upcoming events.',
};

const templates: { id: TemplateId; name: string; description: string }[] = [
  { id: 'kasavu', name: 'Kasavu Wedding', description: 'Traditional Kerala wedding invitation with elegant gold zari borders.' }
];

export default function TemplatesPage() {
  return (
    <>
      <Hero
        title="Digital Invitation Templates"
        subtitle="Craft the perfect first impression. Choose a designer template, customize your details, and share your event instantly with guests."
        bgImage="/images/about-story.jpg" // Using an existing placeholder image
      />

      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="Design Collection"
            title="Choose Your Style"
            subtitle="Select a template below to start customizing your invitation."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {templates.map((template) => (
              <StaggerItem key={template.id}>
                <div className="group rounded-2xl border border-white/5 bg-mbh-black-card overflow-hidden hover:border-mbh-gold/20 transition-all duration-300 flex flex-col h-full">
                  
                  {/* Template Preview scaled down */}
                  <div className="relative w-full aspect-[3/4] bg-[#141615] flex items-center justify-center p-8 overflow-hidden pointer-events-none">
                     <div className="w-full h-full scale-[0.6] sm:scale-50 origin-top">
                        <TemplatePreview templateId={template.id} data={defaultInvitationData} />
                     </div>
                     {/* Overlay for hover effect */}
                     <div className="absolute inset-0 bg-mbh-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 px-6 py-3 bg-mbh-gold text-white font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Edit3 size={18} />
                          Customize Template
                        </div>
                     </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col border-t border-white/5">
                    <h3 className="font-heading text-xl font-semibold text-mbh-white mb-2">
                      {template.name}
                    </h3>
                    <p className="text-sm text-mbh-white-dim leading-relaxed mb-6 flex-1">
                      {template.description}
                    </p>
                    <Link
                      href={`/templates/${template.id}`}
                      className="w-full text-center px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-mbh-white hover:bg-mbh-gold/10 hover:border-mbh-gold/30 hover:text-mbh-gold-300 transition-colors font-medium"
                    >
                      Use This Template
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
