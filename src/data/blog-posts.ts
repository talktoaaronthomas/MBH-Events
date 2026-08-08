export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  authorImage: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-corporate-event-trends-2025',
    title: 'Top Corporate Event Trends Shaping 2025',
    excerpt:
      'From hybrid experiences to AI-powered personalisation, discover the trends redefining how brands engage audiences at corporate events.',
    content: `
The corporate events landscape is evolving at breakneck speed. As we move through 2025, several key trends are reshaping how organisations plan, execute, and measure the impact of their events.

## 1. Hybrid is Here to Stay

The days of choosing between in-person and virtual are over. The most successful corporate events now seamlessly blend both, offering equitable experiences for attendees regardless of their location. Leading companies are investing in dedicated hybrid production — multi-camera setups, virtual networking rooms, and real-time engagement tools that make remote attendees feel like they're in the room.

## 2. AI-Powered Personalisation

Artificial intelligence is transforming event personalisation. From AI-curated agendas based on attendee interests to chatbot concierges and predictive analytics for crowd flow, smart technology is enabling events that adapt in real-time to attendee behaviour.

## 3. Sustainability as Standard

Green events are no longer a nice-to-have — they're expected. Forward-thinking event companies are implementing zero-waste catering, digital-only collateral, carbon-offset programs, and sustainable staging materials. Attendees and sponsors increasingly demand it.

## 4. Immersive Experiential Design

Flat panels and roll-up banners are giving way to immersive environments. Think 360-degree LED tunnels, interactive art installations, AR-enhanced product demos, and sensory experiences that engage sight, sound, and touch.

## 5. Data-Driven ROI

Events are finally getting the analytics treatment. With RFID tracking, facial recognition check-ins, and post-event engagement scoring, organisations can now quantify the ROI of every event dollar with precision.

---

At MBH Events, we're at the forefront of these trends — integrating cutting-edge technology with creative design to deliver corporate experiences that truly move the needle.
    `,
    coverImage: '/images/blog/corporate-trends.jpg',
    date: '2025-06-15',
    author: 'Mohammed Al-Hashimi',
    authorImage: '/images/team/mohammed.jpg',
    category: 'Corporate Events',
    readTime: '5 min read',
    tags: ['Corporate Events', 'Trends', 'Hybrid Events', 'Technology'],
  },
  {
    slug: 'planning-luxury-destination-wedding',
    title: 'The Complete Guide to Planning a Luxury Destination Wedding',
    excerpt:
      'Everything you need to know about planning a destination wedding that\'s both breathtaking and stress-free — from venue selection to guest logistics.',
    content: `
A destination wedding is the ultimate expression of romance — a celebration set against a backdrop so beautiful it takes your breath away. But planning one requires expertise, connections, and meticulous coordination. Here's our comprehensive guide.

## Choosing Your Destination

The destination sets the tone for your entire celebration. Consider:
- **Climate and season** — monsoon seasons, extreme heat, and hurricane windows can derail even the best plans
- **Accessibility** — flight connections, visa requirements, and travel ease for your guest list
- **Venue options** — does the destination offer venues that match your vision?
- **Local vendor quality** — a destination is only as good as its vendor ecosystem

## Budget Considerations

Destination weddings can range from surprisingly affordable to extravagantly luxurious. Key budget drivers include:
- Venue hire and accommodation blocks
- Guest travel subsidies (if offered)
- Vendor travel and accommodation
- Multi-day event programming (welcome dinner, day-after brunch)
- Local permits and legal requirements

## Guest Experience Planning

Your guests are investing time and money to celebrate with you. Make it worth their while:
- Welcome packages at the hotel
- A detailed itinerary with optional activities
- Transportation coordination from airport to venue
- Cultural experiences unique to the destination
- Clear communication about dress code, weather, and logistics

## Working with a Destination Wedding Planner

A specialist planner is not a luxury — it's a necessity. They bring:
- Established vendor relationships at the destination
- Knowledge of local regulations and customs
- On-ground coordination you simply can't do remotely
- Contingency planning for destination-specific risks

---

At MBH Events, destination weddings are our passion. We've orchestrated celebrations across 15+ countries, and every one of them felt effortlessly magical — because the effort was ours to manage.
    `,
    coverImage: '/images/blog/destination-wedding.jpg',
    date: '2025-05-22',
    author: 'Sophia Lee',
    authorImage: '/images/team/sophia.jpg',
    category: 'Weddings',
    readTime: '7 min read',
    tags: ['Weddings', 'Destination Wedding', 'Planning', 'Luxury'],
  },
  {
    slug: 'event-production-technical-guide',
    title: 'Behind the Scenes: What Goes Into World-Class Event Production',
    excerpt:
      'A look behind the curtain at the technical planning, equipment, and expertise that powers unforgettable event experiences.',
    content: `
When you attend a beautifully produced event, you probably don't think about the hundreds of hours of technical planning that went into it. That's by design — the best production is invisible. Here's what actually happens behind the scenes.

## Pre-Production: Where the Magic Starts

Before a single truss is rigged, our production team spends weeks in pre-production:
- **Technical site surveys** — measuring ceiling heights, assessing power capacity, mapping rigging points
- **CAD drawings and 3D renders** — precise technical layouts that account for every fixture, cable run, and safety zone
- **Equipment lists** — matching the right gear to the venue and event type
- **Power calculations** — ensuring electrical infrastructure can handle the load with backup systems in place

## The Load-In

Load-in day is organised chaos at its finest. A typical corporate conference load-in involves:
- Multiple trucks of equipment arriving in sequenced order
- Rigging crews working at height to hang trussing, lighting, and LED screens
- Audio engineers running cable infrastructure and testing every speaker
- LED technicians building and calibrating video walls
- Scenic crews installing set pieces, staging, and branding

## Lighting Design

Lighting is arguably the single most impactful production element. Our lighting designers create:
- **Architectural washes** — setting the mood of the space
- **Key lighting** — ensuring speakers and performers look their best on camera
- **Effect lighting** — moving heads, strobes, and haze for energy and drama
- **Colour stories** — programming brand colours and thematic palettes

## Show Day

On show day, the technical director runs the show from a production desk:
- Calling cues for lighting, video, and audio transitions
- Managing camera switches for live streaming
- Coordinating with stage managers and MCs
- Troubleshooting any issues in real-time

---

At MBH Events, our production team has delivered hundreds of technically complex events. We invest in the best equipment and the best people — because your event's impact depends on it.
    `,
    coverImage: '/images/blog/production-guide.jpg',
    date: '2025-04-10',
    author: 'David Thompson',
    authorImage: '/images/team/david.jpg',
    category: 'Production',
    readTime: '6 min read',
    tags: ['Production', 'Technical', 'Behind the Scenes', 'Event Design'],
  },
  {
    slug: 'choosing-right-event-management-company',
    title: 'How to Choose the Right Event Management Company',
    excerpt:
      'Not all event companies are created equal. Here are the critical factors to evaluate when selecting a partner for your next major event.',
    content: `
Choosing the right event management company can make or break your event. Whether you're planning a corporate conference for 2,000 or an intimate luxury wedding, here's what to look for.

## 1. Portfolio and Track Record

Review their past work carefully:
- Do they have experience with events similar to yours in type and scale?
- Can they show before-and-after venue transformations?
- Do they have video content that demonstrates production quality?
- Are their past events in your industry or category?

## 2. In-House Capabilities

The best event companies do most things in-house:
- Creative design team
- Technical production crew
- Logistics and operations
- Staffing department

Companies that outsource everything are essentially project managers — not full-service event partners.

## 3. Client Testimonials and References

Don't just read testimonials on their website — ask for direct references. Speak to past clients about:
- Communication quality
- Budget adherence
- Problem-solving ability
- Post-event support

## 4. Creative Vision

Ask to see mood boards, concepts, or proposals for a hypothetical event. A great company should be able to:
- Present original, creative ideas
- Show 3D renders or detailed visualizations
- Demonstrate understanding of your brand or personal style

## 5. Transparency and Communication

The right partner will be:
- Transparent about pricing with detailed breakdowns
- Responsive to emails and calls
- Proactive with updates and recommendations
- Honest about what's feasible within your budget

---

At MBH Events, we welcome the scrutiny. Our portfolio, our team, and our client relationships speak for themselves. We don't just manage events — we turn moments into legacy.
    `,
    coverImage: '/images/blog/choosing-company.jpg',
    date: '2025-03-18',
    author: 'Layla Kassem',
    authorImage: '/images/team/layla.jpg',
    category: 'Industry Insights',
    readTime: '5 min read',
    tags: ['Event Management', 'Tips', 'Industry Insights', 'Planning'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}
