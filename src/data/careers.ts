export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

export const jobPostings: JobPosting[] = [
  {
    id: 'investment-associate',
    title: 'Investment Associate',
    department: 'Investments',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re seeking a talented Investment Associate to join our team and help identify the next generation of SportsTech leaders. You\'ll work directly with partners on deal sourcing, due diligence, and portfolio support.',
    responsibilities: [
      'Source and evaluate investment opportunities in the SportsTech space',
      'Conduct market research and competitive analysis',
      'Support due diligence processes for potential investments',
      'Build financial models and investment memos',
      'Work closely with portfolio companies on strategic initiatives',
      'Represent the firm at industry events and conferences',
    ],
    qualifications: [
      '2-4 years of experience in venture capital, investment banking, or strategy consulting',
      'Strong passion for sports and technology',
      'Excellent analytical and financial modeling skills',
      'Outstanding communication and presentation abilities',
      'Bachelor\'s degree required; MBA preferred',
      'Network in the sports or tech industry is a plus',
    ],
    benefits: [
      'Competitive salary and performance-based bonuses',
      'Carried interest in fund performance',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO policy',
      'Professional development budget',
      'Opportunity to work with cutting-edge SportsTech companies',
    ],
  },
  {
    id: 'platform-lead',
    title: 'Platform Lead',
    department: 'Portfolio Support',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our Platform team to provide strategic support and resources to our portfolio companies. You\'ll help founders scale their businesses through talent recruitment, business development, and operational guidance.',
    responsibilities: [
      'Develop and execute platform initiatives for portfolio companies',
      'Organize events, workshops, and networking opportunities',
      'Support portfolio companies with hiring and talent strategies',
      'Facilitate introductions to customers, partners, and advisors',
      'Track portfolio company metrics and performance',
      'Identify operational challenges and provide strategic guidance',
    ],
    qualifications: [
      '5+ years of experience in operations, consulting, or startup environments',
      'Strong network in the sports and technology ecosystems',
      'Proven track record of building relationships and driving results',
      'Experience working with early-stage companies preferred',
      'Excellent project management and organizational skills',
      'Passion for helping entrepreneurs succeed',
    ],
    benefits: [
      'Competitive compensation package',
      'Equity participation opportunities',
      'Health and wellness benefits',
      'Flexible work arrangements',
      'Access to exclusive industry events',
      'Growth opportunities within the firm',
    ],
  },
  {
    id: 'analyst',
    title: 'Analyst',
    department: 'Investments',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re looking for a bright, motivated Analyst to support our investment team. This is an excellent opportunity to learn about venture capital and the SportsTech industry while working on high-impact projects.',
    responsibilities: [
      'Conduct market research and industry analysis',
      'Support deal evaluation and due diligence processes',
      'Build financial models and prepare investment materials',
      'Track industry trends and emerging technologies',
      'Manage deal pipeline and CRM systems',
      'Support portfolio company reporting and analysis',
    ],
    qualifications: [
      '0-2 years of experience in finance, consulting, or related fields',
      'Strong interest in sports, technology, and venture capital',
      'Excellent analytical and quantitative skills',
      'Proficiency in Excel, PowerPoint, and financial modeling',
      'Bachelor\'s degree in business, economics, or related field',
      'Self-starter with strong work ethic and attention to detail',
    ],
    benefits: [
      'Competitive entry-level compensation',
      'Mentorship from experienced investors',
      'Comprehensive training program',
      'Health and wellness benefits',
      'Opportunity for rapid career growth',
      'Exposure to cutting-edge SportsTech innovations',
    ],
  },
];

export const companyBenefits = [
  {
    title: 'Growth & Learning',
    description: 'Access to conferences, training programs, and continuous learning opportunities in sports and technology.',
  },
  {
    title: 'Flexible Work',
    description: 'Hybrid work model with flexibility to work remotely and modern office spaces in major cities.',
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage, fitness stipends, and mental health support programs.',
  },
  {
    title: 'Impact',
    description: 'Work with innovative companies that are transforming sports for athletes and fans worldwide.',
  },
];
