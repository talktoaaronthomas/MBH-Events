export interface ServiceItem {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  emoji: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  includedServices: ServiceItem[];
  whyChooseUs: string[];
  process: { step: string; description: string }[];
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  tier: 'flagship' | 'premium' | 'standard';
  heroImage: string;
  galleryImages: string[];
}

export const services: Service[] = [
  {
    slug: 'corporate-events',
    title: 'Corporate Events & Experiences',
    emoji: '⭐',
    tagline: 'Where Business Meets Brilliance',
    shortDescription:
      'High-impact corporate events aligned with business objectives, delivered with precision and professionalism.',
    fullDescription:
      'At MBH Events, we understand that corporate events are more than gatherings — they are strategic opportunities to inspire teams, engage stakeholders, and amplify your brand. From intimate executive retreats to large-scale conferences, our team delivers end-to-end event management with military precision and creative flair, ensuring every detail aligns with your business objectives and leaves a lasting impression.',
    includedServices: [
      {
        title: 'Conferences & Seminars',
        description:
          'Large-scale knowledge-sharing events with world-class stage production, speaker management, and seamless AV integration.',
      },
      {
        title: 'Annual Meetings & Corporate Gatherings',
        description:
          'Professional, on-brand gatherings that engage employees and stakeholders with polished presentation and flawless logistics.',
      },
      {
        title: 'Gala Dinners & Award Nights',
        description:
          'Elegant, high-energy celebrations that honour achievements with cinematic lighting, curated entertainment, and fine dining experiences.',
      },
      {
        title: 'Product Launches & Brand Activations',
        description:
          'Show-stopping reveal moments with immersive staging, interactive brand experiences, and media-ready production.',
      },
      {
        title: 'Executive & VIP Events',
        description:
          'Exclusive, detail-obsessed events for senior leadership and high-value guests — from boardroom dinners to luxury off-sites.',
      },
    ],
    whyChooseUs: [
      'Proven track record with Fortune 500 companies and government entities',
      'Strategic approach — every event is designed to meet your business KPIs',
      'Full in-house production, creative, and logistics capabilities',
      'Dedicated project manager for seamless coordination',
      'Strict adherence to timelines, budgets, and brand guidelines',
    ],
    process: [
      { step: 'Discovery', description: 'We deep-dive into your brand, objectives, and audience to craft a tailored event strategy.' },
      { step: 'Concept & Design', description: 'Our creative team develops an immersive event concept with mood boards, 3D renders, and detailed plans.' },
      { step: 'Production & Build', description: 'Our production crew brings the vision to life — staging, AV, lighting, and every technical detail.' },
      { step: 'Execution', description: 'On the day, our experienced team manages every element so you can focus on your guests.' },
      { step: 'Post-Event', description: 'We deliver comprehensive event reports, analytics, and ROI measurement.' },
    ],
    relatedSlugs: ['creative-design', 'production-technical', 'talent-entertainment', 'event-staffing'],
    seo: {
      title: 'Corporate Events & Experiences | MBH Events',
      description:
        'Premium corporate event management — conferences, galas, product launches, and executive events delivered with precision. MBH Events turns business moments into legacy.',
      keywords: ['corporate events', 'conference management', 'gala dinner planning', 'product launch events', 'corporate event company'],
    },
    tier: 'flagship',
    heroImage: '/images/services/Corporate Events & Experiences.png',
    galleryImages: [
      '/images/corporate/Conferences & Seminars.png',
      '/images/corporate/Annual Meetings & Corporate Gatherings.png',
      '/images/corporate/Gala Dinners & Award Nights.png',
      '/images/corporate/Product Launches & Brand Activations.png',
      '/images/corporate/Executive & VIP Events.png',
    ],
  },
  {
    slug: 'luxury-weddings',
    title: 'Luxury Weddings & Social Events',
    emoji: '💍',
    tagline: 'Where Love Stories Become Timeless Celebrations',
    shortDescription:
      'Bespoke weddings and private celebrations with exceptional detail and creativity.',
    fullDescription:
      'Your love story deserves a celebration as extraordinary as the bond you share. MBH Events specialises in crafting luxury weddings and social celebrations that are deeply personal, visually breathtaking, and flawlessly executed. From destination weddings in exotic locales to intimate garden ceremonies, we pour passion and precision into every petal, every note, and every moment — creating celebrations your guests will talk about for years.',
    includedServices: [
      {
        title: 'Luxury & Destination Weddings',
        description:
          'Dream weddings in stunning locations — from beachfront resorts to heritage palaces — with every detail orchestrated to perfection.',
      },
      {
        title: 'Wedding Planning & Coordination',
        description:
          'End-to-end wedding management from save-the-dates to send-offs, with a dedicated coordinator by your side.',
      },
      {
        title: 'Venue Selection & Setup',
        description:
          'Access to an exclusive portfolio of venues, with complete styling, layout planning, and setup coordination.',
      },
      {
        title: 'Decor & Theme Design',
        description:
          'Bespoke decor concepts from opulent floral installations to contemporary minimal chic — tailored to your vision.',
      },
      {
        title: 'Private Parties & Celebrations',
        description:
          'Milestone birthdays, anniversaries, and private galas designed with the same luxury and attention as our weddings.',
      },
    ],
    whyChooseUs: [
      'Deep expertise in multi-cultural and destination weddings',
      'Award-winning creative team for stunning decor and design',
      'Trusted network of premium vendors and luxury venues',
      'White-glove service with 24/7 availability for our couples',
      'Discreet, detail-obsessed approach for high-profile celebrations',
    ],
    process: [
      { step: 'Vision Session', description: 'We sit with you to understand your love story, style preferences, and dream celebration.' },
      { step: 'Design & Curation', description: 'Our designers create a bespoke concept with mood boards, color palettes, and detailed vendor proposals.' },
      { step: 'Vendor & Venue Management', description: 'We handle all vendor contracts, tastings, fittings, and venue logistics.' },
      { step: 'Rehearsal & Coordination', description: 'Full rehearsal with all vendors, detailed timelines, and contingency planning.' },
      { step: 'The Celebration', description: 'We orchestrate every moment so you can be fully present in your joy.' },
    ],
    relatedSlugs: ['creative-design', 'talent-entertainment', 'logistics-hospitality', 'event-rentals'],
    seo: {
      title: 'Luxury Weddings & Social Events | MBH Events',
      description:
        'Bespoke luxury wedding planning and social event management. From destination weddings to private celebrations — MBH Events creates unforgettable moments.',
      keywords: ['luxury wedding planner', 'destination weddings', 'wedding planning', 'social events', 'premium wedding company'],
    },
    tier: 'premium',
    heroImage: '/images/services/Luxury Weddings & Social Events.png',
    galleryImages: [
      '/images/weddings/Luxury & Destination Weddings.png',
      '/images/weddings/Wedding Planning & Coordination.png',
      '/images/weddings/Venue Selection & Setup.png',
      '/images/weddings/Decor & Theme Design.png',
      '/images/weddings/Private Parties & Celebrations.png',
    ],
  },
  {
    slug: 'event-planning',
    title: 'Event Planning & Management',
    emoji: '📋',
    tagline: 'Precision Planning, Flawless Delivery',
    shortDescription:
      'End-to-end planning from concept to completion — we handle every detail so you don\'t have to.',
    fullDescription:
      'Great events don\'t happen by accident. Behind every seamless experience is meticulous planning, disciplined project management, and a team that sweats the details. MBH Events brings structured methodology to creative event delivery — managing budgets, timelines, vendors, and logistics with the rigour of a Fortune 500 project and the creativity of a design studio.',
    includedServices: [
      {
        title: 'Event Concept Development',
        description: 'Collaborative ideation sessions to develop a compelling event concept aligned with your goals and audience.',
      },
      {
        title: 'Budgeting & Timeline Management',
        description: 'Transparent budget frameworks and milestone-driven timelines to keep your event on track and on budget.',
      },
      {
        title: 'Venue Sourcing & Booking',
        description: 'Access to an extensive venue network with negotiated rates, site inspections, and contract management.',
      },
      {
        title: 'Vendor Management',
        description: 'Curated vendor selection, contract negotiation, and quality oversight across all event suppliers.',
      },
      {
        title: 'On-site Coordination',
        description: 'Experienced event managers on the ground ensuring everything runs like clockwork from setup to teardown.',
      },
    ],
    whyChooseUs: [
      'Structured project management with clear milestones and reporting',
      'Budget transparency — no hidden costs, real-time tracking',
      'Vast vendor network with negotiated preferred rates',
      'Risk mitigation with contingency planning for every scenario',
      'Single point of contact for effortless coordination',
    ],
    process: [
      { step: 'Brief & Scope', description: 'We define clear objectives, audience, budget, and success metrics.' },
      { step: 'Planning & Procurement', description: 'Detailed project plan with timelines, vendor contracts, and resource allocation.' },
      { step: 'Dry Run', description: 'Pre-event walkthroughs, rehearsals, and final checks.' },
      { step: 'Live Management', description: 'Full on-site management with real-time problem solving.' },
      { step: 'Debrief', description: 'Post-event review with insights, feedback, and optimization recommendations.' },
    ],
    relatedSlugs: ['corporate-events', 'creative-design', 'logistics-hospitality', 'event-staffing'],
    seo: {
      title: 'Event Planning & Management | MBH Events',
      description:
        'Professional event planning and management services — concept to completion. Budgeting, vendor management, and on-site coordination by MBH Events.',
      keywords: ['event planning', 'event management', 'event coordinator', 'venue sourcing', 'vendor management'],
    },
    tier: 'standard',
    heroImage: '/images/services/Event Planning & Management.png',
    galleryImages: [
      '/images/services/planning-1.jpg',
      '/images/services/planning-2.jpg',
      '/images/services/planning-3.jpg',
      '/images/services/planning-4.jpg',
    ],
  },
  {
    slug: 'creative-design',
    title: 'Creative & Experience Design',
    emoji: '🎨',
    tagline: 'Immersive Environments That Tell Your Story',
    shortDescription:
      'Immersive, visually stunning event environments that elevate brand identity and captivate audiences.',
    fullDescription:
      'An event\'s environment shapes its impact. MBH Events\' creative team designs immersive spaces that do more than look beautiful — they tell stories, evoke emotions, and create indelible memories. From avant-garde stage designs to experiential brand installations, our designers blend artistry with strategic thinking to craft environments that captivate every sense.',
    includedServices: [
      {
        title: 'Event Theme & Concept Design',
        description: 'Original creative concepts with mood boards, color stories, and detailed design presentations.',
      },
      {
        title: 'Stage & Set Design',
        description: 'Architectural stage designs with 3D visualization, custom builds, and premium materials.',
      },
      {
        title: 'Experiential Installations',
        description: 'Interactive, Instagram-worthy installations that immerse guests in your brand or celebration theme.',
      },
      {
        title: 'Branding & Visual Identity',
        description: 'On-event branding — signage, digital displays, printed materials, and cohesive visual language.',
      },
      {
        title: 'Custom Decor & Styling',
        description: 'Bespoke floral arrangements, custom furniture, lighting design, and curated styling details.',
      },
    ],
    whyChooseUs: [
      'In-house creative studio with award-winning designers',
      '3D renders and virtual walkthroughs before build',
      'Trend-forward designs blending international aesthetics with local sensibilities',
      'End-to-end — from concept sketch to on-site installation',
      'Material innovation and sustainable design options',
    ],
    process: [
      { step: 'Creative Brief', description: 'We absorb your vision, brand guidelines, and audience profile.' },
      { step: 'Concept Presentation', description: 'Mood boards, sketches, and 3D renders of proposed design.' },
      { step: 'Design Development', description: 'Detailed technical drawings, material selection, and fabrication planning.' },
      { step: 'Fabrication & Install', description: 'Our production team builds and installs with precision craftsmanship.' },
      { step: 'Styling & Finishing', description: 'Final styling touches, lighting programming, and quality checks.' },
    ],
    relatedSlugs: ['production-technical', 'corporate-events', 'luxury-weddings', 'event-rentals'],
    seo: {
      title: 'Creative & Experience Design | MBH Events',
      description:
        'Immersive event design — stage design, experiential installations, branding, and custom decor. MBH Events creates environments that captivate.',
      keywords: ['event design', 'stage design', 'experiential design', 'event decor', 'creative event agency'],
    },
    tier: 'standard',
    heroImage: '/images/services/Creative & Experience Design.png',
    galleryImages: [
      '/images/services/creative-1.jpg',
      '/images/services/creative-2.jpg',
      '/images/services/creative-3.jpg',
      '/images/services/creative-4.jpg',
    ],
  },
  {
    slug: 'production-technical',
    title: 'Production & Technical Solutions',
    emoji: '🎛️',
    tagline: 'Technical Excellence, Show-Stopping Impact',
    shortDescription:
      'Advanced technical production with high-end equipment for events that look and sound phenomenal.',
    fullDescription:
      'Behind every jaw-dropping event is world-class production. MBH Events\' technical team delivers broadcast-quality audio-visual experiences, spectacular lighting designs, and robust infrastructure that powers events of any scale. From intimate corporate stages to massive outdoor concerts, our production capabilities ensure your event looks, sounds, and feels extraordinary.',
    includedServices: [
      {
        title: 'Stage, Truss & Rigging',
        description: 'Custom stage builds, professional trussing systems, and certified rigging for safe, spectacular structures.',
      },
      {
        title: 'LED Screens & Displays',
        description: 'High-resolution LED walls, projection mapping, and dynamic digital displays for maximum visual impact.',
      },
      {
        title: 'Audio-Visual Production',
        description: 'Professional sound systems, mixing, and AV integration for crystal-clear presentation delivery.',
      },
      {
        title: 'Lighting Design & Effects',
        description: 'Architectural and theatrical lighting design with intelligent fixtures, LED, and special effects.',
      },
      {
        title: 'Live Streaming & Hybrid Events',
        description: 'Multi-camera live streaming, virtual attendee engagement, and hybrid event production.',
      },
      {
        title: 'Power & Backup Systems',
        description: 'Generator provision, power distribution, and backup systems for uninterrupted events.',
      },
    ],
    whyChooseUs: [
      'Extensive in-house equipment inventory — no third-party dependency',
      'Experienced technical crew with international event credentials',
      'Broadcast-quality production for live streaming and hybrid events',
      'Safety-first approach with certified rigging and electrical teams',
      'Scalable solutions from boardroom to stadium',
    ],
    process: [
      { step: 'Technical Survey', description: 'Venue inspection, power assessment, and technical requirements scoping.' },
      { step: 'Design & Planning', description: 'Technical drawings, equipment lists, and production schedules.' },
      { step: 'Load-In & Build', description: 'Professional load-in, rigging, and equipment installation.' },
      { step: 'Programming & Testing', description: 'Lighting programming, sound check, and full technical rehearsal.' },
      { step: 'Show Management', description: 'Dedicated technical director and crew for flawless live execution.' },
    ],
    relatedSlugs: ['creative-design', 'corporate-events', 'talent-entertainment', 'event-rentals'],
    seo: {
      title: 'Production & Technical Solutions | MBH Events',
      description:
        'Professional event production — staging, LED screens, audio-visual, lighting, and live streaming. MBH Events delivers technical excellence.',
      keywords: ['event production', 'AV production', 'LED screen rental', 'stage lighting', 'live streaming events'],
    },
    tier: 'standard',
    heroImage: '/images/services/Production & Technical Solutions.png',
    galleryImages: [
      '/images/services/production-1.jpg',
      '/images/services/production-2.jpg',
      '/images/services/production-3.jpg',
      '/images/services/production-4.jpg',
    ],
  },
  {
    slug: 'talent-entertainment',
    title: 'Talent & Entertainment',
    emoji: '🎤',
    tagline: 'Unforgettable Performances, Electric Atmospheres',
    shortDescription:
      'Curated entertainment for engaging, unforgettable experiences that keep guests captivated.',
    fullDescription:
      'The right entertainment transforms a good event into an unforgettable one. MBH Events curates world-class talent and entertainment experiences tailored to your audience — from chart-topping artists and electrifying DJs to cultural performances and bespoke show production. We handle artist relations, technical riders, and show management so you get a flawless performance every time.',
    includedServices: [
      {
        title: 'DJs & Live Performers',
        description: 'Top-tier DJs, live bands, and musicians for every genre and mood.',
      },
      {
        title: 'MCs & Hosts',
        description: 'Professional masters of ceremony who engage audiences and keep the energy high.',
      },
      {
        title: 'Celebrity & Artist Booking',
        description: 'Access to international and regional celebrities, artists, and influencers.',
      },
      {
        title: 'Show Production',
        description: 'Choreographed shows, dance troupes, and theatrical performances custom-designed for your event.',
      },
      {
        title: 'Cultural & Themed Performances',
        description: 'Traditional and contemporary cultural acts that celebrate heritage and diversity.',
      },
    ],
    whyChooseUs: [
      'Extensive network of international and regional talent',
      'Full artist management — from booking to backstage',
      'Custom show concepts designed around your event theme',
      'Technical rider fulfillment with our in-house production team',
      'Backup talent plans for risk-free entertainment',
    ],
    process: [
      { step: 'Entertainment Brief', description: 'We understand your audience, event vibe, and entertainment goals.' },
      { step: 'Talent Curation', description: 'We present a curated shortlist of performers and entertainment options.' },
      { step: 'Booking & Contracts', description: 'We handle all negotiations, contracts, and rider requirements.' },
      { step: 'Rehearsal & Coordination', description: 'Sound checks, rehearsals, and run-of-show coordination.' },
      { step: 'Live Performance', description: 'Stage management and real-time show direction for a flawless performance.' },
    ],
    relatedSlugs: ['production-technical', 'corporate-events', 'luxury-weddings', 'creative-design'],
    seo: {
      title: 'Talent & Entertainment | MBH Events',
      description:
        'Curated event entertainment — DJs, live performers, celebrity bookings, and custom show production. MBH Events brings unforgettable performances.',
      keywords: ['event entertainment', 'DJ booking', 'celebrity booking', 'live performers', 'show production'],
    },
    tier: 'standard',
    heroImage: '/images/services/Talent & Entertainment.png',
    galleryImages: [
      '/images/services/entertainment-1.jpg',
      '/images/services/entertainment-2.jpg',
      '/images/services/entertainment-3.jpg',
      '/images/services/entertainment-4.jpg',
    ],
  },
  {
    slug: 'event-staffing',
    title: 'Event Staffing & Crowd Management',
    emoji: '👥',
    tagline: 'Professional Teams, Exceptional Guest Experience',
    shortDescription:
      'Professional staffing for smooth operations and outstanding guest experience at every touchpoint.',
    fullDescription:
      'Your event team is the face of your brand. MBH Events provides meticulously trained, professionally groomed event staff who represent your brand with excellence. From elegant hostesses and efficient registration teams to VIP protocol officers and experienced security personnel, we ensure every guest interaction is smooth, professional, and memorable.',
    includedServices: [
      {
        title: 'Hostesses & Brand Ambassadors',
        description: 'Polished, multilingual brand representatives trained to embody your brand values.',
      },
      {
        title: 'Registration Staff',
        description: 'Efficient, tech-savvy registration teams for seamless guest check-in experiences.',
      },
      {
        title: 'VIP Handling & Protocol',
        description: 'Discreet, experienced protocol officers for VVIP and dignitary management.',
      },
      {
        title: 'Security & Crowd Control',
        description: 'Licensed security personnel with event-specific crowd management training.',
      },
      {
        title: 'Event Coordinators & Supervisors',
        description: 'Experienced on-ground supervisors who manage teams and troubleshoot in real-time.',
      },
    ],
    whyChooseUs: [
      'Rigorously vetted and professionally trained staff',
      'Multilingual teams for international events',
      'Custom uniforms and brand-aligned grooming standards',
      'Scalable teams from 5 to 500+ staff members',
      'Dedicated staffing coordinator for seamless management',
    ],
    process: [
      { step: 'Requirements Analysis', description: 'We assess your event type, scale, and staffing needs in detail.' },
      { step: 'Team Selection', description: 'Hand-picked staff matched to your event profile and brand personality.' },
      { step: 'Training & Briefing', description: 'Event-specific training covering brand guidelines, protocols, and scenarios.' },
      { step: 'Deployment', description: 'Uniformed, briefed teams deployed on schedule with supervisor oversight.' },
      { step: 'Performance Review', description: 'Post-event staffing report with performance metrics and feedback.' },
    ],
    relatedSlugs: ['corporate-events', 'logistics-hospitality', 'event-planning', 'exhibitions-activations'],
    seo: {
      title: 'Event Staffing & Crowd Management | MBH Events',
      description:
        'Professional event staffing — hostesses, registration, VIP protocol, security, and crowd management. MBH Events ensures exceptional guest experiences.',
      keywords: ['event staffing', 'crowd management', 'event hostesses', 'VIP protocol', 'event security'],
    },
    tier: 'standard',
    heroImage: '/images/services/Event Staffing & Crowd Management.png',
    galleryImages: [
      '/images/services/staffing-1.jpg',
      '/images/services/staffing-2.jpg',
      '/images/services/staffing-3.jpg',
      '/images/services/staffing-4.jpg',
    ],
  },
  {
    slug: 'logistics-hospitality',
    title: 'Logistics & Hospitality Management',
    emoji: '🚗',
    tagline: 'Seamless Operations, Elevated Comfort',
    shortDescription:
      'Seamless logistics and hospitality for operational efficiency and exceptional guest comfort.',
    fullDescription:
      'The invisible backbone of every great event is impeccable logistics. MBH Events manages every operational detail — from guest transportation and valet services to accommodation coordination and on-ground logistics — so your event runs effortlessly. We obsess over the details your guests won\'t notice, precisely so they enjoy an experience that feels effortless.',
    includedServices: [
      {
        title: 'Transportation & Chauffeurs',
        description: 'Fleet management, luxury chauffeurs, and shuttle services for seamless guest transport.',
      },
      {
        title: 'Valet Parking',
        description: 'Professional valet services with trained attendants for a premium arrival experience.',
      },
      {
        title: 'Buggy & Guest Mobility',
        description: 'Golf carts and buggies for large venue navigation and guest comfort.',
      },
      {
        title: 'Accommodation Coordination',
        description: 'Hotel block bookings, room allocation management, and guest welcome packages.',
      },
      {
        title: 'On-ground Logistics',
        description: 'Freight management, storage, setup scheduling, and operational coordination.',
      },
    ],
    whyChooseUs: [
      'Military-grade logistics planning with detailed run sheets',
      'Premium vehicle fleet for executive transportation',
      'Real-time communication systems for on-ground coordination',
      'Experience managing logistics for 10,000+ guest events',
      'Contingency planning for weather, traffic, and operational risks',
    ],
    process: [
      { step: 'Logistics Audit', description: 'Comprehensive assessment of venue access, capacity, and operational requirements.' },
      { step: 'Transport Planning', description: 'Route mapping, fleet allocation, and shuttle scheduling.' },
      { step: 'Accommodation Setup', description: 'Hotel negotiations, room blocking, and guest communication.' },
      { step: 'Operations Centre', description: 'Dedicated ops room with real-time coordination during the event.' },
      { step: 'Wrap-Up', description: 'Organized teardown, equipment return, and final logistics reconciliation.' },
    ],
    relatedSlugs: ['event-staffing', 'event-planning', 'corporate-events', 'luxury-weddings'],
    seo: {
      title: 'Logistics & Hospitality Management | MBH Events',
      description:
        'Event logistics and hospitality — transportation, valet, accommodation, and on-ground operations. MBH Events ensures seamless event delivery.',
      keywords: ['event logistics', 'hospitality management', 'event transportation', 'valet parking events', 'accommodation coordination'],
    },
    tier: 'standard',
    heroImage: '/images/services/Logistics & Hospitality Management.png',
    galleryImages: [
      '/images/services/logistics-1.jpg',
      '/images/services/logistics-2.jpg',
      '/images/services/logistics-3.jpg',
      '/images/services/logistics-4.jpg',
    ],
  },
  {
    slug: 'exhibitions-activations',
    title: 'Exhibitions & Brand Activations',
    emoji: '🚀',
    tagline: 'Dynamic Experiences That Amplify Your Brand',
    shortDescription:
      'Dynamic brand experiences that maximise visibility, engagement, and ROI at every touchpoint.',
    fullDescription:
      'In a world of noise, your brand needs to stop people in their tracks. MBH Events designs and executes exhibition presences and brand activations that are impossible to ignore — from jaw-dropping booth designs at international trade shows to guerrilla mall activations that generate social buzz. We combine creative design with strategic marketing to maximise your brand\'s impact and ROI.',
    includedServices: [
      {
        title: 'Exhibition Booth Design & Build',
        description: 'Custom exhibition stands from concept to build — modular, sustainable, and visually striking.',
      },
      {
        title: 'Trade Shows & Expo Management',
        description: 'End-to-end trade show management including logistics, staffing, and lead capture.',
      },
      {
        title: 'Mall & Outdoor Activations',
        description: 'High-footfall brand activations in malls, parks, and public spaces designed for engagement.',
      },
      {
        title: 'Promotional Campaigns',
        description: 'Experiential marketing campaigns that drive brand awareness and customer interaction.',
      },
      {
        title: 'Sampling Activities',
        description: 'Product sampling programs with trained brand ambassadors and performance tracking.',
      },
    ],
    whyChooseUs: [
      'Creative concepts that stop foot traffic and drive engagement',
      'In-house fabrication for custom booth builds',
      'Integrated digital + physical activation strategies',
      'ROI-focused approach with lead capture and analytics',
      'Experience across GITEX, GISEC, Arab Health, and major international expos',
    ],
    process: [
      { step: 'Brand Immersion', description: 'We study your brand, products, and target audience for the activation.' },
      { step: 'Concept Design', description: 'Creative concepts with 3D booth renders and activation mechanics.' },
      { step: 'Build & Produce', description: 'Custom fabrication, graphic production, and technology integration.' },
      { step: 'Activation', description: 'On-ground management with trained brand ambassadors and real-time engagement tracking.' },
      { step: 'Reporting', description: 'Post-activation report with footfall data, leads generated, and ROI analysis.' },
    ],
    relatedSlugs: ['creative-design', 'production-technical', 'event-staffing', 'event-rentals'],
    seo: {
      title: 'Exhibitions & Brand Activations | MBH Events',
      description:
        'Exhibition booth design, trade show management, and brand activations. MBH Events creates dynamic brand experiences that maximise engagement.',
      keywords: ['exhibition booth design', 'brand activation', 'trade show management', 'mall activation', 'experiential marketing'],
    },
    tier: 'standard',
    heroImage: '/images/services/Exhibitions & Brand Activations.png',
    galleryImages: [
      '/images/services/exhibitions-1.jpg',
      '/images/services/exhibitions-2.jpg',
      '/images/services/exhibitions-3.jpg',
      '/images/services/exhibitions-4.jpg',
    ],
  },
  {
    slug: 'event-rentals',
    title: 'Event Rentals & Infrastructure',
    emoji: '🏗️',
    tagline: 'Everything You Need, Delivered and Installed',
    shortDescription:
      'Comprehensive rental solutions — furniture, structures, staging, and equipment — for events of any scale.',
    fullDescription:
      'From grand tented galas to sleek corporate stages, MBH Events provides a comprehensive inventory of premium event rentals and infrastructure solutions. Our warehouse stocks everything from luxury furniture and designer seating to industrial staging and temporary structures. Every item is meticulously maintained, delivered on time, and installed by our professional crew.',
    includedServices: [
      {
        title: 'Furniture & Seating',
        description: 'Premium furniture — lounge sets, dining tables, chairs, bar units, and custom builds.',
      },
      {
        title: 'Tents & Temporary Structures',
        description: 'Clearspan marquees, pagodas, Arabian tents, and climate-controlled temporary structures.',
      },
      {
        title: 'Staging & Platforms',
        description: 'Modular staging systems, catwalks, risers, and custom platform builds.',
      },
      {
        title: 'Lighting & Equipment Rentals',
        description: 'Architectural lighting, intelligent fixtures, generators, and technical equipment.',
      },
      {
        title: 'Decor & Setup Materials',
        description: 'Carpeting, draping, barriers, signage frames, and event infrastructure essentials.',
      },
    ],
    whyChooseUs: [
      'Extensive in-house inventory — single source for all rental needs',
      'Premium quality, meticulously maintained equipment',
      'Delivery, installation, and collection included',
      'Flexible packages for any budget and scale',
      'Quick turnaround — last-minute requests welcome',
    ],
    process: [
      { step: 'Requirement Listing', description: 'We assess your event needs and recommend the right rental package.' },
      { step: 'Quote & Selection', description: 'Transparent pricing with the option to visit our showroom/warehouse.' },
      { step: 'Delivery & Setup', description: 'On-time delivery and professional installation at your venue.' },
      { step: 'Event Support', description: 'On-call support during the event for any equipment needs.' },
      { step: 'Collection', description: 'Efficient teardown and collection post-event.' },
    ],
    relatedSlugs: ['production-technical', 'creative-design', 'logistics-hospitality', 'event-planning'],
    seo: {
      title: 'Event Rentals & Infrastructure | MBH Events',
      description:
        'Premium event rentals — furniture, tents, staging, lighting, and decor. MBH Events delivers comprehensive rental solutions for any event scale.',
      keywords: ['event rentals', 'furniture rental', 'tent rental events', 'staging rental', 'event equipment hire'],
    },
    tier: 'standard',
    heroImage: '/images/services/Event Rentals & Infrastructure.png',
    galleryImages: [
      '/images/services/rentals-1.jpg',
      '/images/services/rentals-2.jpg',
      '/images/services/rentals-3.jpg',
      '/images/services/rentals-4.jpg',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
