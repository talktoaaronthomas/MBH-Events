export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  eventType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Al-Mansouri',
    role: 'Head of Marketing',
    company: 'Emirates Group',
    quote:
      'MBH Events delivered our annual gala with such precision and creativity that our CEO personally called to commend the team. The stage design was cinematic, the flow was flawless, and our 800 guests were absolutely captivated. They don\'t just plan events — they create experiences.',
    image: '/images/testimonials/sarah.jpg',
    eventType: 'Corporate Gala',
  },
  {
    id: 2,
    name: 'Rajesh & Priya Kapoor',
    role: 'Couple',
    company: '',
    quote:
      'Our wedding was everything we dreamed of and more. MBH Events transformed a blank venue into a fairytale — from the floral mandap that took our breath away to the perfectly timed fireworks. They handled everything with such grace that we could truly enjoy every moment.',
    image: '/images/testimonials/rajesh.jpg',
    eventType: 'Luxury Wedding',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Regional Director',
    company: 'Microsoft MEA',
    quote:
      'We\'ve worked with MBH Events on three consecutive product launches now. Their technical production is world-class — LED walls, live streaming, and hybrid audience management — all seamless. They understand the stakes of a global brand launch and deliver accordingly.',
    image: '/images/testimonials/michael.jpg',
    eventType: 'Product Launch',
  },
  {
    id: 4,
    name: 'Fatima Al-Zahra',
    role: 'HR Director',
    company: 'ADNOC',
    quote:
      'Our company retreat for 500 employees was a logistical challenge that MBH Events made look effortless. Transportation, accommodation, team-building activities, gala dinner — everything was coordinated with military precision and a warm, personal touch.',
    image: '/images/testimonials/fatima.jpg',
    eventType: 'Corporate Retreat',
  },
  {
    id: 5,
    name: 'James & Olivia Wright',
    role: 'Couple',
    company: '',
    quote:
      'A destination wedding in the Maldives sounded impossibly complex, but MBH Events made it feel effortless. Every detail — from the beachfront ceremony to the underwater-themed reception — was executed with such artistry and care. Our guests are still talking about it.',
    image: '/images/testimonials/james.jpg',
    eventType: 'Destination Wedding',
  },
  {
    id: 6,
    name: 'Ahmed Al-Rashid',
    role: 'Brand Manager',
    company: 'Samsung Gulf',
    quote:
      'The exhibition booth MBH Events designed for GITEX was a showstopper. We had the highest footfall in our zone, generated 300+ qualified leads, and won the Best Booth Design award. Their creative team truly understands how to translate brand strategy into physical space.',
    image: '/images/testimonials/ahmed.jpg',
    eventType: 'Exhibition',
  },
];
