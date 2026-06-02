import { Service } from '../../models/service.model';
import { PortfolioProject } from '../../models/portfolio.model';
import { PricingPlan } from '../../models/pricing.model';
import { Testimonial } from '../../models/testimonial.model';
import { TeamMember } from '../../models/team-member.model';

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Business Website Development',
    description: 'Professional, responsive websites designed to showcase your business and attract customers.',
    icon: 'globe',
    features: ['Custom Design', 'SEO Optimized', 'Mobile Responsive', 'Fast Loading']
  },
  {
    id: '2',
    title: 'E-Commerce Development',
    description: 'Feature-rich e-commerce platforms with secure payment gateways and inventory management.',
    icon: 'shopping-cart',
    features: ['Product Management', 'Payment Gateway', 'Inventory System', 'Order Tracking']
  },
  {
    id: '3',
    title: 'Custom Web Applications',
    description: 'Scalable web applications tailored to your specific business requirements.',
    icon: 'code',
    features: ['Scalable Architecture', 'Real-time Data', 'Cloud Ready', 'API Integration']
  },
  {
    id: '4',
    title: 'Angular Development',
    description: 'Modern single-page applications using Angular framework for superior performance.',
    icon: 'zap',
    features: ['SPA Architecture', 'TypeScript', 'Reactive Forms', 'State Management']
  },
  {
    id: '5',
    title: 'Node.js Backend Development',
    description: 'Robust backend services and APIs built with Node.js for scalability and performance.',
    icon: 'server',
    features: ['RESTful APIs', 'WebSockets', 'Authentication', 'Database Integration']
  },
  {
    id: '6',
    title: 'MongoDB Database Solutions',
    description: 'NoSQL database design and optimization for modern web applications.',
    icon: 'database',
    features: ['Data Modeling', 'Performance Tuning', 'Security', 'Backup & Recovery']
  },
  {
    id: '7',
    title: 'Website Maintenance',
    description: 'Ongoing support and maintenance to keep your website secure and up-to-date.',
    icon: 'shield',
    features: ['Security Updates', 'Backup Management', 'Bug Fixes', 'Performance Monitoring']
  },
  {
    id: '8',
    title: 'SEO Optimization',
    description: 'Strategic SEO services to improve your online visibility and search rankings.',
    icon: 'search',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Analytics']
  }
];

export const MOCK_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: '1',
    title: 'Restaurant Website',
    description: 'A modern, responsive website for a fine dining restaurant with menu showcase, reservation system, and Google Maps integration.',
    image: 'assets/images/portfolio/restaurant.jpg',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
    category: 'Web Development',
    details: 'This project showcases a complete restaurant website with online ordering capabilities, reservation system, and integrated payment processing.'
  },
  {
    id: '2',
    title: 'Construction Company Website',
    description: 'Professional portfolio website for a construction company featuring project showcases, team bios, and service listings.',
    image: 'assets/images/portfolio/construction.jpg',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'MongoDB'],
    category: 'Corporate',
    details: 'A comprehensive portfolio website displaying completed projects with detailed case studies, team information, and contact forms.'
  },
  {
    id: '3',
    title: 'Finance Consultant Website',
    description: 'Expert consultation website for financial advisors with service packages, client testimonials, and booking system.',
    image: 'assets/images/portfolio/finance.jpg',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
    category: 'Services',
    details: 'A professional financial consultation website with service offerings, booking integration, and secure client portal access.'
  }
];

export const MOCK_PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    name: 'Starter',
    price: '₹10,000',
    description: 'Perfect for small businesses starting online',
    features: [
      '5 Pages',
      'Responsive Design',
      'Contact Form',
      'WhatsApp Integration',
      'Basic SEO Setup',
      '1 Month Support'
    ],
    highlighted: false,
    cta: 'Get Started'
  },
  {
    id: '2',
    name: 'Professional',
    price: '₹25,000',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'Unlimited Pages',
      'Blog System',
      'SEO Optimization',
      'Google Maps Integration',
      'Analytics Setup',
      '3 Months Support'
    ],
    highlighted: true,
    cta: 'Start Professional'
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications',
    features: [
      'Custom Design',
      'Admin Dashboard',
      'API Integrations',
      'Database Design',
      'Advanced Security',
      'Ongoing Support',
      'Dedicated Team'
    ],
    highlighted: false,
    cta: 'Contact Us'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    position: 'Founder & CEO',
    company: 'TechStart Inc',
    message: 'Techzeno Solutions transformed our online presence completely. Their team is professional, responsive, and delivered beyond our expectations.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    position: 'Business Owner',
    company: 'Digital Marketing Pro',
    message: 'The website they built for us generated 300% more leads in the first 3 months. Highly recommended!',
    rating: 5
  },
  {
    id: '3',
    name: 'Amit Patel',
    position: 'Manager',
    company: 'Global Solutions Ltd',
    message: 'Fast delivery, clean code, and excellent support. We are very satisfied with our partnership with Techzeno.',
    rating: 5
  }
];

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Vipin Sharma',
    role: 'Founder & Lead Developer',
    bio: 'Expert full-stack developer with 8+ years of experience in Angular, Node.js, and cloud technologies.',
    socials: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '2',
    name: 'Ananya Verma',
    role: 'Frontend Specialist',
    bio: 'Creative frontend developer specializing in responsive design and interactive user experiences.',
    socials: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '3',
    name: 'Rohit Singh',
    role: 'Backend Developer',
    bio: 'Backend architect with expertise in Node.js, MongoDB, and API design.',
    socials: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];
