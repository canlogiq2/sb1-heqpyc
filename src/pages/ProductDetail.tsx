import React from 'react';
import { useParams } from 'react-router-dom';
import { BarChart2, Users, MessageCircle } from 'lucide-react';
import { products } from '../data/products';

const iconMap = {
  BarChart2: BarChart2,
  Users: Users,
  MessageCircle: MessageCircle,
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const Icon = iconMap[product.icon as keyof typeof iconMap];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Icon className="h-12 w-12 text-indigo-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="mt-2 text-xl text-gray-600">{product.description}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-8">
          <span className="inline-flex px-4 py-1 rounded-full text-lg font-semibold tracking-wide bg-indigo-100 text-indigo-800">
            {product.price}
          </span>
        </div>

        {/* Video Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Demo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-xl"
              src={product.videoUrl}
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot.url}
                alt={screenshot.alt}
                className="rounded-lg shadow-md hover:shadow-xl transition"
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Requirements</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-4">
              {product.systemRequirements.map((req, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {product.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition">
            Get Started with {product.title}
          </button>
        </div>
      </div>
    </div>
  );
}