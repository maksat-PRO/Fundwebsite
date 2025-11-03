export interface PortfolioCompany {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  stage: string;
  highlight: string;
  founded: string;
  headquarters: string;
  website: string;
  funding: string;
  team: number;
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  gallery: string[];
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: 'athleteai',
    name: 'AthleteAI',
    category: 'Performance Analytics',
    description: 'AI-powered coaching platform for professional athletes',
    longDescription: 'AthleteAI revolutionizes athletic training through advanced artificial intelligence and machine learning algorithms. Our platform analyzes biomechanics, performance metrics, and training data to provide personalized coaching recommendations that help athletes reach their peak potential.',
    image: 'https://images.unsplash.com/photo-1758521961056-1497134955f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjE4ODU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    stage: 'Series A',
    highlight: '200% YoY Growth',
    founded: '2021',
    headquarters: 'San Francisco, CA',
    website: 'athleteai.tech',
    funding: '$12M',
    team: 45,
    metrics: [
      { label: 'Active Athletes', value: '50,000+' },
      { label: 'Training Sessions', value: '2M+' },
      { label: 'Pro Teams', value: '120+' },
      { label: 'Performance Improvement', value: '35%' },
    ],
    features: [
      'Real-time biomechanical analysis',
      'Personalized training programs',
      'Injury risk prediction',
      'Performance trend tracking',
      'Integration with wearables',
      'Video analysis and feedback',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1758521961056-1497134955f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjE4ODU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1586448910234-297fae7189e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTEwODUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'sportmetrics',
    name: 'SportMetrics',
    category: 'Wearable Tech',
    description: 'Next-gen biometric sensors for injury prevention',
    longDescription: 'SportMetrics develops cutting-edge wearable technology that monitors athlete health in real-time. Our advanced sensors track vital signs, muscle fatigue, and biomechanical stress to predict and prevent injuries before they happen.',
    image: 'https://images.unsplash.com/photo-1653898864688-6e6a4fd0c40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMGRhdGF8ZW58MXx8fHwxNzYyMTg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stage: 'Seed',
    highlight: '50+ Teams',
    founded: '2022',
    headquarters: 'Boston, MA',
    website: 'sportmetrics.io',
    funding: '$4.5M',
    team: 28,
    metrics: [
      { label: 'Devices Deployed', value: '25,000+' },
      { label: 'Data Points Daily', value: '500M+' },
      { label: 'Injury Prevention Rate', value: '67%' },
      { label: 'Partner Teams', value: '52' },
    ],
    features: [
      'Real-time health monitoring',
      'Fatigue detection algorithms',
      'Injury risk alerts',
      'Recovery optimization',
      'Team dashboard analytics',
      'Seamless integration with training systems',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1653898864688-6e6a4fd0c40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMGRhdGF8ZW58MXx8fHwxNzYyMTg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1686721134997-a43d7de8de1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwb3J0cyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIxOTI3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'fanconnect',
    name: 'FanConnect',
    category: 'Fan Engagement',
    description: 'Immersive digital experiences for sports fans',
    longDescription: 'FanConnect transforms how fans experience sports through innovative digital platforms. From virtual meet-and-greets to AR-enhanced viewing experiences, we create deeper connections between fans, athletes, and teams.',
    image: 'https://images.unsplash.com/photo-1761735486587-bcac08b15c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbCUyMG1vZGVybnxlbnwxfHx8fDE3NjIxODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stage: 'Series B',
    highlight: '5M+ Users',
    founded: '2020',
    headquarters: 'New York, NY',
    website: 'fanconnect.live',
    funding: '$28M',
    team: 85,
    metrics: [
      { label: 'Monthly Active Users', value: '5.2M' },
      { label: 'Virtual Events', value: '10,000+' },
      { label: 'Partner Teams', value: '200+' },
      { label: 'Engagement Rate', value: '78%' },
    ],
    features: [
      'Virtual meet-and-greets',
      'AR viewing experiences',
      'Fan reward programs',
      'Live Q&A with athletes',
      'Exclusive content access',
      'Social community features',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1761735486587-bcac08b15c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbCUyMG1vZGVybnxlbnwxfHx8fDE3NjIxODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761591848234-7c5775bb46d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYyMDkzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'proformance',
    name: 'ProFormance',
    category: 'Performance Analytics',
    description: 'Advanced data analytics for team performance',
    longDescription: 'ProFormance provides professional sports teams with comprehensive analytics platforms that transform raw data into actionable insights, helping coaches make data-driven decisions.',
    image: 'https://images.unsplash.com/photo-1586448910234-297fae7189e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTEwODUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stage: 'Series A',
    highlight: '150+ Teams',
    founded: '2019',
    headquarters: 'Austin, TX',
    website: 'proformance.ai',
    funding: '$15M',
    team: 62,
    metrics: [
      { label: 'Teams Using Platform', value: '156' },
      { label: 'Games Analyzed', value: '50,000+' },
      { label: 'Accuracy Rate', value: '94%' },
      { label: 'Data Points', value: '10B+' },
    ],
    features: [
      'Predictive game analytics',
      'Player performance scoring',
      'Opponent scouting tools',
      'Strategy optimization',
      'Real-time game insights',
      'Custom reporting dashboards',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586448910234-297fae7189e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTEwODUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1653898864688-6e6a4fd0c40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMGRhdGF8ZW58MXx8fHwxNzYyMTg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'gamearena',
    name: 'GameArena',
    category: 'Gaming & Esports',
    description: 'Premier esports tournament platform',
    longDescription: 'GameArena is the leading platform for organizing and hosting esports tournaments. We provide infrastructure, streaming, and community tools for the next generation of competitive gaming.',
    image: 'https://images.unsplash.com/photo-1761591848234-7c5775bb46d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYyMDkzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stage: 'Series B',
    highlight: '2M+ Gamers',
    founded: '2020',
    headquarters: 'Los Angeles, CA',
    website: 'gamearena.gg',
    funding: '$22M',
    team: 95,
    metrics: [
      { label: 'Active Gamers', value: '2.3M' },
      { label: 'Tournaments Monthly', value: '5,000+' },
      { label: 'Prize Pool Distributed', value: '$50M+' },
      { label: 'Streaming Hours', value: '100M+' },
    ],
    features: [
      'Tournament management system',
      'Integrated streaming platform',
      'Automated bracket generation',
      'Prize pool management',
      'Anti-cheat systems',
      'Community engagement tools',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1761591848234-7c5775bb46d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYyMDkzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761735486587-bcac08b15c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbCUyMG1vZGVybnxlbnwxfHx8fDE3NjIxODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'fittech',
    name: 'FitTech',
    category: 'Wearable Tech',
    description: 'Smart fitness tracking ecosystem',
    longDescription: 'FitTech creates an integrated ecosystem of smart wearables and apps that help individuals track, analyze, and improve their fitness journey with AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stage: 'Seed',
    highlight: '300K+ Users',
    founded: '2022',
    headquarters: 'Seattle, WA',
    website: 'fittech.app',
    funding: '$6M',
    team: 34,
    metrics: [
      { label: 'App Downloads', value: '300K+' },
      { label: 'Workouts Tracked', value: '5M+' },
      { label: 'User Retention', value: '82%' },
      { label: 'Countries', value: '45' },
    ],
    features: [
      'Multi-device sync',
      'AI workout recommendations',
      'Nutrition tracking',
      'Social challenges',
      'Progress analytics',
      'Personal coaching integration',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1686721134997-a43d7de8de1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwb3J0cyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIxOTI3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1653898864688-6e6a4fd0c40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMGRhdGF8ZW58MXx8fHwxNzYyMTg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
];
