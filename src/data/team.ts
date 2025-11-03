export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Managing Partner',
    bio: 'Former Olympic athlete and tech entrepreneur with 15+ years in venture capital. Sarah led investments in 20+ successful SportsTech companies and brings deep expertise in performance analytics and wearable technology.',
    image: 'https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMTkzNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['Performance Analytics', 'Wearable Tech', 'AI/ML'],
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Partner',
    bio: 'Technology leader with background in building scalable platforms for major sports leagues. Michael focuses on fan engagement and esports investments, bringing 12 years of product development experience.',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE1NTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['Fan Engagement', 'Esports', 'Platform Development'],
  },
  {
    id: 'amanda-johnson',
    name: 'Amanda Johnson',
    role: 'Partner',
    bio: 'Former CFO of multiple high-growth sports companies. Amanda specializes in sports commerce and fintech, with expertise in scaling operations and financial strategy for early-stage companies.',
    image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjE0MzQyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['Sports Commerce', 'FinTech', 'Operations'],
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Principal',
    bio: 'Data scientist and former professional esports player. David leads our AI/ML investment thesis and helps portfolio companies implement cutting-edge machine learning solutions.',
    image: 'https://images.unsplash.com/photo-1593510987459-9a1489817a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbCUyMHRlYW18ZW58MXx8fHwxNzYyMTkzNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['AI/ML', 'Data Science', 'Gaming'],
  },
  {
    id: 'elena-petrova',
    name: 'Elena Petrova',
    role: 'Principal',
    bio: 'Sports medicine doctor turned investor with deep knowledge of health tech and injury prevention. Elena works closely with wearable tech and performance analytics companies.',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE1NTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['Health Tech', 'Sports Medicine', 'Wearables'],
  },
  {
    id: 'james-wright',
    name: 'James Wright',
    role: 'Associate',
    bio: 'Former startup founder with experience in mobile apps and fan engagement platforms. James focuses on sourcing new deals and supporting portfolio companies with go-to-market strategies.',
    image: 'https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMTkzNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['Mobile Apps', 'GTM Strategy', 'Deal Sourcing'],
  },
];
