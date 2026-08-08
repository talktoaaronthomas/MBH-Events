export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    value: 500,
    suffix: '+',
    label: 'Events Delivered',
    description: 'Successfully executed across corporate, wedding, and social categories',
  },
  {
    id: 2,
    value: 250,
    suffix: 'K+',
    label: 'Guests Hosted',
    description: 'Unforgettable experiences for a quarter million attendees',
  },
  {
    id: 3,
    value: 12,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'A proven track record of delivering world-class events',
  },
  {
    id: 4,
    value: 50,
    suffix: '+',
    label: 'Corporate Clients',
    description: 'Trusted by leading brands and Fortune 500 companies',
  },
  {
    id: 5,
    value: 15,
    suffix: '+',
    label: 'Countries Served',
    description: 'International reach with local expertise',
  },
];
