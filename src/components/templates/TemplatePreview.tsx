import { InvitationData, TemplateId } from '@/types/invitation';

// Original
import DesignClassicGold from './DesignClassicGold';
import DesignModernMinimal from './DesignModernMinimal';

// Corporate
import DesignExecutiveSummit from './DesignExecutiveSummit';
import DesignProductLaunch from './DesignProductLaunch';
import DesignAnnualGala from './DesignAnnualGala';
import DesignStartupMixer from './DesignStartupMixer';
import DesignCorporateRetreat from './DesignCorporateRetreat';
import DesignInvestorPitch from './DesignInvestorPitch';

// Weddings
import DesignRusticRomance from './DesignRusticRomance';
import DesignOceanBreeze from './DesignOceanBreeze';
import DesignVintageGlamour from './DesignVintageGlamour';
import DesignFairytaleGarden from './DesignFairytaleGarden';
import DesignMinimalistLove from './DesignMinimalistLove';
import DesignBohoChic from './DesignBohoChic';

// Parties
import DesignNeonNights from './DesignNeonNights';
import DesignSummerBBQ from './DesignSummerBBQ';
import DesignMasqueradeBall from './DesignMasqueradeBall';
import DesignVIPAfterparty from './DesignVIPAfterparty';
import DesignRetro80s from './DesignRetro80s';
import DesignSunsetSoiree from './DesignSunsetSoiree';

// Milestones
import DesignBabyShower from './DesignBabyShower';
import DesignGoldenAnniversary from './DesignGoldenAnniversary';
import DesignGraduationParty from './DesignGraduationParty';
import DesignSweetSixteen from './DesignSweetSixteen';
import DesignHousewarming from './DesignHousewarming';

interface TemplatePreviewProps {
  templateId: TemplateId;
  data: InvitationData;
}

export default function TemplatePreview({ templateId, data }: TemplatePreviewProps) {
  switch (templateId) {
    case 'classic-gold': return <DesignClassicGold data={data} />;
    case 'modern-minimal': return <DesignModernMinimal data={data} />;
    
    // Corporate
    case 'executive-summit': return <DesignExecutiveSummit data={data} />;
    case 'product-launch': return <DesignProductLaunch data={data} />;
    case 'annual-gala': return <DesignAnnualGala data={data} />;
    case 'startup-mixer': return <DesignStartupMixer data={data} />;
    case 'corporate-retreat': return <DesignCorporateRetreat data={data} />;
    case 'investor-pitch': return <DesignInvestorPitch data={data} />;
    
    // Weddings
    case 'rustic-romance': return <DesignRusticRomance data={data} />;
    case 'ocean-breeze': return <DesignOceanBreeze data={data} />;
    case 'vintage-glamour': return <DesignVintageGlamour data={data} />;
    case 'fairytale-garden': return <DesignFairytaleGarden data={data} />;
    case 'minimalist-love': return <DesignMinimalistLove data={data} />;
    case 'boho-chic': return <DesignBohoChic data={data} />;
    
    // Parties
    case 'neon-nights': return <DesignNeonNights data={data} />;
    case 'summer-bbq': return <DesignSummerBBQ data={data} />;
    case 'masquerade-ball': return <DesignMasqueradeBall data={data} />;
    case 'vip-afterparty': return <DesignVIPAfterparty data={data} />;
    case 'retro-80s': return <DesignRetro80s data={data} />;
    case 'sunset-soiree': return <DesignSunsetSoiree data={data} />;
    
    // Milestones
    case 'baby-shower': return <DesignBabyShower data={data} />;
    case 'golden-anniversary': return <DesignGoldenAnniversary data={data} />;
    case 'graduation-party': return <DesignGraduationParty data={data} />;
    case 'sweet-sixteen': return <DesignSweetSixteen data={data} />;
    case 'housewarming': return <DesignHousewarming data={data} />;
    
    default:
      return <DesignClassicGold data={data} />;
  }
}
