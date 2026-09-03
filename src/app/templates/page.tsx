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
  // Original
  { id: 'classic-gold', name: 'Classic Gold', description: 'An elegant, timeless design featuring gold accents and sophisticated typography.' },
  { id: 'modern-minimal', name: 'Modern Minimal', description: 'Clean, high-contrast aesthetics with a focus on modern typography and whitespace.' },
  
  // Corporate & Professional
  { id: 'executive-summit', name: 'Executive Summit', description: 'Dark, professional, and sharp. Perfect for board meetings and executive briefings.' },
  { id: 'product-launch', name: 'Product Launch', description: 'Vibrant neon accents on a sleek black background for high-energy tech launches.' },
  { id: 'annual-gala', name: 'Annual Gala', description: 'Ultra-elegant black and white styling with serif typography for formal corporate galas.' },
  { id: 'startup-mixer', name: 'Startup Mixer', description: 'Bold, energetic, and colorful. Designed for networking events and startup pitches.' },
  { id: 'corporate-retreat', name: 'Corporate Retreat', description: 'Earthy, relaxed, and botanical. Ideal for offsites, team building, and wellness retreats.' },
  { id: 'investor-pitch', name: 'Investor Pitch', description: 'Minimalist, serious, and highly professional monochromatic layout for confidential meetings.' },
  
  // Weddings & Romance
  { id: 'rustic-romance', name: 'Rustic Romance', description: 'Warm earth tones and soft serif typography perfect for outdoor or barn weddings.' },
  { id: 'ocean-breeze', name: 'Ocean Breeze', description: 'Airy blues and soft watercolors mimicking the sea. Ideal for beach weddings and coastal events.' },
  { id: 'vintage-glamour', name: 'Vintage Glamour', description: 'Art Deco inspired linework with gold and black aesthetics for Great Gatsby style romance.' },
  { id: 'fairytale-garden', name: 'Fairytale Garden', description: 'Soft pastel gradients and gentle typography for romantic garden weddings.' },
  { id: 'minimalist-love', name: 'Minimalist Love', description: 'Maximum whitespace and incredibly elegant typography for chic, modern couples.' },
  { id: 'boho-chic', name: 'Boho Chic', description: 'Terracotta arches and warm tones for the perfect bohemian celebration.' },
  
  // Parties & Social
  { id: 'neon-nights', name: 'Neon Nights', description: 'Cyberpunk inspired grids and neon glows for the ultimate club or dance party.' },
  { id: 'summer-bbq', name: 'Summer BBQ', description: 'Bright, casual, and energetic. Get ready for burgers, sun, and good times.' },
  { id: 'masquerade-ball', name: 'Masquerade Ball', description: 'Deep purples and ornate gold corners for a night of mystery and velvet.' },
  { id: 'vip-afterparty', name: 'VIP Afterparty', description: 'Exclusive, dark, and sleek. An invitation for those on the guest list only.' },
  { id: 'retro-80s', name: 'Retro 80s', description: 'Synthwave suns and bold colors for an absolutely radical throwback party.' },
  { id: 'sunset-soiree', name: 'Sunset Soiree', description: 'Warm pinks and oranges mimicking a perfect sunset for relaxed evening gatherings.' },
  
  // Milestones & Family
  { id: 'baby-shower', name: 'Baby Shower', description: 'Soft, welcoming curves and gentle colors to celebrate a new arrival.' },
  { id: 'golden-anniversary', name: 'Golden Anniversary', description: 'Traditional gold and cream elegance for celebrating 50 years of love.' },
  { id: 'graduation-party', name: 'Graduation Party', description: 'Academic blues and golds to proudly announce a major educational milestone.' },
  { id: 'sweet-sixteen', name: 'Sweet Sixteen', description: 'Fun, vibrant, and packed with energy for a milestone birthday celebration.' },
  { id: 'housewarming', name: 'Housewarming', description: 'Warm, cozy, and earthy aesthetics to welcome friends to your new home.' },
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
                  <div className="relative w-full aspect-[3/4] bg-mbh-black flex items-center justify-center p-8 overflow-hidden pointer-events-none">
                     <div className="w-full h-full scale-100 sm:scale-90 origin-top">
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
