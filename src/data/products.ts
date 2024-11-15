import { BarChart2, Users, MessageCircle } from 'lucide-react';
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'analytics-pro',
    title: 'Analytics Pro',
    icon: 'BarChart2',
    description: 'Advanced analytics and insights for data-driven social media strategies.',
    price: '$99/mo',
    features: [
      'Real-time social media metrics tracking',
      'Competitor analysis and benchmarking',
      'Custom report generation',
      'API access for data integration',
      'Advanced data visualization',
      'Predictive analytics',
      'Audience insights',
      'Campaign performance tracking'
    ],
    systemRequirements: [
      'Modern web browser (Chrome, Firefox, Safari, Edge)',
      'Minimum 4GB RAM',
      'Stable internet connection',
      'Screen resolution: 1280x720 or higher'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Analytics Dashboard'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        alt: 'Performance Metrics'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        alt: 'Report Generation'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    faq: [
      {
        question: 'How often is data updated?',
        answer: 'Our analytics are updated in real-time, with dashboard refreshes every 5 minutes.'
      },
      {
        question: 'Can I export the reports?',
        answer: 'Yes, you can export reports in multiple formats including PDF, CSV, and Excel.'
      },
      {
        question: 'Do you support all social media platforms?',
        answer: 'We support all major platforms including Facebook, Twitter, Instagram, LinkedIn, and TikTok.'
      }
    ]
  },
  {
    id: 'engagement-suite',
    title: 'Engagement Suite',
    icon: 'Users',
    description: 'Boost engagement with automated responses and community management.',
    price: '$149/mo',
    features: [
      'Automated response system',
      'Sentiment analysis',
      'User segmentation',
      'Campaign tracking',
      'Multi-platform management',
      'Scheduled posting',
      'Content suggestions',
      'Performance analytics'
    ],
    systemRequirements: [
      'Modern web browser (Chrome, Firefox, Safari, Edge)',
      'Minimum 8GB RAM',
      'High-speed internet connection',
      'Screen resolution: 1920x1080 recommended'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
        alt: 'Engagement Dashboard'
      },
      {
        url: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80',
        alt: 'Response Management'
      },
      {
        url: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80',
        alt: 'Analytics Overview'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    faq: [
      {
        question: 'How does the automated response system work?',
        answer: 'Our AI-powered system analyzes incoming messages and provides contextually appropriate responses based on your customized rules.'
      },
      {
        question: 'Can I schedule posts across multiple platforms?',
        answer: 'Yes, you can schedule and manage content across all major social media platforms from a single dashboard.'
      },
      {
        question: 'What kind of reports are available?',
        answer: 'We provide comprehensive engagement reports, sentiment analysis, and ROI tracking.'
      }
    ]
  },
  {
    id: 'content-manager',
    title: 'Content Manager',
    icon: 'MessageCircle',
    description: 'Schedule and manage content across multiple platforms effortlessly.',
    price: '$79/mo',
    features: [
      'Multi-platform posting',
      'Content calendar',
      'Asset library',
      'Team collaboration',
      'Content approval workflow',
      'Performance tracking',
      'AI-powered suggestions',
      'Brand asset management'
    ],
    systemRequirements: [
      'Modern web browser (Chrome, Firefox, Safari, Edge)',
      'Minimum 4GB RAM',
      'Stable internet connection',
      'Storage: 5GB minimum for asset library'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        alt: 'Content Calendar'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        alt: 'Asset Library'
      },
      {
        url: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80',
        alt: 'Team Collaboration'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    faq: [
      {
        question: 'How many team members can I add?',
        answer: 'Our platform supports unlimited team members with different role permissions.'
      },
      {
        question: 'What file types are supported in the asset library?',
        answer: 'We support all major image, video, and document formats including JPG, PNG, MP4, PDF, and more.'
      },
      {
        question: 'Can I preview posts before publishing?',
        answer: 'Yes, you can preview how your content will look on each platform before scheduling or publishing.'
      }
    ]
  }
];