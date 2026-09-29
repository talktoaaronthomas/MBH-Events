export interface TimelineItem {
  time: string;
  title: string;
}

export interface InvitationData {
  variant: 'gold' | 'maroon' | 'peacock';
  couple: {
    bride: string;
    groom: string;
    brideFamily: string;
    groomFamily: string;
  };
  greeting: string;
  message: string;
  date: string;
  muhurtham: {
    start: string;
    end: string;
  };
  ceremony: {
    venue: string;
    address: string;
  };
  reception: {
    enabled: boolean;
    date: string;
    time: string;
    venue: string;
    address: string;
  };
  dress: {
    enabled: boolean;
    text: string;
  };
  timeline: TimelineItem[];
  heroPhoto: string | null;
  photos: string[];
  rsvpBy: string;
  sections: {
    family: boolean;
    countdown: boolean;
    timeline: boolean;
    gallery: boolean;
    rsvp: boolean;
    guestbook: boolean;
  };
}

export type TemplateId = 'kasavu';

export const defaultInvitationData: InvitationData = {
  variant: "gold",
  couple: {
    bride: "Anjali", groom: "Rahul",
    brideFamily: "Daughter of\nSuresh Menon & Lakshmi Menon\nThrissur",
    groomFamily: "Son of\nVijayan Nair & Sreedevi Nair\nKochi"
  },
  greeting: "With the blessings of our elders",
  message: "We joyfully invite you and your family to celebrate the wedding of our children, and to share the blessings of the day with us.",
  date: "2026-12-10",
  muhurtham: { start: "10:30", end: "11:15" },
  ceremony: { venue: "Sree Krishna Temple Auditorium", address: "East Nada, Guruvayur, Thrissur" },
  reception: { enabled: true, date: "2026-12-10", time: "18:30", venue: "Le Méridien Kochi", address: "Maradu, Kochi" },
  dress: { enabled: true, text: "Kasavu, set-mundu and silks welcome. Family in cream and gold." },
  timeline: [
    { time: "09:30", title: "Arrival of the groom's party" },
    { time: "10:30", title: "Thaali ceremony" },
    { time: "11:30", title: "Sadya lunch" },
    { time: "18:30", title: "Reception and dinner" }
  ],
  heroPhoto: null, photos: [],
  rsvpBy: "2026-11-25",
  sections: { family: true, countdown: true, timeline: true, gallery: true, rsvp: true, guestbook: true }
};

export function encodeInvitationData(data: InvitationData): string {
  try { return btoa(encodeURIComponent(JSON.stringify(data))); } catch (error) { return ''; }
}

export function decodeInvitationData(encoded: string): InvitationData | null {
  try { return JSON.parse(decodeURIComponent(atob(encoded))) as InvitationData; } catch (error) { return null; }
}
