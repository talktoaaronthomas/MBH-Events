export interface InvitationData {
  title: string;
  hostName: string;
  date: string;
  time: string;
  venue: string;
  message: string;
}

export type TemplateId = 
  | 'classic-gold' | 'modern-minimal'
  | 'executive-summit' | 'product-launch' | 'annual-gala' | 'startup-mixer' | 'corporate-retreat' | 'investor-pitch'
  | 'rustic-romance' | 'ocean-breeze' | 'vintage-glamour' | 'fairytale-garden' | 'minimalist-love' | 'boho-chic'
  | 'neon-nights' | 'summer-bbq' | 'masquerade-ball' | 'vip-afterparty' | 'retro-80s' | 'sunset-soiree'
  | 'baby-shower' | 'golden-anniversary' | 'graduation-party' | 'sweet-sixteen' | 'housewarming';

export const defaultInvitationData: InvitationData = {
  title: "You're Invited",
  hostName: 'The MBH Events Team',
  date: 'December 31, 2026',
  time: '8:00 PM',
  venue: 'The Grand Ballroom, MBH Tower, Dubai',
  message: 'Join us for an unforgettable evening of celebration, dining, and entertainment as we welcome the new year in style.',
};

/**
 * Encodes the invitation data into a URL-safe Base64 string.
 */
export function encodeInvitationData(data: InvitationData): string {
  try {
    const jsonStr = JSON.stringify(data);
    return btoa(encodeURIComponent(jsonStr));
  } catch (error) {
    console.error('Failed to encode invitation data:', error);
    return '';
  }
}

/**
 * Decodes a URL-safe Base64 string back into InvitationData.
 */
export function decodeInvitationData(encoded: string): InvitationData | null {
  try {
    const jsonStr = decodeURIComponent(atob(encoded));
    return JSON.parse(jsonStr) as InvitationData;
  } catch (error) {
    console.error('Failed to decode invitation data:', error);
    return null;
  }
}
