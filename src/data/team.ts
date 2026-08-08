export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Mohammed Al-Hashimi',
    role: 'Founder & CEO',
    bio: 'With over 15 years in the events industry, Mohammed founded MBH Events with a vision to elevate event experiences across the region. His strategic leadership and passion for excellence drive the company\'s commitment to turning moments into legacy.',
    image: '/images/team/mohammed.jpg',
  },
  {
    id: 2,
    name: 'Aisha Rahman',
    role: 'Creative Director',
    bio: 'Aisha leads our creative studio with an eye for design that merges international aesthetics with cultural richness. Her award-winning concepts have transformed venues across the GCC into immersive brand experiences and breathtaking celebrations.',
    image: '/images/team/aisha.jpg',
  },
  {
    id: 3,
    name: 'David Thompson',
    role: 'Head of Production',
    bio: 'A veteran technical director with credentials spanning international concerts, state events, and global conferences. David ensures every MBH Events production meets broadcast-quality standards with safety-first execution.',
    image: '/images/team/david.jpg',
  },
  {
    id: 4,
    name: 'Layla Kassem',
    role: 'Director of Client Relations',
    bio: 'Layla is the trusted bridge between our clients\' visions and our team\'s execution. Her warm, detail-obsessed approach to client management ensures every stakeholder feels heard, valued, and confident throughout the event journey.',
    image: '/images/team/layla.jpg',
  },
  {
    id: 5,
    name: 'Omar Patel',
    role: 'Operations Manager',
    bio: 'Omar\'s military-grade logistics planning keeps every event running like clockwork. From managing fleets of vehicles to coordinating 500-person staff deployments, his operational precision is the invisible backbone of our seamless events.',
    image: '/images/team/omar.jpg',
  },
  {
    id: 6,
    name: 'Sophia Lee',
    role: 'Wedding & Social Events Lead',
    bio: 'Sophia brings warmth, elegance, and meticulous attention to every wedding and celebration she leads. Specialising in luxury and destination weddings, she transforms couples\' dreams into deeply personal, unforgettable celebrations.',
    image: '/images/team/sophia.jpg',
  },
];
