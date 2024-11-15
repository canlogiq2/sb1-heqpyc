import React from 'react';
import { Shield, Zap, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with advanced encryption and compliance measures.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with real-time updates and minimal latency.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless workflow with role-based access and team management.'
  },
  {
    icon: Star,
    title: '24/7 Support',
    description: 'Dedicated support team available round the clock for assistance.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600">Built with the latest technology for reliability and scale</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="relative group">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-center text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}