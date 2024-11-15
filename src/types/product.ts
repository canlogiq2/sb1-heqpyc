export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  systemRequirements: string[];
  screenshots: {
    url: string;
    alt: string;
  }[];
  videoUrl: string;
  faq: {
    question: string;
    answer: string;
  }[];
  icon: string;
}